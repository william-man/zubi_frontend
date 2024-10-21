import React from "react";
import Button from "../Button/Button";
import FormInput from "./FormInput";

const LoginForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-6 text-center text-font font-helonik">
        Login to Zubi
      </h1>

      {/* Email Input */}
      <FormInput
        label="Email"
        type="email"
        id="email"
        placeholder="Enter your email"
        required
      />

      {/* Password Input */}
      <FormInput
        label="Password"
        type="password"
        id="password"
        placeholder="Enter your password"
        required
      />

      {/* Submit Button */}
      <div className="mb-4">
        <Button label="Login" onClick={handleSubmit} buttonType="cardButton" />
      </div>
    </form>
  );
};

export default LoginForm;