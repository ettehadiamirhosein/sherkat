import "../styles/AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about-section" className="about-section">
      {/* Background Image */}
      <div className="background-image-container">
        <img
          src="https://placehold.co/1920x600/333333/FFFFFF?text=About+Background"
          alt="About Background"
          className="background-image"
        />
        <div className="overlay2"></div>
      </div>

      {/* Content */}
      <div className="content-wrappe">
        <h3 className="section-titl">درباره ما</h3>

        <div className="about-content">
          <p>پیشرو در تولید و تأمین فولاد با استانداردهای جهانی</p>
          <p>
            – بومی سازی و رفع نیاز در واردات مواد نسوز و مواد مصرفی در صنایع
            فولاد و پتروشیمی
          </p>
          <p>
            – ساخت و اختراع دستگاه ارزیاب پودر آگزوترم برای اولین بار در کشور
          </p>
          <p>– دارای گواهی دانش بنیان</p>
          <p>– دارای مجوز رسمی واحد فناوری</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
