import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ProductsSection from "./components/ProductsSection";
import ExploreSection from "./components/ExploreSection";
import RealitySection from "./components/RealitySection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import main from './assets/main.png';
export default function App() {
  return (
    <div className="relative min-h-full bg-[#1a1640]">
      <div className="absolute inset-0">
        <img
          src={main}
          alt="VR Background"
          className="w-full h-[700px] object-cover"
        />
      </div>
      <Header />
      <MainContent />
      <div className="bg-gradient-to-b from-[#1a1640] via-[#3a2a7a] to-[#1a1640] min-h-screen text-white px-6 py-12">
        <ProductsSection />
        <ExploreSection />
        <RealitySection />
        <NewsletterSection />
        <Footer />
      </div>
    </div>
  );
}
