import React from 'react'

const Navbar = () => {
  // Navigation links array that can be easily modified
  const navLinks = [
    { name: 'Home', href: './' },
    { name: 'About', href: './' },
    { name: 'Demo', href: './' },
    { name: 'Sign-Up', href: './' }
  ];

  return (
    <div>
      <nav className='bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:p-6 lg:p-8'>
          <div className="flex items-center justify-between h-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="./" className='text-main-purple-hover text-heading-xl'>Kanban</a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                {navLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className='text-white hover:bg-main-purple-hover rounded-lg p-3'
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar