import "../styles/Navbar.css";
import logo from "../image/logo.svg";
import file from "../image/File text.svg";
import tabler from "../image/tabler_box.svg";
import Icon from "../image/Icon button togglable - standard.svg";
import Search from "../image/search.svg";
import insta from "../image/insta.svg";
import phone from "../image/phone.svg";
import tell from "../image/tel.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/payazobasia?igsh=ajZpZGVkZWpzMnR2",
      "_blank"
    );
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${+989202183129}`;
    window.open(url, "_blank");
  };

  const handleTelegramClick = () => {
    window.open(`https://t.me/${+989202183129}`, "_blank");
  };

  return (
    <nav className="navbar">
      {/* Top Row - Logo and Right Items */}
      <div className="navbar-top">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-icon">
            <img className="logo-letter" src={logo}></img>
          </div>
          <div className="logo-text">
            <div>
              <div className="logo-main">paya</div>
              <div className="logo-sub">zob</div>
            </div>
            <div className="logo-sub1">Asia</div>
          </div>
        </div>

        {/* Right Items */}
        <div className="top-right-items">
          <div className="top-item">
            <span>رفع نیاز واردات کشور</span>
            <div className="star-icon">
              <img className="star-symbol" src={Icon}></img>
            </div>
          </div>

          <div className="top-item">
            <span>مختارع ارزیاب پودر</span>
            <div className="box-icon">
              <img className="box-symbol" src={tabler}></img>
            </div>
          </div>

          <div className="top-item">
            <span>تولید کننده برتر</span>
            <div className="document-icon">
              <img className="document-symbol" src={file}></img>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Search and Navigation */}
      <div className="navbar-bottom">
        {/* Search Bar - Updated Structure */}
        <div className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="جست و جو"
              className="search-input"
            />
            <button className="search-button-inside">
              <img className="search-button-img" src={Search}></img>
            </button>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <button onClick={handleInstagramClick} className="social-button">
              <img className="social-button-img" src={insta}></img>
            </button>
            <button onClick={handleWhatsAppClick} className="social-button">
              <img className="social-button-img" src={phone}></img>
            </button>
            <button onClick={handleTelegramClick} className="social-button">
              <img className="social-button-img" src={tell}></img>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/product" className="nav-link">
            محصولات
          </Link>
          <Link to="/page1" className="nav-link active">
            صفحه اصلی
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
