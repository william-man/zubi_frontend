import React from 'react';
import logo from '../../assets/logo.svg';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img src={logo} alt="Zubi Logo" className={`logo ${className}`} />
  );
};

export default Logo;
