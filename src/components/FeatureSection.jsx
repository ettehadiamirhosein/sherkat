import React, { useState } from "react";
import "../styles/FeatureSection.css";
import tablerbrand from "../image/tabler_brand-sketch.svg";
import keybord from "../image/keyboard_arrow_down.svg";
import keybord1 from "../image/keyboard_arrow_down2.svg";
import phonecall from "../image/Phone call.svg";
import user from "../image/User.svg";
import park from "../image/icon-park-outline_ad-product.svg";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const featureDetails = {
    quality: {
      title: "کیفیت بالا",
      details: [
        "استاندارد های دنیا",
        "تضمین دقت در اجرا",
        "تلاش برای ارتقا کیفیت",
      ],
    },
    speed: {
      title: "پاسخگویی سریع",
      details: ["دسترسی آسان", "پاسخگویی در هر زمان", "عرضه ی بهترین پاسخ"],
    },
    customer: {
      title: "ارتباط مستقیم با مشتریان",
      details: ["توجه به نیاز مشتری", "عرضه و تقاضا", "بدون واسطه"],
    },
    services: {
      title: "ضمانت خدمات",
      details: ["تعهد کامل به کیفیت", "پشتیبانی کامل", "جلب رضایت مشتری"],
    },
  };

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="features-section">
      <div className="features-container">
        {/* Feature 1 */}
        <div
          className="feature-card"
          onMouseEnter={() => handleMouseEnter("quality")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="feature-icon">
            <img src={tablerbrand}></img>
          </div>
          {hoveredCard === "quality" ? (
            <ul className="details-list">
              {/* <div className="feature-text">کیفیت بالا</div> */}
              {featureDetails.quality.details.map((detail, index) => (
                <li key={index} className="detail-item">
                  • {detail}
                </li>
              ))}
            </ul>
          ) : (
            <div className="feature-text">کیفیت بالا</div>
          )}
          {hoveredCard === "quality" ? (
            <div className="feature-arrow">
              <img src={keybord1}></img>
            </div>
          ) : (
            <div className="feature-arrow">
              <img src={keybord}></img>
            </div>
          )}
        </div>

        {/* Feature 2 */}
        <div
          className="feature-card"
          onMouseEnter={() => handleMouseEnter("speed")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="feature-icon">
            <img src={phonecall}></img>
          </div>
          {hoveredCard === "speed" ? (
            <ul className="details-list">
              {featureDetails.speed.details.map((detail, index) => (
                <li key={index} className="detail-item">
                  • {detail}
                </li>
              ))}
            </ul>
          ) : (
            <div className="feature-text">پاسخگویی سریع</div>
          )}
          {hoveredCard === "speed" ? (
            <div className="feature-arrow">
              <img src={keybord1}></img>
            </div>
          ) : (
            <div className="feature-arrow">
              <img src={keybord}></img>
            </div>
          )}
        </div>

        {/* Feature 3 */}
        <div
          className="feature-card"
          onMouseEnter={() => handleMouseEnter("customer")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="feature-icon">
            <img src={user}></img>
          </div>
          {hoveredCard === "customer" ? (
            <ul className="details-list">
              {featureDetails.customer.details.map((detail, index) => (
                <li key={index} className="detail-item">
                  • {detail}
                </li>
              ))}
            </ul>
          ) : (
            <div className="feature-text1">ارتباط مستقیم با مشتریان</div>
          )}
          {hoveredCard === "customer" ? (
            <div className="feature-arrow">
              <img src={keybord1}></img>
            </div>
          ) : (
            <div className="feature-arrow">
              <img src={keybord}></img>
            </div>
          )}
        </div>

        {/* Feature 4 */}
        <div
          className="feature-card"
          onMouseEnter={() => handleMouseEnter("services")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="feature-icon">
            <img src={park}></img>
          </div>
          {hoveredCard === "services" ? (
            <ul className="details-list">
              {featureDetails.services.details.map((detail, index) => (
                <li key={index} className="detail-item">
                  • {detail}
                </li>
              ))}
            </ul>
          ) : (
            <div className="feature-text">ضمانت خدمات</div>
          )}
          {hoveredCard === "services" ? (
            <div className="feature-arrow">
              <img src={keybord1}></img>
            </div>
          ) : (
            <div className="feature-arrow">
              <img src={keybord}></img>
            </div>
          )}
        </div>
      </div>

      {/* New Section: Company Description */}
      <div className="company-description">
        <h2 className="description-title">
          ما هر سفارش سخت و پیچیده‌ای را طراحی می‌کنیم
        </h2>
        <p className="description-text">
          شرکت دانش بنیان پایاذوب آسیا طی چندین سال فعالیت های پویا در زمینه های
          پژوهشی و علمی هم اکنون از شرکت های دارای مجوز فناوری و مستقر در شهرک
          علمی تحقیقاتی اصفهان می باشد. فعالیت در راستای بومی سازی و رفع نیاز در
          واردات مواد نسوز مواد مصرفی در صنایع فولاد و پتروشیمی از اهداف این
          شرکت است. مجموعه «پایا ذوب آسیا» با سابقه درخشان در عرصه تولید انواع
          پودرهای ترمیت پایه‌ی الکل، پودر حرارتزا و عایق(اگزوترم)، ایزوترم، پودر
          ریخته‌گری شمش‌ریزی نیمه مداوم، قطعات سرامیکی و قطعات فایبر فعالیت
          می‌کند
        </p>
        <button className="view-products-button">
          <Link to="/product" className="view-products-button2">
            مشاهده محصولات
          </Link>
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection;
