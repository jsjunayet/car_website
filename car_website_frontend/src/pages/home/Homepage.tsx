import AwardSection from "./Award";
import BannerLayout from "./Bannar/BannerLayout";
import ChooseSection from "./ChooseSection";
import ContactSection from "./ContactSection";
import NewsLetter from "./NewsLetter";
import ProductSection from "./ProductSection";
import Statistics from "./Statistics";
const Homepage = () => {
  return (
    <div className=" mt-52">
      <div className="max-w-7xl mx-auto space-y-8 my-8">
        <BannerLayout />
      </div>
      {/* <FeaturedProduct /> */}
      <ProductSection />
      <ChooseSection />
      <Statistics />
      {/* <ReviewSection /> */}
      <AwardSection />
      <ContactSection />
      <NewsLetter />
    </div>
  );
};

export default Homepage;
