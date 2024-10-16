import React from 'react';

interface FooterSectionProps {
  title: string;
  links: { name: string | JSX.Element; url: string | JSX.Element }[]; // Allow name to be string or JSX.Element
  isHorizontal?: boolean; // Optional prop to determine layout
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links, isHorizontal }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className={`list-none ${isHorizontal ? "flex flex-wrap justify-center md:justify-start" : ""}`}>
        {links.map((link, index) => (
          <li key={index} className={`mb-2 ${isHorizontal ? "mx-2" : ""} ${index === 0 && isHorizontal ? "md:ml-0" : ""}`}>
            {typeof link.url === 'string' ? (
              <a href={link.url} className="hover:underline">
                {link.name}
              </a>
            ) : (
              link.url // For social media icons (JSX)
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
