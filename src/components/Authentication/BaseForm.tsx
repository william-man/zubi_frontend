import React from "react";
import Button from "../Button/Button";
import FormInput from "./FormInput";

interface BaseFormProps {
  title: string;
  fields: {
    label: string;
    type: string;
    id: string;
    placeholder: string;
    required?: boolean;
  }[];
  buttonLabel: string;
  onSubmit: (e: React.FormEvent) => void;
}

const BaseForm: React.FC<BaseFormProps> = ({
  title,
  fields,
  buttonLabel,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
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

      <div className="mb-4">
      <Button label={buttonLabel} onClick={() => onSubmit} buttonType="cardButton" />
      </div>
    </form>
  );
};

export default BaseForm;