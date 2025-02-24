// newsModule.js - Core functionality for news aggregation

import axios from 'axios';

class NewsAggregator {
  constructor(options = {}) {
    this.apiKeys = {
      newsAPI: options.newsAPIKey || process.env.NEWS_API_KEY,
      guardian: options.guardianAPIKey || process.env.GUARDIAN_API_KEY,
      nyt: options.nytAPIKey || process.env.NYT_API_KEY
    };
    
    this.defaultSources = options.defaultSources || ['technology', 'business', 'science'];
    this.defaultCount = options.defaultCount || 10;
    this.cacheTimeout = options.cacheTimeout || 30 * 60 * 1000; // 30 minutes
    
    this.cache = {
      timestamp: {},
      data: {}
    };
  }
  
  // Main method to get news from multiple sources
  async getNews(options = {}) {
    const categories = options.categories || this.defaultSources;
    const count = options.count || this.defaultCount;
    const forceRefresh = options.forceRefresh || false;
    const cacheKey = this._generateCacheKey(categories, count);
    
    // Check cache first
    if (!forceRefresh && this._isCacheValid(cacheKey)) {
      return this.cache.data[cacheKey];
    }
    
    try {
      // Fetch from multiple sources in parallel
      const results = await Promise.all([
        this._fetchFromNewsAPI(categories, count),
        this._fetchFromGuardian(categories, count),
        this._fetchFromNYT(categories, count)
      ]);
      
      // Combine, deduplicate and sort
      const combinedNews = this._processResults(results);
      
      // Update cache
      this.cache.data[cacheKey] = combinedNews;
      this.cache.timestamp[cacheKey] = Date.now();
      
      return combinedNews;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw new Error('Failed to fetch news content');
    }
  }
  
  // Get news specifically related to productivity or relevant to tasks
  async getProductivityNews() {
    return this.getNews({
      categories: ['productivity', 'technology', 'science'],
      count: 5
    });
  }
  
  // Get news specifically filtered by user's task categories
  async getTaskRelatedNews(taskCategories) {
    return this.getNews({
      categories: taskCategories,
      count: 3
    });
  }
  
  // Private methods for fetching from different APIs
  async _fetchFromNewsAPI(categories, count) {
    if (!this.apiKeys.newsAPI) {
      return [];
    }
    
    try {
      const categoriesString = categories.join(',');
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          apiKey: this.apiKeys.newsAPI,
          category: categoriesString,
          pageSize: count
        }
      });
      
      return response.data.articles.map(article => ({
        title: article.title,
        description: article.description,
        url: article.url,
        source: article.source.name,
        publishedAt: article.publishedAt,
        imageUrl: article.urlToImage,
        apiSource: 'NewsAPI'
      }));
    } catch (error) {
      console.error('NewsAPI error:', error);
      return [];
    }
  }
  
  async _fetchFromGuardian(categories, count) {
    if (!this.apiKeys.guardian) {
      return [];
    }
    
    try {
      const response = await axios.get('https://content.guardianapis.com/search', {
        params: {
          'api-key': this.apiKeys.guardian,
          'q': categories.join(' OR '),
          'page-size': count,
          'show-fields': 'headline,trailText,thumbnail'
        }
      });
      
      return response.data.response.results.map(article => ({
        title: article.webTitle,
        description: article.fields?.trailText || '',
        url: article.webUrl,
        source: 'The Guardian',
        publishedAt: article.webPublicationDate,
        imageUrl: article.fields?.thumbnail || null,
        apiSource: 'Guardian'
      }));
    } catch (error) {
      console.error('Guardian API error:', error);
      return [];
    }
  }
  
  async _fetchFromNYT(categories, count) {
    if (!this.apiKeys.nyt) {
      return [];
    }
    
    try {
      const categoriesString = categories.join(' ');
      const response = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
        params: {
          'api-key': this.apiKeys.nyt,
          'q': categoriesString,
          'sort': 'newest',
          'page': 0
        }
      });
      
      return response.data.response.docs.slice(0, count).map(article => ({
        title: article.headline.main,
        description: article.abstract || article.snippet,
        url: article.web_url,
        source: 'The New York Times',
        publishedAt: article.pub_date,
        imageUrl: article.multimedia.length ? `https://www.nytimes.com/${article.multimedia[0].url}` : null,
        apiSource: 'NYT'
      }));
    } catch (error) {
      console.error('NYT API error:', error);
      return [];
    }
  }
  
  // Helper methods
  _generateCacheKey(categories, count) {
    return `${categories.sort().join('-')}_${count}`;
  }
  
  _isCacheValid(cacheKey) {
    if (!this.cache.data[cacheKey]) return false;
    
    const timestamp = this.cache.timestamp[cacheKey] || 0;
    return (Date.now() - timestamp) < this.cacheTimeout;
  }
  
  _processResults(results) {
    // Flatten the array of arrays
    const allArticles = [].concat(...results);
    
    // Remove duplicates by URL
    const uniqueUrls = new Set();
    const uniqueArticles = allArticles.filter(article => {
      if (uniqueUrls.has(article.url)) return false;
      uniqueUrls.add(article.url);
      return true;
    });
    
    // Sort by publication date
    return uniqueArticles.sort((a, b) => 
      new Date(b.publishedAt) - new Date(a.publishedAt)
    );
  }
  
  // Clear all caches
  clearCache() {
    this.cache = {
      timestamp: {},
      data: {}
    };
  }
}

export default NewsAggregator;