import Artikel from "../components/features/public/lannding/Artikel";
import Fitur from "../components/features/public/lannding/Fitur";
import Hero from "../components/features/public/lannding/Hero";
import Peta from "../components/features/public/lannding/Peta";
import Tujuan from "../components/features/public/lannding/Tujuan";

function LandingPage() {
  return (
    <div className="relative w-full">
      {/* image vector background */}
      <img
        src="images/landing-bg.png"
        alt="landing"
        className="absolute top-0 left-0 z-0 w-full object-cover"
      />
      <div className="relative z-10">
        <Hero />
        <Fitur />
        <Tujuan />
        <Peta />
        <Artikel />
      </div>
    </div>
  );
}

export default LandingPage;
