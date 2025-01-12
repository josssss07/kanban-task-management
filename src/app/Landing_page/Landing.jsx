'use client';

import { useState } from 'react';
import { Search, Menu } from 'lucide-react';

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center">
          <div className="text-2xl font-bold">TEMPLATE DSGN</div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-purple-400">ABOUT</a>
          <a href="#" className="hover:text-purple-400">DOWNLOAD</a>
          <a href="#" className="hover:text-purple-400">PRICING</a>
          <a href="#" className="hover:text-purple-400">FEATURES</a>
          <a href="#" className="hover:text-purple-400">CONTACT</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
            SIGN IN
          </button>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">
              Welcome.
            </h1>
            
            

            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
                FREE TRIAL
              </button>
              <button className="px-6 py-3 rounded-full border border-gray-700 hover:border-purple-500 transition-colors">
                see more
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="text-right space-y-4">
              <div className="flex items-center justify-end space-x-2">
                <div className="w-8 h-8 rounded-full bg-purple-600"></div>
                <h2 className="text-2xl">Landing page.</h2>
              </div>
              <p className="text-gray-400 max-w-md ml-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed diam. Improve inch varied insight far cure.
                Write wild equal quick journal event latest.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-gradient-to-r from-purple-900/20 to-blue-900/20 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute right-20 bottom-20 w-[400px] h-[400px] bg-gradient-to-r from-blue-900/20 to-purple-900/20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}