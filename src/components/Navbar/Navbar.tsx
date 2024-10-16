import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; 
import Logo from '../Logo/Logo'; // Importing the Logo component

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="flex items-center">
            <Logo className="w-8 h-8" />
            <span className="ml-2 text-xl font-bold text-gray-800">zubi</span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#my-account"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              My Account
            </a>
            <a
              href="#tutors"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Tutors
            </a>
            <a
              href="#courses"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Courses
            </a>
            <a
              href="#about-us"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              About Us
            </a>
            <a
              href="#reviews"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Reviews
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-label="Main menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#my-account"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
          >
            My Account
          </a>
          <a
            href="#tutors"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
          >
            Tutors
          </a>
          <a
            href="#courses"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
          >
            Courses
          </a>
          <a
            href="#about-us"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
          >
            About Us
          </a>
          <a
            href="#reviews"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
          >
            Reviews
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
