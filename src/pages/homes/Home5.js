import React, { useEffect } from "react";
import HeaderTwo from "../../components/common/HeaderTwo";
import BannerOneSearchInput from "../../components/banner/banner1/BannerOneSearchInput";
import RecommendedPlace from "../../components/places/RecommendedPlace";
import GeneralMap from "../../components/contact/GeneralMap";
import img1 from "../../assets/images/img1.jpg";
import authorimg from "../../assets/images/small-team1.jpg";
import CircularProgress from "@mui/material/CircularProgress";

import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import sectiondata from "../../store/store";
import { RiHotelBedLine } from "react-icons/ri";
import { url, ImageUrl } from "../../environment";
import { IoIosCheckmarkCircle, IoMdStar, IoMdStarHalf } from "react-icons/io";
function Home5() {
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllCordinate();
    getAllSales();
  }, []);

  const [Cordinates, setAllCordinates] = React.useState([]);
  const [SalesPlaces, setAllSalesPlaces] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  const getAllCordinate = () => {
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

  const getAllSales = () => {
    setLoading(true);
    fetch(`${url}/listing/getPromotedListingSale`, {
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

  return (
    <main className="home-5">
      <HeaderTwo />

      <GeneralMap marker={Cordinates} />

      <section className="hero-wrapper5 section-bgNew padding-top-50px padding-bottom-40px">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <BannerOneSearchInput />

              <div className="hero-catagory after-none text-center mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cat-area padding-top-100px padding-bottom-90px">
        <div className="container">
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
      </section>

      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default Home5;
