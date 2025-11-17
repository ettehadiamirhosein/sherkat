import React from "react";
import "../styles/HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-background">
        <img
          src="/img2/1762330331.png"
          alt="Background"
          className="background-image"
        />
        <div className="overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content-with-features">
        <h1 className="hero-title">پایا ذوب آسیا</h1>
        <div className="hero-subtitle">
          <a href="#about-section" className="subtitle-item">
            درباره ما
          </a>
          <Link to="/product" className="subtitle-item active">
            محصولات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
