import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ProductsSection from "./components/ProductsSection";
import ExploreSection from "./components/ExploreSection";
import RealitySection from "./components/RealitySection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import main from "/main.png";
import AuthPage from "./components/AuthPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="relative min-h-full bg-[#1a1640]">
        {/* Always visible */}
        <Header />
        <Routes>
           <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/home"
            element={
              <>
                {/* Hero Background + Main */}
                <div className="relative inset-0">
                  <img
                    src={main}
                    alt="VR Background"
                    className="w-full h-[700px] object-cover"
                  />

                  {/* Overlayed MainContent */}
                  <div className="absolute inset-0">
                    <MainContent />
                  </div>
                </div>

                {/* Sections with ids */}
                <div className="bg-gradient-to-b from-[#1a1640] via-[#3a2a7a] to-[#1a1640] min-h-screen text-white px-6 py-12 space-y-20">
                  <section id="about">
                    <ProductsSection />
                  </section>

                  <section id="company">
                    <ExploreSection />
                  </section>

                  <section id="services">
                    <RealitySection />
                  </section>

                  <section id="contact">
                    <NewsletterSection />
                  </section>

                  <Footer />
                </div>
              </>
            }
          />
        </Routes>
      </div>

    </Router >
  );
}
