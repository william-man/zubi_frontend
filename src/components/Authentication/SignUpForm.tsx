import React from "react";
import Button from "../Button/Button";
import FormInput from "./FormInput";

const SignUpForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-6 text-center text-font font-helonik">
        Sign up for Zubi
      </h1>

      {/* Name Input */}
      <FormInput
        label="Full Name"
        type="text"
        id="name"
        placeholder="Enter your full name"
        required
      />

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
        <Button label="Sign up" onClick={handleSubmit} buttonType="cardButton" />
      </div>
    </form>
  );
};

export default SignUpForm;