import React from 'react';

const Navbar = ({
  navigationLinks = [
    { path: '/', label: 'Home' },
    //add more paths here later 
  ],
  onDashboardClick = () => window.location.href = '/#'
}) => {
  return (
    <nav className="bg-very-dark-grey shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl">
            <a href="/" className="text-white">
              Kanban- Manage Your Tasks 
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {navigationLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="text-gray-300 hover:text-white px-3 py-2"
              >
                {link.label}
              </a>
            ))}

            {/* Button */}
            <button
              className="px-4 py-2 bg-main-purple text-white rounded hover:bg-main-purple-hover transition-colors"
              onClick={onDashboardClick}
            >
              Go To Dashboard
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;