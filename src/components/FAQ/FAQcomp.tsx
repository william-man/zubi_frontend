import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Zubi?",
    answer: "Zubi is an online platform that connects students with qualified tutors for personalised learning experiences."
  },
  {
    question: "How do I sign up?",
    answer: "You can sign up by clicking on the 'Sign Up' button on our homepage and filling out the registration form."
  },
  {
    question: "How can I contact support?",
    answer: "You can contact our support team through the 'Contact Us' page or email us at support@zubi.com."
  },
  {
    question: "What subjects do you offer tutoring in?",
    answer: "We offer tutoring in a variety of subjects including Math, Chemistry, English, and more. Please check our Subjects page for a full list."
  },
  {
    question: "Can I become a tutor?",
    answer: "Yes! If you are interested in becoming a tutor, please visit our Careers page for more information."
  },
];

const FAQcomp: React.FC = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <p className="mt-1">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQcomp;