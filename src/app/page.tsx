import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { BenefitsBar } from "@/components/home/BenefitsBar";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { OffersSection } from "@/components/home/OffersSection";
import { CommunitySection } from "@/components/home/CommunitySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex w-full flex-col">
        <HeroSection />
        <BenefitsBar />
        <CategoriesSection />
        <ProductsSection />
        <OffersSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}
