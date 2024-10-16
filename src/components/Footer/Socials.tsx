import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import FooterSection from './FooterSection';

const Socials: React.FC = () => {
  const links = [
    { name: <FaFacebook className="hover:text-[#FFD166] transition-colors duration-200" />, url: 'https://facebook.com' },
    { name: <FaTwitter className="hover:text-[#FFD166] transition-colors duration-200" />, url: 'https://twitter.com' },
    { name: <FaInstagram className="hover:text-[#FFD166] transition-colors duration-200" />, url: 'https://instagram.com' },
    { name: <FaTiktok className="hover:text-[#FFD166] transition-colors duration-200" />, url: 'https://tiktok.com' },
    { name: <FaYoutube className="hover:text-[#FFD166] transition-colors duration-200" />, url: 'https://youtube.com' },
    { name: <FaWhatsapp className="hover:text-[#FFD166] transition-colors duration-200" />, url: 'https://whatsapp.com' },
  ];

  return <FooterSection title="Socials" links={links} isHorizontal />;
};

export default Socials;
