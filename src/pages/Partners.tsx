import Layout from "../components/Layout/Layout";
import OurPartners from "../components/Partners/OurPartners";

const Partners = () => {
  return (
    <>
      <Layout>
        <div className="mt-16 p-4 md:p-8 lg:p-12">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-zubiText">
            Our Partners
          </h1>
          <OurPartners />
         </div>
      </Layout>
    </>
  );
};

export default Partners;
