import React from 'react'
import { CheckCircle, Layout, Calendar, Users, ArrowRight, Clock } from 'lucide-react';

const HomePageDesign = () => {
  return (
    <div className='min-h-screen bg-black'>
        <div className='max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8'>
            <div className='text-center p-10'>
                <div className='text-heading-xxxx-large'>
                  <h1>Manage Tasks, <span className='text-main-purple'>Boost Productivity</span></h1>
                </div>
                <div>
                  <p className='text-standout-m text-gray-600 mb-8 max-w-2xl mx-auto'>Streamline your workflow, collaborate seamlessly, and accomplish more with our intuitive task management platform.</p>
                </div>
            </div>
            <div className='flex justify-center'>
              <button
                className='flex items-center justify-center px-8 py-4 bg-main-purple text-white rounded hover:bg-main-purple-hover transition-colors'
              >
                Start a Free Trial
              </button>
            </div>
        </div>
    </div>
  )
}

export default HomePageDesign