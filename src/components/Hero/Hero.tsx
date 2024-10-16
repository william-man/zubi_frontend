import Logo from "../Logo/Logo";

function HeroSection() {
  return (
    <div className="h-screen mt-16 bg-zubiGreen flex flexcol justify-center content-center font-helonik text-white">
      <div className="hero-content flex flex-col items-center gap-6 mt-44">
        <Logo className="w-32" />
        <h1 className="text-8xl text-center">zubi</h1>
        <p className="text-center mt-4 text-2xl">Bridge your skills</p>
      </div>
    </div>
  );
}

export default HeroSection;
