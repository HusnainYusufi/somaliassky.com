import React, { useEffect } from "react";
import HeaderTwo from "../../components/common/HeaderTwo";
import RecommendedPlace from "../../components/places/RecommendedPlace";
import authorimg from "../../assets/images/small-team1.jpg"; // 67*60
import CircularProgress from "@mui/material/CircularProgress";
import BannerOneSearchInput from "../../components/banner/banner1/SearchFilterSale";
import PlaceOne from "../../components/places/PlaceOne";
import { RiHotelBedLine } from "react-icons/ri";

import Footer from "../../components/common/footer/Footer";
import { IoIosCheckmarkCircle, IoMdStar, IoMdStarHalf } from "react-icons/io";

import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import MapViewCluster from "../../components/contact/MapViewCluster";
import sectiondata from "../../store/store";
import { url, ImageUrl } from "../../environment";
function RealState() {
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllCordinate();
    getAllSales();
  }, []);

  const [Cordinates, setAllCordinates] = React.useState([]);
  const [SalesPlaces, setAllSalesPlaces] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
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

  const getAllSales = () => {
    setLoading(true);
    fetch(`${url}/listing/getPromotedListingRent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Recommend places----->>>", response);
        if (response.message === "Success") {
          let item = response?.doc;
          let Array = [];
          item?.map((ele) => {
            Array?.push({
              // icon: <GiChickenOven />,
              title: ele.title,
              video: ele.video,
              image: ele.images ? ImageUrl + ele.images[0] : "",
              bedge: "New Open",
              titleIcon: <IoIosCheckmarkCircle />,
              titleUrl: `/listing-details/${item._id}`,
              stitle: ele.shortDescription,
              cardType: ele.category.name,
              id: ele._id,
              cardTypeIcon: <RiHotelBedLine />,
              author: authorimg,
              authorUrl: "#",
              number: ele.seller.phone,
              website: "www.mysitelink.com",
              date: getTimeStamp(ele.createdAt),
              view: "204",
              ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
              ],
              ratingNum: "4.5",
              // url:   `/list-right-sideba/${item._id}`,
              // img: img1
            });
          });
          setLoading(false);
          setAllSalesPlaces(Array);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTimeStamp = (timestamp) => {
    const timeDifference = Date.parse(new Date()) - Date.parse(timestamp);
    let timeAgo;
    console.log(timeDifference, timestamp);
    if (timeDifference < 1000) {
      timeAgo = "Just now";
    } else if (timeDifference < 60000) {
      timeAgo = `${Math.floor(timeDifference / 1000)} seconds ago`;
    } else if (timeDifference < 3600000) {
      timeAgo = `${Math.floor(timeDifference / 60000)} minutes ago`;
    } else if (timeDifference < 86400000) {
      timeAgo = `${Math.floor(timeDifference / 3600000)} hours ago`;
    } else {
      timeAgo = `${Math.floor(timeDifference / 86400000)} days ago`;
    }

    return <span>{timeAgo}</span>;
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
          {/* <div className="row section-title-width text-center"> */}
          {isLoading ? (
            <div
              className="row mt-5 "
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <CircularProgress />
            </div>
          ) : SalesPlaces.length > 0 ? (
            <RecommendedPlace recommendplaces={SalesPlaces} />
          ) : (
            <div
              className="row two-clmn margin-top-35px margin-bottom-35px text-align-center"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h2 className="text-align-center">No Listing Found</h2>
            </div>
          )}
        </div>
        {/* </div> */}
      </section>

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default RealState;
