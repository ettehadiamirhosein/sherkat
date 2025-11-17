import React from "react";
import "../styles/ProductCategoriesSection.css";
import mortar from "../image/la_mortar-pestle.svg";
import vector from "../image/Vector.svg";
import seramic from "../image/seramic.svg";
import bag from "../image/game-icons_powder-bag (1).svg";

const ProductCategoriesSection = () => {
  return (
    <section className="product-categories-section">
      {/* Background Image */}
      <div className="background-image-container">
        <img
          src="/Group.png"
          alt="Welder Background"
          className="background-image"
        />
        <div className="overlay1"></div>
      </div>

      {/* Content */}
      <div className="content-wrapper">
        <h2 className="section-title">دسته بندی محصولات</h2>

        <div className="categories-grid">
          {/* Category 1 */}
          <div className="category-item">
            <div className="category-icon">
              <img src={bag}></img>
            </div>
            <div className="category-name">پودرها</div>
          </div>

          {/* Category 2 */}
          <div className="category-item">
            <div className="category-icon">
              <img src={vector}></img>
            </div>
            <div className="category-name">اسليوها</div>
          </div>

          {/* Category 3 */}
          <div className="category-item">
            <div className="category-icon">
              <img src={seramic}></img>
            </div>
            <div className="category-name">سراميك ها</div>
          </div>

          {/* Category 4 */}
          <div className="category-item">
            <div className="category-icon">
              <img src={vector}></img>
            </div>
            <div className="category-name">ايزوله ها</div>
          </div>

          {/* Category 5 */}
          <div className="category-item">
            <div className="category-icon">
              <img src={mortar}></img>
            </div>
            <div className="category-name">ملات ها</div>
          </div>
          <div className="feature-malat">
            <img className="malat" src="/malat2.svg"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
