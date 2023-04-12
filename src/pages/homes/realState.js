import React, { useEffect } from "react";
import HeaderTwo from "../../components/common/HeaderTwo";
import BannerOne from "../../components/banner/banner1/BannerOne";
import RecommendedPlace from "../../components/places/RecommendedPlace";

import BannerOneSearchInput from "../../components/banner/banner1/SearchFilterSale";
import PopularCategoriesTwo from "../../components/other/categories/PopularCategoriesTwo";
import SectionsHeading from "../../components/common/SectionsHeading";
import BrowseCategoriesThree from "../../components/other/categories/BrowseCategoriesThree";
import PlaceOne from "../../components/places/PlaceOne";
import InfoBoxOne from "../../components/other/infoboxes/infobox1/InfoBoxOne";
import FunFactsOne from "../../components/other/funfacts/funfacts1/FunFactsOne";
import Testimonial from "../../components/sliders/Testimonial";
import SectionDivider from "../../components/common/SectionDivider";
import LatestBlog from "../../components/blogs/LatestBlog";
import CtaOne from "../../components/other/cta/CtaOne";
import ClientLogo from "../../components/sliders/ClientLogo";
import Button from "../../components/common/Button";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import MapViewCluster from "../../components/contact/MapViewCluster";
import sectiondata from "../../store/store";

function RealState() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="home-5">
      {/* Header */}
      <HeaderTwo />

      {/* Mapview */}
      <MapViewCluster />

      {/* Popular Categories */}
      <section
        className="hero-wrapper5 section-bg padding-top-50px padding-bottom-40px"
        style={{ backgroundColor: "#585e6f" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <BannerOneSearchInput />

              <div className="hero-catagory after-none text-center mt-4">
                <PlaceOne
                  places={sectiondata.categories.browsecategories4.categories}
                />

                {/* <PopularCategoriesTwo catitems={sectiondata.categories.popularcategories.lists} title={sectiondata.categories.popularcategories.title} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Categories */}
      <section className="card-area text-center padding-top-100px padding-bottom-100px">
        <div className="container">
          <div className="row section-title-width text-center">
          <RecommendedPlace
            recommendplaces={sectiondata.mostvisitedplaces.places}
          />
          </div>
        </div>
      </section>

 
      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default RealState;
