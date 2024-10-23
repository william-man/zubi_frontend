import React from "react";
import { ButtonProps } from "../../types/interfaces";

const Button: React.FC<ButtonProps> = ({ label, onClick, buttonType, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={
        buttonType === "cardButton"
          ? "bg-buttonBg text-zubiText font-helonik py-3 px-11  text-lg rounded-full transition duration-300 ease-in-out hover:bg-zubiLogo"
          : "bg-buttonBg text-zubiText font-helonik py-4 px-6 text-xl rounded-full transition duration-300 ease-in-out hover:bg-zubiLogo"
      }
      style={{ margin: "2px" }}
    >
      {label}
    </button>
  );
};

export default Button;
