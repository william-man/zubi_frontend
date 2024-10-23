import React, { useState } from "react";
import BaseForm from "../Authentication/BaseForm";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    setError(null);  // Reset error message
    setSuccess(null); // Reset success message
  
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setSuccess("Login successful");
        console.log("Login successful:", data);
        window.location.href = '/';
      } else {
        setError(data.message || "Login failed");
      }
    } catch {
      setError("Something went wrong, please try again.");
    }
  };

  const fields = [
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
    <>
      <BaseForm
        title="Log In"
        fields={fields}
        buttonLabel="Log In"
        onSubmit={handleSubmit}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </>
  );
};

export default LoginForm;