import Layout from "../components/Layout/Layout";
import CardsContainer from "../components/CardsContainer/CardsContainer";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="pt-16 p-4 md:p-8 lg:p-12">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-zubiLogo">
            Tutors
          </h1>
          <CardsContainer />
         </div>
      </Layout>
    </>
  );
};

export default Home;
