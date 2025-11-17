import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeatureSection";
import ProductCategoriesSection from "./ProductCategoriesSection";
import AboutSection from "./AboutSection";
import PartnersSection from "./PartnersSection";
import MapSection from "./MapSection";
import ProductFirstSection from "./ProductFirstSection";
import FooterSection from "./FooterSection";
import SpecialProductsSection from "./SpecialProductsSection";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductCategoriesSection />
        <AboutSection />
        <PartnersSection />
        <SpecialProductsSection />
        <MapSection />
        {/* <ProductFirstSection /> */}
      </main>

      <FooterSection />
    </div>
  );
};

export default HomePage;
