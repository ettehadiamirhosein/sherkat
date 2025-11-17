import Navbar from "./Navbar";
import ProductFirstSection from "./ProductFirstSection";
import FooterSection from "./FooterSection";
import InteractiveCardsSection from "./InteractiveCardsSection";
import InteractiveCardsSection2 from "./InteractiveCardsSection2";
import InteractiveCardsSection3 from "./InteractiveCardsSection3";
import InteractiveCardsSection4 from "./InteractiveCardsSection4";
import InteractiveCardsSection5 from "./InteractiveCardsSection5";

const Productpage2 = () => {
  return (
    <div className="homepage-container">
      <Navbar />

      <main>
        <ProductFirstSection />
        <InteractiveCardsSection2 />
        <InteractiveCardsSection3 />
        <InteractiveCardsSection />
        <InteractiveCardsSection4 />
        <InteractiveCardsSection5 />
      </main>

      <FooterSection />
    </div>
  );
};

export default Productpage2;
