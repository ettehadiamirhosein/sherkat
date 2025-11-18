import React, { useState } from "react";
import "../styles/PartnersSection.css";
import sfrain from "../image/sfrain.svg";
import arak from "../image/arak.svg";
import ghaltak from "../image/ghaltak.svg";
import iack from "../image/iack.svg";
import sepahan from "../image/sepahan.svg";

const PartnersSection = () => {
  const [activePartner, setActivePartner] = useState(3); // لوگوی وسطی (سری سوم) به صورت دیفالت فعال است

  // مجموعه لوگوها و نام‌های شرکت‌ها
  const partners = [
    {
      id: 1,
      name: "شرکت ایران غلتک",
      logo: <img src={ghaltak}></img>,
    },
    {
      id: 2,
      name: "ماشین سازی اراک ",
      logo: <img src={arak}></img>,
    },
    {
      id: 3,
      name: "مجتمع فولاد اسفراین ",
      logo: <img src={sfrain}></img>,
    },
    {
      id: 4,
      name: "شرکت فولاد آلیاژی اصفهان ",
      logo: <img src={iack}></img>,
    },
    {
      id: 5,
      name: "غلتک سازان سپاهان ",
      logo: <img src={sepahan}></img>,
    },
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title"> مشتریان ما </h2>

        <div className="partners-grid">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className={`partner-item ${
                activePartner === partner.id ? "active" : ""
              }`}
              onMouseEnter={() => setActivePartner(partner.id)}
              onMouseLeave={() => setActivePartner(3)} // وقتی از همه خارج شد، به لوگوی وسطی برگرد
            >
              <div className="partner-logo-wrapper">
                {partner.logo}
                {activePartner === partner.id && (
                  <div className="partner-name">{partner.name}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
