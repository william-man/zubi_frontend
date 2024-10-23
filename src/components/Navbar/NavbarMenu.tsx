import React from "react";
import NavbarLink from "./NavbarLink";

interface NavbarMenuProps {
  menuItems: { label: string; href: string }[];
  className?: string;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ menuItems, className }) => {
  return (
    <div
      className={`${className} flex flex-col md:flex-row md:space-x-8 items-end`}
    >
      {menuItems.map((item) => (
        <NavbarLink
          key={item.label}
          label={item.label}
          href={item.href}
          className={
            item.label === "Log in" || item.label === "Log out"
              ? "bg-zubiLogo text-white py-2 px-4 rounded-full hover:text-white hover:bg-zubiLogo"
              : "text-zubiText hover:text-zubiLogo px-3 py-2 text-sm font-medium"
          }
        />
      ))}
    </div>
  );
};

export default NavbarMenu;
