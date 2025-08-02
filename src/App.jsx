import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ProductsSection from "./components/ProductsSection";
import ExploreSection from "./components/ExploreSection";
import RealitySection from "./components/RealitySection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0">
        <img
          src="https://storage.googleapis.com/a1aa/image/9d60e961-15e2-4a57-d69c-04d46d6e9ac6.jpg"
          alt="VR Background"
          className="w-full h-[650px] object-cover"
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
