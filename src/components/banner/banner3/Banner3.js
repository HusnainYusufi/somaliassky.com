import React from "react";
import SectionsHeading from "../../common/SectionsHeading";
import Banner3Tab from "./Banner3Tab";
import BannerParticle from "../../other/BannerParticle";
import BannerOneSearchInput from "../banner1/SearchFilterSale";

function Banner3({ bgImg, herotitle, herocontent }) {
  return (
    <>
      <section
        className="hero-wrapper hero-wrapper4"
        id="home"
        style={{ backgroundVideo: "url(" + bgImg + ")" }}
      >
        <div className="hero-overlay"></div>
        {bgImg ? (
          <div className="video-bg">
            {/* <video autoPlay loop>
              <source src={bgImg} />
            </video> */}
          </div>
        ) : (
          ""
        )}
        <BannerParticle />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-heading">
                <SectionsHeading title={herotitle} desc={herocontent} />
              </div>

              <BannerOneSearchInput />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner3;
