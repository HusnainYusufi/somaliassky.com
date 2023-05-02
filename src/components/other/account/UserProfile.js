import React, { useEffect } from "react";
import GeneralHeader from "../../common/GeneralHeader";
import Breadcrumb from "../../common/Breadcrumb";
import UserSidebar from "./UserSidebar";
import PlaceGrid from "../../places/PlaceGrid";
import Button from "../../common/Button";
import CircularProgress from "@mui/material/CircularProgress";

import { FiRefreshCw } from "react-icons/fi";
import NewsLetter from "../cta/NewsLetter";
import { useParams } from "react-router-dom";

import Footer from "../../common/footer/Footer";
import imguser from "../../../assets/images/user.png";
import Select from "react-select";
import { GiChickenOven } from "react-icons/gi";
import { IoIosCheckmarkCircle, IoMdStar, IoMdStarHalf } from "react-icons/io";
import ScrollTopBtn from "../../common/ScrollTopBtn";
import sectiondata from "../../../store/store";
import { url, ImageUrl } from "../../../environment";
const states = {
  BreadcrumbImg: require("../../../assets/images/bread-bg.jpg"),
};
function UserProfile() {
  const { id } = useParams();

  const [IsLoading, setIsLoading] = React.useState(false);
  const [AllCategory, setAllCategory] = React.useState([]);
  const [AllListing, setAllListing] = React.useState([]);
  const [Details, setDetails] = React.useState({});
  useEffect(() => {
    getUserListing();
    getAllCategory();

    const UserID = JSON.parse(localStorage.getItem("user"));
    const UserStore = JSON.parse(localStorage.getItem("userDoc"));
  }, []);

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

  const UserID = JSON.parse(localStorage.getItem("user"));

  const getUserListing = () => {
    setIsLoading(true);
    fetch(`${url}/user/getUserStore`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sellerid: id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("User Listing", response);
        if (response.message === "Success") {
          setAllListing(
            response?.doc?.map((item) => ({
              title: item.title,
              video: item.video,
              image: item.images ? ImageUrl + item.images[0] : "",
              bedge: "New Open",
              titleIcon: <IoIosCheckmarkCircle />,
              titleUrl: `/listing-details/${item._id}`,
              stitle: item.shortDescription,
              id: item._id,
              cardType: item.category.name,
              cardTypeIcon: <GiChickenOven />,
              author: imguser,
              authorUrl: "#",
              number: item.seller?.phone,
              website: "www.mysitelink.com",
              date: getTimeStamp(item.createdAt),
              view: "204",
              ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
              ],
              ratingNum: "4.5",
            }))
          );
          setDetails({
            img: response?.doc[0]?.seller.profileImage,
            name: response?.doc[0]?.seller.username,
            date: getTimeStamp(response?.doc[0]?.seller?.createdDate),
            address: "101 Parkview, New York",
            number: response?.doc[0]?.seller.phone,
            storeCoverImage: response?.doc[0]?.seller?.storeCoverImage,
            length: response?.doc?.length,
            email: response?.doc[0]?.seller.email,
            website: "www.techydevs.com",
            websiteUrl: "https://techydevs.com",
          });
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllCategory = () => {
    fetch(`${url}/category/getAllcategory`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All Category", response);
        if (response.message === "Success") {
          setAllCategory(
            response?.doc?.categories?.map((item) => ({
              value: item._id,
              label: item.name,
            }))
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const productsByCategory = (Val) => {
    console.log(Val);
    setIsLoading(true);

    fetch(`${url}/user/storeProductsByCategory`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sellerid: id,
        cateid: Val.value,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("User Listing", response);
        if (response.message === "Success") {
          setAllListing(
            response?.doc?.map((item) => ({
              title: item.title,
              video: item.video,
              image: item.images ? ImageUrl + item.images[0] : "",
              bedge: "New Open",
              titleIcon: <IoIosCheckmarkCircle />,
              titleUrl: `/listing-details/${item._id}`,
              stitle: item.shortDescription,
              id: item._id,
              cardType: item.category.name,
              cardTypeIcon: <GiChickenOven />,
              author: imguser,
              authorUrl: "#",
              number: item.seller?.phone,
              website: "www.mysitelink.com",
              date: getTimeStamp(item.createdAt),
              view: "204",
              ratings: [
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStar />,
                <IoMdStarHalf />,
                <IoMdStar className="last-star" />,
              ],
              ratingNum: "4.5",
            }))
          );
          setDetails({
            img: response?.doc[0]?.seller.profileImage,
            name: response?.doc[0]?.seller.username,
            date: getTimeStamp(response?.doc[0]?.seller?.createdDate),
            address: "101 Parkview, New York",
            number: response?.doc[0]?.seller.phone,
            length: response?.doc?.length,
            email: response?.doc[0]?.seller.email,
            website: "www.techydevs.com",
            websiteUrl: "https://techydevs.com",
          });
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="user-profile">
      {}
      <GeneralHeader />

      {}
      <Breadcrumb
        CurrentPgTitle="User Profile"
        MenuPgTitle="Pages"
        img={
          Details?.storeCoverImage
            ? ImageUrl + Details?.storeCoverImage
            : states.BreadcrumbImg
        }
      />

      <section className="user-profile-area padding-top-40px padding-bottom-100px">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="user-content">
                <UserSidebar usercontent={Details} />
              </div>
            </div>

            <div className="col-lg-8">
              <h3 className="widget-title">{Details.name}'s Listings</h3>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="title-shape"></div>
                <div className="col-lg-4">
                  <Select options={AllCategory} onChange={productsByCategory} />
                </div>
              </div>
              {IsLoading ? (
                <div
                  className="col-lg-12 row mt-5 "
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress />
                </div>
              ) : AllListing.length > 0 ? (
                <div className="row two-clmn margin-top-35px">
                  <PlaceGrid griditems={AllListing} />
                </div>
              ) : (
                <div
                  className="row two-clmn margin-top-35px margin-bottom-35px text-align-center"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <h2 className="text-align-center">No Listing Found</h2>
                </div>
              )}

              {/* <div className="row two-clmn margin-top-35px">
                <PlaceGrid griditems={AllListing} />
              </div> */}

              {/* <div className="row">
                <div className="col-lg-12">
                  <div className="button-shared text-center">
                    <Button
                      text="load more listing"
                      url="#"
                      className="border-0"
                    >
                      <span>
                        <FiRefreshCw />
                      </span>
                    </Button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default UserProfile;
