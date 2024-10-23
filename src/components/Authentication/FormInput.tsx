import React from "react";
import { FormInputProps } from "../../types/interfaces";

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  id,
  placeholder,
  required,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        value={value} 
        onChange={onChange} 
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default FormInput;