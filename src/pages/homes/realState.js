import React, { useEffect } from "react";
import HeaderTwo from "../../components/common/HeaderTwo";
import RecommendedPlace from "../../components/places/RecommendedPlace";

import BannerOneSearchInput from "../../components/banner/banner1/SearchFilterSale";
import PlaceOne from "../../components/places/PlaceOne";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import MapViewCluster from "../../components/contact/MapViewCluster";
import sectiondata from "../../store/store";
import { url } from "../../environment";
function RealState() {
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllCordinate();
  }, []);

  const [Cordinates, setAllCordinates] = React.useState([]);
  const getAllCordinate = () => {
    // setLoading(true)
    fetch(`${url}/listing/getAllCordinates`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("single Listing------>>>", response);
        if (response.message === "Success") {
          let item = response.doc;

          setAllCordinates(item);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="home-5">
      {/* Header */}
      <HeaderTwo />

      {/* Mapview */}
      <MapViewCluster marker={Cordinates} />

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
