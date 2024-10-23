import React from "react";

interface FormContainerProps {
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <div className="bg-zubiGreen p-6 rounded-lg shadow-lg w-full max-w-md">
      {children}
    </div>
  );
};

export default FormContainer;