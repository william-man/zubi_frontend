import React, { FormEvent } from "react";
import Button from "../Button/Button";
import FormInput from "./FormInput";
import { BaseFormProps } from "../../types/interfaces";

const BaseForm: React.FC<BaseFormProps> = ({
  title,
  fields,
  buttonLabel,
  onSubmit,
}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    onSubmit(e); // Call the provided onSubmit handler
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-6 text-center text-font font-helonik">
        {title}
      </h1>

      {fields.map((field) => (
        <FormInput
          key={field.id}
          label={field.label}
          type={field.type}
          id={field.id}
          placeholder={field.placeholder}
          required={field.required}
        />
      ))}

      <div className="flex justify-center">
        <Button
          label={buttonLabel}
          onClick={() => {}} 
          buttonType="cardButton"
          ariaLabel={`Submit ${buttonLabel} form`}
        />
      </div>
    </form>
  );
};

export default BaseForm;
