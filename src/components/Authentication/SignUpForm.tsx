import React from "react";
import BaseForm from "./BaseForm";

const SignUpForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const signUpFields = [
    {
      label: "Full Name",
      type: "text",
      id: "name",
      placeholder: "Enter your full name",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      id: "password",
      placeholder: "Enter your password",
      required: true,
    },
  ];

  return (
    <BaseForm
      title="Sign up for Zubi"
      fields={signUpFields}
      buttonLabel="Sign up"
      onSubmit={handleSubmit}
    />
  );
};

export default SignUpForm;
