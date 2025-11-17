// import React from "react";
// import "../styles/MapSection.css";
// import map from "../image/map.svg";

// const MapSection = () => {
//   // آدرس شرکت (می‌توانید با آدرس واقعی جایگزین کنید)
//   const companyAddress = "اصفهان، خیابان اصلی، کوچه شماره ۱۲، پلاک ۳۴";
//   const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//     companyAddress
//   )}`;

//   return (
//     <section className="map-section">
//       <div className="map-container">
//         <h2 className="map-title">موقعیت ما</h2>

//         <div className="world-map-wrapper">
//           {/* SVG World Map */}
//           <img src={map}></img>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MapSection;

import React from "react";
import map from "../image/map.png.png";
import "../styles/MapSection.css";

const MapSection = () => {
  // آدرس شرکت (می‌توانید با آدرس واقعی جایگزین کنید)
  const companyAddress =
    "اصفهان،خیابان 22بهمن،روبه روی مجتمع اداری امیرکبیر،ساختمان غدیر،شهرک علمی تحقیقاتی ،پلاک";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    companyAddress
  )}`;

  return (
    <section className="map-section">
      <div className="map-container">
        {/* <h2 className="map-title">موقعیت ما</h2> */}

        <div className="map-image-container">
          {/* عکس نقشه جهان */}
          <img src={map} alt="نقشه جهان" className="map-image" />

          {/* مارکر نارنجی (عکس) روی ایران */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-marker"
          >
            <img
              src="/mdi_location.svg"
              alt="مکان شرکت"
              className="marker-image"
            />
          </a>
          <p className="paragraf">
            آدرس دفتر: اصفهان،خیابان 22بهمن،روبه روی مجتمع اداری
            امیرکبیر،ساختمان غدیر،شهرک علمی تحقیقاتی ،پلاک003
            <p>آدرس کارخانه : شهرک صنعتی سجزی،فازتوسعه</p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
