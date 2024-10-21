import React from "react";
import Button from "../Button/Button";
import FormInput from "./FormInput";
import { BaseFormProps } from "../../types/interfaces";

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

      <div className="flex justify-center">
        <Button
          label={buttonLabel}
          onClick={() => onSubmit}
          buttonType="cardButton"
          ariaLabel={`Submit ${buttonLabel} form`}
        />
      </div>
    </form>
  );
};

export default BaseForm;
