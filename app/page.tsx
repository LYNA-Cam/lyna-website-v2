import HeroSection from "@/sections/HeroSection";
import SecondSection from "../sections/SecondSection";
import Header from "@/components/layouts/header/Header";
import ThirdSection from "@/sections/ThirdSection";
import FeaturesSection from "@/sections/FeaturesSection";
import UserFeedbackSection from "@/sections/UserFeedbackSection";
import JoinClubSection from "@/sections/JoinClubSection";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <div className="relative h-full pt-[calc(64px+2*20px)]">
      <Header />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FeaturesSection />
      <UserFeedbackSection />
      <JoinClubSection />
      <Footer />
    </div>
  );
}
