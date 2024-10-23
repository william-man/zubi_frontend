import React, { useState } from "react";
import Layout from "../components/Layout/Layout"; 
import FormContainer from "../components/Authentication/FormContainer"; 
import LoginForm from "../components/Authentication/LoginForm"; 
import SignUpForm from "../components/Authentication/SignUpForm";

const Authentication: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <FormContainer>
          {isLogin ? <LoginForm /> : <SignUpForm />}
          <div className="text-center mt-4">
            <p className="text-font">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={toggleForm}
                className="text-zubiHighlight font-bold underline ml-1"
              >
                {isLogin ? "Sign up" : "Login"}
              </button>
            </p>
          </div>
        </FormContainer>
      </div>
    </Layout>
  );
};

export default Authentication;
