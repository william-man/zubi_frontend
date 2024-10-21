import React from "react";
import BaseForm from "./BaseForm";

const LoginForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const loginFields = [
    { label: "Email", type: "email", id: "email", placeholder: "Enter your email", required: true },
    { label: "Password", type: "password", id: "password", placeholder: "Enter your password", required: true },
  ];

  return (
    <BaseForm
      title="Login to Zubi"
      fields={loginFields}
      buttonLabel="Login"
      onSubmit={handleSubmit}
    />
  );
};

export default LoginForm;