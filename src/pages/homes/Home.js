import { useEffect, useState } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import BannerOne from "../../components/banner/banner1/BannerOne";
import Footer from "../../components/common/footer/Footer";
import { IoIosCheckmarkCircle, IoMdStar, IoMdStarHalf } from "react-icons/io";
import imguser from "../../assets/images/user.png";
import other from "../../assets/images/other.jpg";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import RecommendedPlace from "../../components/places/RecommendedPlace";
import { url } from "../../environment";
import CircularProgress from "@mui/material/CircularProgress";
import { GiChickenOven, GiMeepleGroup } from "react-icons/gi";
import SectionsHeading from "../../components/common/SectionsHeading";
import PopularCategories from "../../components/other/categories/PopularCategories";

import CtaOne from "../../components/other/cta/CtaOne";
import Button from "../../components/common/Button";
import SectionDivider from "../../components/common/SectionDivider";
import sectiondata from "../../store/store";
import { ImageUrl } from "../../environment";
function Home() {
  const [AllCategories, setAllCategories] = useState([]);
  const [AllVistedPlaces, setAllVistedPlaces] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const [vistiedLoading, setVistiedLoading] = useState(false);
  const [LookingFor, setLookingFor] = useState({ id: "" });
  const token = localStorage.getItem("token");
  useEffect(() => {
    getAllCategories();
    getMostVisted();
    getUserMyListing();
    getUserMyImage();
    window.scrollTo(0, 0);
  }, [token]);

  const [Home1, setHom1] = useState("");

  const getUserMyImage = () => {
    fetch(`${url}/webpage/getWebImage`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Web Image", response);
        if (response.message === "Success") {
          response.doc?.map((item) => {
            if (item.pageName === "Home") {
              setHom1(ImageUrl + item.image[0]);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fullScreen = useMediaQuery("(max-width:425px)");
  const UserID = JSON.parse(localStorage.getItem("user"));

  const getAllCategories = () => {
    setLoading(true);
    fetch(`${url}/category/getAllcategory`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All categories", response);
        if (response.message === "Success") {
          let Array = [];
          let Array1 = [];

          response?.doc?.categories.map((item, index) => {
            Array.push({
              icon: "",
              title: item.name,
              stitle: "12 Listings",
              count:
                item._id === response?.doc?.count[index]?._id
                  ? response?.doc?.count[index]?.count
                  : 0,
              url:
                item?.name === "Property"
                  ? `/list-map-view/${item._id}`
                  : `/list-right-sidebar/${item._id}`,

              img: ImageUrl + item.image,
            });
          });

          setAllCategories(Array.slice(0, 7));
          let Obj = Array.slice(0, 7);
          if (Array.length > 6) {
            Obj[7] = {
              title: "Others",
              stitle: "12 Listings",

              url: "/all-categories",

              img: other,
            };
          }

          setAllCategories(Obj);

          setLoading(false);
          setTimeout(() => {
            console.log("Hello, World!");
            CheckImage();
          }, 6000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getUserMyListing = () => {
    fetch(`${url}/user/getMyListing`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        userid: UserID?.doc?._id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("User Listing", response);
        if (response.message === "Success") {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMostVisted = () => {
    setVistiedLoading(true);
    fetch(`${url}/listing/getPromotedListingIndexPage`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All Visted places", response);
        if (response.message === "Success") {
          let Array = [];

          response?.doc?.map((item, index) => {
            Array?.push({
              title: item.title,
              video: item.video,
              image: item.images ? ImageUrl + item.images[0] : "",
              bedge: "New Open",
              titleIcon: <IoIosCheckmarkCircle />,
              titleUrl: `/listing-details/${item._id}`,
              stitle: item.shortDescription,
              cardType: item.category.name,
              id: item._id,
              cardTypeIcon: <GiMeepleGroup />,
              author: imguser,
              authorUrl: "#",
              number: item.seller.phone,
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
            });
          });

          setAllVistedPlaces(Array);
          setVistiedLoading(false);
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

  const CheckImage = () => {
    console.log(AllCategories);
  };
  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    getUserMyListing();
  }, []);

  return (
    <main className="home-1">
      {}
      <GeneralHeader />
      {}
      <BannerOne
        Home3={Home1}
        setLookingFor={setLookingFor}
        LookingFor={LookingFor}
      />
      {}
      {}
      <section className="cat-area padding-top-100px padding-bottom-90px">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading
              className={"mt-1"}
              title={sectiondata.popularcategories.sectitle}
            />
          </div>
          {isLoading ? (
            <div
              className="row mt-5 "
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <CircularProgress />
            </div>
          ) : AllCategories.length > 0 ? (
            <div className="row mt-5">
              <PopularCategories catitems={AllCategories} />
            </div>
          ) : (
            <div
              className="row two-clmn margin-top-35px margin-bottom-35px text-align-center"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h2 className="text-align-center">{t("No Categories Found")}</h2>
            </div>
          )}
        </div>
      </section>

      <section className="card-area text-center padding-bottom-100px">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading
              className={"mt-1"}
              title={sectiondata.mostvisitedplaces.sectitle}
              descClass=" font-size-17 pr-3 mb-3"
            />
          </div>
          {vistiedLoading ? (
            <div
              className="row mt-5 "
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <CircularProgress />
            </div>
          ) : AllVistedPlaces.length > 0 ? (
            <RecommendedPlace recommendplaces={AllVistedPlaces} />
          ) : (
            <div
              className="row two-clmn margin-top-35px margin-bottom-35px text-align-center"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h2 className="text-align-center">{t("No Ads Found")}</h2>
            </div>
          )}
          {}
        </div>
      </section>

      <section className="cta-area section-bg column-sm-center padding-top-80px padding-bottom-80px">
        {sectiondata.calltoactions.cta1.shapes.map((img, index) => {
          return (
            <img
              src={img.img}
              key={index}
              alt="Cta Symble"
              className="symble-img"
            />
          );
        })}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 text-left">
              <SectionsHeading
                title={sectiondata.calltoactions.cta1.title}
                titleClass=" mb-3 font-size-28"
                descClass=" font-size-17"
                desc={sectiondata.calltoactions.cta1.content}
              />
            </div>

            <div className="col-lg-3">
              <div className="btn-box">
                <Button
                  text={sectiondata.calltoactions.cta1.btntext}
                  url={sectiondata.calltoactions.cta1.btnurl}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="cta-area cta-area3 padding-top-100px padding-bottom-100px section-bg">
        <CtaOne />
      </section>

      <Footer />
      <ScrollTopBtn />
    </main>
  );
}

export default Home;
