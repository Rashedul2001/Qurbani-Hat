import BreedSection from "@/components/Homepage/BreedSection";
import FeaturedAnimalSection from "@/components/Homepage/FeaturedAnimalSection";
import FeaturedSection from "@/components/Homepage/FeaturedSection";
import HeroSection from "@/components/Homepage/HeroSection";
import TipsSection from "@/components/Homepage/TipsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection/>
      <FeaturedAnimalSection />
      <BreedSection/>
      <TipsSection/>

    </>

  );
}
