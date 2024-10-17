import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../Logo/Logo";
import NavbarMenu from "./NavbarMenu";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "My Account", href: "/my-account" },
    { label: "Tutors", href: "/tutors" },
    { label: "Courses", href: "/courses" },
    { label: "About Us", href: "/about" },
    { label: "Reviews", href: "/reviews" },
  ];

  return (
    <nav className="bg-buttonBg shadow-md fixed w-full top-0 z-10 font-helonik">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo className="w-8 h-8" />
            <span className="ml-2 text-xl font-bold text-zubiText">zubi</span>
          </div>

          {/* Desktop Menu */}
          <NavbarMenu
            menuItems={menuItems}
            className="hidden md:flex space-x-8 items-center text-zubiText"
          />

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-zubiText hover:text-zubiLogo focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zubiLogo"
              aria-label="Main menu"
              aria-expanded={isOpen ? "true" : "false"}
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
