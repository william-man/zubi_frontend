import React from "react";
import { NavbarLinkProps } from "../../types/interfaces";

const NavbarLink: React.FC<NavbarLinkProps> = ({ label, href, className }) => {
  return (
    <a
      href={href}
      className={`text-zubiText hover:text-zubiLogo px-3 py-2 text-sm font-medium ${className}`}
    >
      {label}
    </a>
  );
};

export default NavbarLink;
