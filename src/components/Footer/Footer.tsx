import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#495D63] text-white py-8 px-4 md:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        {/* Useful Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Useful Information</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Donate</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Partners</a></li>
          </ul>
        </div>

        {/* Legal and Socials in the Same Column */}
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Terms and Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Socials</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="hover:text-[#6F2DBD]">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#6F2DBD]">
                <FaTwitter /> {/* Updated to X icon */}
              </a>
              <a href="#" className="hover:text-[#6F2DBD]">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#6F2DBD]">
                <FaTiktok />
              </a>
              <a href="#" className="hover:text-[#6F2DBD]">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-[#6F2DBD]">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm text-gray-300">
        © {new Date().getFullYear()} Zubi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
