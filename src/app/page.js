import FeaturedAnimalSection from "@/components/Homepage/FeaturedAnimalSection";
import FeaturedSection from "@/components/Homepage/FeaturedSection";
import HeroSection from "@/components/Homepage/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection/>
      <FeaturedAnimalSection />

    </>

  );
}
