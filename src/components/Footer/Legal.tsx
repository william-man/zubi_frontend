import React from 'react';
import FooterSection from './FooterSection';

const Legal = () => {
  const legalLinks = [
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms and Conditions', url: '#' },
  ];

  return <FooterSection title="Legal" links={legalLinks} />;
};

export default Legal;
