import Navbar from "./components/Navbar/Navbar";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import HeroSection from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";

function App() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <Navbar /> 
      <HeroSection />
      <CardsContainer />
      <Button label="Learn from me" onClick={handleButtonClick} />
      <Footer />
    </>
  );
}

export default App;
