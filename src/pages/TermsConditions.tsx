import Layout from "../components/Layout/Layout";
import TermsAndConditions from "../components/TermsCondition/TermsAndConditions";

const TermsConditions = () => {
  return (
    <>
      <Layout>
        <div className="mt-16 p-4 md:p-8 lg:p-12">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-zubiText">
            Terms and Conditions
          </h1>
          <TermsAndConditions />
         </div>
      </Layout>
    </>
  );
};

export default TermsConditions;
