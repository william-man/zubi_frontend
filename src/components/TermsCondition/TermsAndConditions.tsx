import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <p className="mb-4">
        Welcome to zubi! These terms and conditions outline the rules and regulations for the use of our website and services.
      </p>
      <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
      <p className="mb-4">
        By accessing this website we assume you accept these terms and conditions in full. Do not continue to use zubi if you do not accept all of the terms and conditions stated on this page.
      </p>
      <h3 className="text-xl font-semibold mb-2">2. License to Use Website</h3>
      <p className="mb-4">
        Unless otherwise stated, zubi and/or its licensors own the intellectual property rights published on this website and materials used on zubi. Subject to the license below, all these intellectual property rights are reserved.
      </p>
      <h3 className="text-xl font-semibold mb-2">3. User Account</h3>
      <p className="mb-4">
        If you create an account on the site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
      </p>
      <h3 className="text-xl font-semibold mb-2">4. Changes to Terms</h3>
      <p className="mb-4">
        We may revise these terms from time to time. The revised terms will apply to the use of our website from the date of publication of the revised terms on this website.
      </p>
      <h3 className="text-xl font-semibold mb-2">5. Contact Us</h3>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at: <strong>jack@zubi.com</strong>.
      </p>
    </div>
  );
};

export default TermsAndConditions;