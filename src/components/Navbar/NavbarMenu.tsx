import React from "react";
import NavbarLink from "./NavbarLink";

interface NavbarMenuProps {
  menuItems: { label: string; href: string }[];
  className?: string;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ menuItems, className }) => {
  return (
    <div className={`${className} flex flex-col md:flex-row md:space-x-8 items-end`}>
      {menuItems.map((item) => (
        <NavbarLink key={item.label} label={item.label} href={item.href} />
      ))}
    </div>
  );
};

export default NavbarMenu;
