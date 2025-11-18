import "../styles/FooterSection.css";
import logo from "../image/logo.svg";
import shahrak from "../image/shahrak.svg";
import bonyan from "../image/bonyan.svg";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Column 1: Links */}
        <div className="footer-column links-column">
          <h3 className="footer-title">لینک ها</h3>
          <ul className="links-list">
            <li>
              <Link to="/page1" className="footer-link">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link to="/product" className="footer-link">
                محصولات
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Contact Us */}
        <div className="footer-column contact-column">
          <h3 className="footer-title">ارتباط با ما</h3>
          <div className="social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              اینستاگرام
              <img src="/img2/tabler_brand-instagram.svg"></img>
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              تلگرام
              <img src="/img2/iconoir_telegram.svg"></img>
            </a>
            <a
              href="https://wa.me/989133183179"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              واتساپ
              <img src="/img2/mdi_whatsapp.svg"></img>
            </a>
          </div>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-column info-column">
          <h3 className="footer-title">اطلاعات تماس</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span>تلفن: ۰۹۱۳۲۱۸۳۱۲۹مهندس کیانی </span>
              <img src="/img2/mynaui_telephone.svg"></img>
            </div>
            <div className="contact-item">
              <span>تلفن ثابت: ۰۳۱۳۳۹۳۱۲۳۰ </span>
              <img src="/img2/mynaui_telephone.svg"></img>
            </div>
            <div className="contact-item">
              <span>payazobasiya@gmail.com :ایمیل </span>
              <img src="/img2/mail.svg"></img>
            </div>
            <div className="contact-item">
              <span>ساعات کاری:8 صبح تا 16</span>
              <img src="/img2/vector.svg"></img>
            </div>
          </div>
        </div>

        {/* Column 4: Company Info */}
        <div className="footer-column company-column">
          <div className="company-info">
            <img src={shahrak} className="company-logo"></img>
            <p>شهرک علمی و تحقیقاتی اصفهان</p>
            <img src={bonyan} className="company-logo"></img>
            <p>مرکز شرکت های دانش بنیان</p>
          </div>
        </div>

        {/* Column 5: About Company */}
        <div className="footer-column about-column">
          <h3 className="footer-title">پایا ذوب آسیا</h3>
          <img src={logo} className="image-logo1"></img>
          <p className="about-text">
            تولید کننده مواد اولیه ریخته گری وقطعات سرامیکی
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>شرکت پایاذوب آسیا | کلیه حقوق محفوظ است.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
