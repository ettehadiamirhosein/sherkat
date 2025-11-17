// src/components/InteractiveCardsSection.js
import React, { useState } from "react";
import "../styles/InteractiveCards.css";

const InteractiveCardsSection = () => {
  const [openCard, setOpenCard] = useState(null);

  const cards = [
    {
      id: 3,
      title: "ایزوله شمش ریزی تک لایه",
      subtitle: "نیمه مداوم",
      image: "/img2/isotak.png",
      code: "IPZ1-s",
    },
    {
      id: 4,
      title: "ایزوله شمش ریزی دولایه",
      subtitle: "نیمه مداوم",
      image: "/img2/isotak2.png",
      code: "IPZ2-s",
    },
    {
      id: 5,
      title: "ایزوله شمش ریزی سه لایه",
      subtitle: "نیمه مداوم",
      image: "/img2/isotak3.png",
      code: "IPZ3-s",
    },
    // {
    //   id: 4,
    //   title: "قطعات شکل‌دار سرامیکی",
    //   subtitle: "آلومینیوم",
    //   image: "https://via.placeholder.com/400x300/333333/ffffff?text=Machine",
    //   code: "IPZ1-s",
    // },
    // {
    //   id: 5,
    //   title: "قطعات شکل‌دار سرامیکی",
    //   subtitle: "آلومینیوم",
    //   image: "https://via.placeholder.com/400x300/333333/ffffff?text=Engine",
    //   code: "IPZ1-s",
    // },
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
        <div className="section-header">
          <h2 className="section-title">دسته‌بندی محصولات</h2>
          <p className="section-label">ایزوله ها </p>
        </div>

        <div className="cards-grid">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <div className="card-image-container">
                <img src={card.image} alt={card.title} className="card-image" />
              </div>

              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-subtitle">{card.subtitle}</p>

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

export default InteractiveCardsSection;
