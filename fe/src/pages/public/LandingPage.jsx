import Artikel from "../../components/features/public/landing/Artikel";
import Fitur from "../../components/features/public/landing/Fitur";
import Hero from "../../components/features/public/landing/Hero";
import Peta from "../../components/features/public/landing/Peta";
import Tujuan from "../../components/features/public/landing/Tujuan";

function LandingPage() {
  return (
    <div className="relative min-h-[5000px] w-full">
      {/* image vector background */}
      <img
        src="images/landing-bg-hero.png"
        alt="landing"
        className="absolute top-0 left-1/2 z-0 w-full -translate-x-1/2 object-cover"
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
