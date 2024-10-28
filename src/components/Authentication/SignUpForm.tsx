import React, { useState } from "react";
import BaseForm from "./BaseForm";

const SignUpForm: React.FC = () => {
  // State for each field
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add sign-up submission logic if needed
  };

  // Updated fields array with value and onChange for each field
  const signUpFields = [
    {
      label: "Full Name",
      type: "text",
      id: "name",
      placeholder: "Enter your full name",
      required: true,
      value: name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      placeholder: "Enter your email",
      required: true,
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    },
    {
      label: "Password",
      type: "password",
      id: "password",
      placeholder: "Enter your password",
      required: true,
      value: password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
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
