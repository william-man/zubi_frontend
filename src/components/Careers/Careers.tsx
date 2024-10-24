import React from 'react';

const CareersComp: React.FC = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
      <p className="mb-4">
        At Zubi, we're always looking for talented and passionate individuals to join our team. If you're interested in making a difference in the world of education, we would love to hear from you!
      </p>
      
      <h3 className="text-xl font-semibold mb-2">Current Openings:</h3>
      <ul className="list-disc ml-6 mb-4">
        <li className="mb-2">
          <strong>Tutor</strong> - We are looking for enthusiastic tutors in various subjects. If you have a passion for teaching and helping students succeed, apply now!
        </li>
        <li className="mb-2">
          <strong>Marketing Specialist</strong> - Join our marketing team to help us spread the word about Zubi. Experience in digital marketing is a plus.
        </li>
        <li className="mb-2">
          <strong>Software Developer</strong> - If you have a knack for coding and love creating user-friendly applications, we want you on our development team!
        </li>
      </ul>
      
      <h3 className="text-xl font-semibold mb-2">How to Apply:</h3>
      <p className="mb-4">
        To apply for any of the positions listed above, please send your resume and a cover letter to <strong>careers@zubi.com</strong>.
      </p>
    </div>
  );
};

export default CareersComp;