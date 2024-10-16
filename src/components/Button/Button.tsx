import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void; 
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-buttonBg text-zubiText font-helonik py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-zubiLogo"
      style={{ margin: '2px' }}
    >
      {label}
    </button>
  );
};

export default Button;
