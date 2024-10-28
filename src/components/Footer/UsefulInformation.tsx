import FooterSection from './FooterSection';

const UsefulInformation = () => {
  const usefulInfoLinks = [

    { name: 'Contact Us', url: '/contactus' },
    { name: 'Careers', url: '/careers' },
    { name: 'Donate', url: '/donate' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Partners', url: '/partners' },
  ];

  return <FooterSection title="Useful Information" links={usefulInfoLinks} />;
};

export default UsefulInformation;
