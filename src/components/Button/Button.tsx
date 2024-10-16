import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  buttonType: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, buttonType }) => {
  return (
    <button
      onClick={onClick}
      className={
        buttonType === "cardButton"
          ? "bg-buttonBg text-zubiText font-helonik py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-zubiLogo"
          : "bg-buttonBg"
      }
      style={{ margin: "2px" }}
    >
      {label}
    </button>
  );
};

export default Button;
