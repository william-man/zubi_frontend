import Layout from "../components/Layout/Layout";
import HeroSection from "../components/Hero/Hero";
import CardsContainer from "../components/CardsContainer/CardsContainer";

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <CardsContainer />
      </Layout>
    </>
  );
};

export default Home;
