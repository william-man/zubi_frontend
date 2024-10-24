import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <p className="mb-2">Company Name: <span className="font-semibold">ZUBI</span></p>
      <p className="mb-2">Address: <span className="font-semibold">London, U.K.</span></p>
      <p className="mb-2">Mobile: <span className="font-semibold">+44 (0) 1234 567890</span></p>
    </div>
  );
};

export default ContactInfo;