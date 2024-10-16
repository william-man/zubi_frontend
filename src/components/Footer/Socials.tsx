import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import FooterSection from './FooterSection';

const Socials = () => {
  const socialLinks = [
    { name: <FaFacebookF className="text-font hover:text-zubiLogo transition-colors duration-300" />, url: "https://www.facebook.com" },
    { name: <FaTwitter className="text-font hover:text-zubiLogo transition-colors duration-300" />, url: "https://www.x.com" },
    { name: <FaInstagram className="text-font hover:text-zubiLogo transition-colors duration-300" />, url: "https://www.instagram.com" },
    { name: <FaTiktok className="text-font hover:text-zubiLogo transition-colors duration-300" />, url: "https://www.tiktok.com" },
    { name: <FaYoutube className="text-font hover:text-zubiLogo transition-colors duration-300" />, url: "https://www.youtube.com" },
    { name: <FaWhatsapp className="text-font hover:text-zubiLogo transition-colors duration-300" />, url: "https://www.whatsapp.com" },
  ];

  return (
    <FooterSection title="Socials" links={socialLinks} isHorizontal />
  );
};

export default Socials;
