// src/components/InteractiveCardsSection.js
import React, { useState } from "react";
import "../styles/InteractiveCards2.css";

const InteractiveCardsSection2 = () => {
  const [openCard, setOpenCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "پودر ingot casting",
      subtitle: "",
      image: "/img2/ingot2.png",
      code: "CPZI-s",
    },
    {
      id: 2,
      title: "پودر CCM",
      subtitle: " ",
      image: "/img2/ccm2.png",
      code: "IPZ2-s",
    },
    {
      id: 3,
      title: "  ترمیت پایه الکل",
      subtitle: " ",
      image: "/img2/termit2.png",
      code: "IPZ3-s",
    },
    {
      id: 4,
      title: "  اگزوترم",
      subtitle: "",
      image: "/img2/egzo.png",
      code: "EPZ-s",
    },
    {
      id: 5,
      title: " ایزوترم",
      subtitle: "",
      image: "/img2/ezoterm.png",
      code: "EPE-s",
    },
  ];

  const toggleCard = (id) => {
    setOpenCard(openCard === id ? null : id); // فقط یکی باز بشه
  };

  return (
    <section className="interactive-cards-section">
      <div
        className="container"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        {/* عنوان بخش */}
        <div className="section-header">
          <h2 className="section-title">دسته‌بندی محصولات</h2>
          <p className="section-label">پودرها</p>
        </div>

        {/* گرید کارت‌ها */}
        <div className="cards-grid">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <div className="card-image-container">
                <img src={card.image} alt={card.title} className="card-image" />
              </div>

              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-subtitle">{card.subtitle}</p>

                {/* کد محصول بالای فلش */}
                <div
                  className={`product-code-wrapper ${
                    openCard === card.id ? "open" : "closed"
                  }`}
                >
                  <div className="product-code">
                    <p className="code-label">کد محصول</p>
                    <p className="code-value">{card.code}</p>
                  </div>
                </div>

                {/* فلش وسط */}
                <button
                  onClick={() => toggleCard(card.id)}
                  className={`toggle-btn ${openCard === card.id ? "open" : ""}`}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* فلش پایین صفحه */}
        <div className="scroll-down">
          <button className="scroll-btn">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveCardsSection2;
