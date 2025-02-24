import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const MainArea = () => {
  const bgAnimationRef = useRef(null);

  useEffect(() => {
    anime({
      targets: '.animated-bg',
      translateX: [0, 30, -30, 0], // More exaggerated movement
      translateY: [0, -25, 25, 0],
      opacity: [0.3, 0.8, 0.3], // Higher opacity for a brighter glow
      easing: 'easeInOutQuad',
      duration: 5000, // Slower, smoother animation
      loop: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* Enhanced Glowing Animated Background Elements */}
      <div ref={bgAnimationRef}>
        <div className="animated-bg absolute top-10 right-10 w-48 sm:w-96 h-48 sm:h-96 bg-main-purple blur-[120px] sm:blur-[160px] opacity-50 rounded-full shadow-[0px_0px_80px_40px_rgba(128,0,128,0.5)]"></div>
        <div className="animated-bg absolute bottom-10 left-10 w-40 sm:w-80 h-40 sm:h-80 bg-deep-purple blur-[120px] sm:blur-[160px] opacity-50 rounded-full shadow-[0px_0px_80px_40px_rgba(75,0,130,0.5)]"></div>
        {/* Additional Glowing Blobs */}
        <div className="animated-bg absolute top-1/3 left-1/4 w-40 sm:w-72 h-40 sm:h-72 bg-main-purple blur-[100px] sm:blur-[140px] opacity-40 rounded-full shadow-[0px_0px_90px_50px_rgba(128,0,128,0.5)]"></div>
        <div className="animated-bg absolute bottom-1/4 right-1/3 w-36 sm:w-64 h-36 sm:h-64 bg-deep-purple blur-[100px] sm:blur-[140px] opacity-40 rounded-full shadow-[0px_0px_90px_50px_rgba(75,0,130,0.5)]"></div>
      </div>

      {/* Hero Section - Responsive Layout */}
      <main className="relative flex flex-col sm:flex-row items-center justify-center sm:justify-end min-h-screen px-6 text-center sm:text-right">
        <div className="max-w-2xl mt-[-30px] sm:mt-[-50px] flex flex-col items-end">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            BOOST YOUR WORKFLOW
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-10">
            Stay organized, streamline your workflow, and get more done with our powerful Kanban and productivity system. 
            Visualize your tasks, collaborate with your team, and track progress effortlessly—all in one place.
          </p>
          {/* Button fully aligned to the right */}
          <button className="bg-main-purple hover:bg-main-purple-hover text-white px-6 sm:px-8 py-3 rounded-full flex items-center space-x-2 transition-colors self-end">
            <span>Sign Up Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
};

export default MainArea;
