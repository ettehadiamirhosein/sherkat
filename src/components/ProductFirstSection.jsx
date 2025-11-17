import React, { useState, useEffect } from "react";
import "../styles/ProductFirstSection.css";

const ProductFirstSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const productCategories = [
    {
      id: 1,
      title: "پودر ترمیت پایه الکل  ",
      description:
        "یک ترکیب آتش‌زا از ترکیب یک فلز و یک اکسید فلز است. زمانی که ترمیت توسط حرارت یا واکنش شیمیایی مشتعل می‌شود، تحت یک واکنش اکسایش-کاهش گرمازا قرار می‌گیرد",

      image: "/img2/termit2.png",
    },
    {
      id: 2,
      title: "  پودر حرارت زا و عایق (پودر اگزوترم)",
      description:
        "​​​از دیگر محصولات شرکت پایاذوب آسیا می توان به پودرهای حرارت زا تحت عنوان اگزوترم و پودرهای عایق ایزوترم اشاره کرد که با کیفیت مشابه نمونه های خارجی در ایران بومی سازی شده اند.",
      image: "/img2/Mask group.svg",
    },
    {
      id: 3,
      title: "  پودر ریخته گری (شمش ریز نیمه مداوم)",
      description:
        "​پودر ریخته گری از پرکاربردترین محصولات در حوزه ریخته گری بوده که اجازه می دهدیک ماده روان کننده روی سطح قالب ایجاد شود که از چسبیدن فلز جامد به قالب جلوگیری می کند. این بدان معنی است که فلز مذاب می تواند به سرعت و به راحتی بدون چسبیدن ناخالصی به آن جامد شود.",
      image: "/img2/isotak2.png",
    },
  ];

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1280) setSlidesToShow(3);
      else if (window.innerWidth >= 640) setSlidesToShow(2);
      else setSlidesToShow(1);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % productCategories.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + productCategories.length) % productCategories.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="product-first-section">
      <div className="product-first-container">
        <div className="slider-wrapper">
          <div
            className="product-first-grid"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {productCategories.map((category) => (
              <div
                key={category.id}
                className="product-first-slide"
                style={{ minWidth: `${100 / slidesToShow}%` }}
              >
                <div className="product-first-card">
                  <div className="product-first-image">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="product-first-img"
                    />
                  </div>
                  <div className="product-first-title">
                    <div className="product-first-bullets">
                      <div className="product-first-bullet"></div>
                      <div className="product-first-bullet"></div>
                    </div>
                    <h3>{category.title}</h3>
                    <div className="product-first-bullets">
                      <div className="product-first-bullet"></div>
                      <div className="product-first-bullet"></div>
                    </div>
                  </div>
                  <div className="product-first-description">
                    {category.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="slider-arrow arrow-left" onClick={prevSlide}>
          ❮
        </button>
        <button className="slider-arrow arrow-right" onClick={nextSlide}>
          ❯
        </button>

        <div className="slider-dots">
          {productCategories.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFirstSection;
