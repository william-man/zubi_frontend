import UsefulInformation from './UsefulInformation';
import Legal from './Legal';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="bg-[#495D63] text-white py-8 px-4 md:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        {/* Useful Information Section */}
        <UsefulInformation />

        {/* Legal and Socials in the Same Column */}
        <div>
          <Legal />
          <div className="mt-6">
            <Socials />
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
