import React, { useEffect } from "react";
import BannerOneHeroHeading from "./BannerOneHeroHeading";
import BannerOneSearchInput from "./SearchFilterSale";
import BannerOneCategories from "./BannerOneCategories";
import sectiondata from "../../../store/store";
// import Home1 from "../../../assets/images/home1.jpg";
import { ImageUrl, url } from "../../../environment";

export default function BannerOne({ LookingFor, setLookingFor, Home3 }) {
  const [Home1, setHom1] = React.useState("");

  return (
    <>
      <section
        className="hero-wrapper"
        style={{ backgroundImage: "url(" + Home3 + ")" }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Banner One Hero Heading */}
              <BannerOneHeroHeading
                title={sectiondata.herobanners.banner1.title}
                content={sectiondata.herobanners.banner1.content}
                titleHighlight={sectiondata.herobanners.banner1.titleHighlight}
              />

              {/* Banner One Search Input */}
              <BannerOneSearchInput
                LookingFor={LookingFor}
                setLookingFor={setLookingFor}
              />

              {/* Banner One Categories */}
              {/* <BannerOneCategories
                title={sectiondata.categories.featuredcategories.title}
                items={sectiondata.categories.featuredcategories.items}
                connector={sectiondata.categories.featuredcategories.connector}
              /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
