//TODO: fix the animation feature for the mobile navbar

import React, { useState } from 'react';

const Navbar = () => {
  // Navigation links array that can be easily modified
  const navLinks = [
    { name: 'Home', href: './' },
    { name: 'About', href: './' },
    { name: 'Demo', href: './' },
    { name: 'Sign-Up', href: './' }
  ];

  const [isClicked, setIsClicked] = useState(false);
  const toggleNavBar = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="./" className="text-main-purple-hover text-heading-xl">Kanban</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-white hover:bg-main-purple-hover rounded-lg p-3"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              className="inline-flex items-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavBar}
            >
              {isClicked ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Fade-in Effect */}
      <div className={`md:hidden bg-black p-4 space-y-2 transition-opacity duration-500 ease-in-out ${isClicked ? "opacity-100" : "opacity-0 hidden"}`}>
        {navLinks.map((link, index) => (
          <a 
            key={index}
            href={link.href} 
            className="block text-white hover:bg-main-purple-hover rounded-lg p-3"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
