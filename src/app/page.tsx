import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer'

// Importar componentes de la página de inicio aquí
// import HeroSection from '@/components/home/HeroSection';
// import ProductsSection from '@/components/home/ProductsSection';
// import FeaturesSection from '@/components/home/FeaturesSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full">
        {/* Componentes de la página de inicio irán aquí */}
        {/* <HeroSection />
        <ProductsSection />
        <FeaturesSection /> */}
      </main>
      <Footer />
    </>
  );
}
