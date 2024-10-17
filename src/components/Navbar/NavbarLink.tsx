interface NavbarLinkProps {
  label: string;
  href: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ label, href }) => {
  return (
    <a
      href={href}
      className="text-zubiText hover:text-zubiLogo px-3 py-2 text-sm font-medium" 
    >
      {label}
    </a>
  );
};

export default NavbarLink;
