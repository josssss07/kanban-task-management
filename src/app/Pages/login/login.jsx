import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Login= ()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      // Placeholder for actual authentication logic
      // Replace with your authentication method (e.g., NextAuth.js, API call)
      console.log('Login attempt with:', { email, password });
      
      // Simulate authentication delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes - replace with actual login logic
      if (email && password) {
        window.location.href = '/dashboard';
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-black">
      <Head>
        <title>Login | Your App</title>
        <meta name="description" content="Login to your account" />
      </Head>
      
      <div className="m-auto w-full max-w-md p-8 space-y-8 bg-dark-grey rounded-xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-main-purple-hover">Welcome Back</h1>
          <p className="mt-2 text-semi-white">Sign in to your account</p>
        </div>
        
        {error && (
          <div className="p-3 text-sm text-white bg-red rounded-md">
            {error}
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-main-purple-hover">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 mt-1 text-white placeholder-very-dark-grey bg-dark-grey border border-medium-grey rounded-md focus:outline-none focus:ring-2 focus:ring-main-purple-hover focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-main-purple-hover">
                  Password
                </label>
                <Link 
                  href="/forgot-password"
                  className="text-xs text-main-purple-hover hover:text-main-purple-hover"
                >
                  Forgot your password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 text-semi-white placeholder-medium-grey bg-dark-grey border border-medium-grey rounded-md focus:outline-none focus:ring-2 focus:ring-main-purple-hover focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="w-4 h-4 text-purple-500 border-gray-700 rounded focus:ring-purple-500 bg-gray-800"
            />
            <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-400">
              Remember me
            </label>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 transition-colors duration-200"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
        
        <div className="text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link
            href="/register"
            className="font-medium text-purple-400 hover:text-purple-300"
          >
            Sign up
          </Link>
        </div>
        
        <div className="flex items-center pt-4">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="px-3 text-sm text-gray-500">Or continue with</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          {/* <button
            type="button"
            className="inline-flex justify-center items-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700"
          >
            Google
          </button> */}
          <button
            type="button"
            className="inline-flex justify-center items-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700"
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}


export default Login