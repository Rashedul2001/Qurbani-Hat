import BreadSection from "@/components/Homepage/BreadSection";
import FeaturedAnimalSection from "@/components/Homepage/FeaturedAnimalSection";
import FeaturedSection from "@/components/Homepage/FeaturedSection";
import HeroSection from "@/components/Homepage/HeroSection";
import TipsSection from "@/components/Homepage/TipsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection/>
      <FeaturedAnimalSection />
      <BreadSection/>
      <TipsSection/>

    </>

  );
}
