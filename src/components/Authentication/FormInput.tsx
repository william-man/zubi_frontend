import React from "react";
import { FormInputProps } from "../../types/interfaces";

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  id,
  placeholder,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-font font-medium mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-zubiText"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormInput;