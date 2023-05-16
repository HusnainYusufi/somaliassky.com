import React, { useState, useEffect } from "react";
import { BsGrid, BsListUl } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import GeneralHeader from "../../components/common/GeneralHeader";
import CircularProgress from "@mui/material/CircularProgress";
import Breadcrumb from "../../components/common/Breadcrumb";
import PopularCategoriesTwo from "../../components/other/categories/PopularCategoriesTwo";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ListingListSidebar from "../../components/sidebars/ListingListSidebar";
import Button from "../../components/common/Button";
import Pagination from "@mui/material/Pagination";
import { useLocation } from "react-router-dom";

import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import imguser from "../../assets/images/user.png";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import Select from "react-select";
import {
  IoIosCheckmarkCircle,
  IoIosFitness,
  IoIosRocket,
  IoMdCut,
  IoMdFitness,
  IoMdMusicalNotes,
  IoMdPaperPlane,
  IoMdStar,
  IoMdStarHalf,
} from "react-icons/io";
import breadcrumbimg from "../../assets/images/bread-bg.jpg";
import PlaceGrid from "../../components/places/PlaceGrid";
import sectiondata from "../../store/store";
import { ImageUrl, url } from "../../environment";
import { GiChickenOven, GiMeepleGroup } from "react-icons/gi";
const state = {
  selectedCatOp: null,
  title: "Showing 1 to 6 of 30 entries",
  breadImg: breadcrumbimg,
  navs: [
    {
      path: "/listing-list",
      icon: <BsListUl />,
      active: false,
    },
    {
      path: "/listing-grid",
      icon: <BsGrid />,
      active: false,
    },
  ],
  shortby: [
    {
      value: 0,
      label: "Short by",
    },
    {
      value: 1,
      label: "Short by default",
    },
    {
      value: 2,
      label: "High Rated",
    },
    {
      value: 3,
      label: "Most Reviewed",
    },
    {
      value: 4,
      label: "Popular Listing",
    },
    {
      value: 5,
      label: "Newest Listing",
    },
    {
      value: 6,
      label: "Older Listing",
    },
    {
      value: 7,
      label: "Price: low to high",
    },
    {
      value: 8,
      label: "Price: high to low",
    },
    {
      value: 9,
      label: "Price: high to low",
    },
    {
      value: 10,
      label: "Random listing",
    },
  ],
};
function ListRightSidebar() {
  const [AllSubCategories, setAllSubCategories] = useState([]);
  const [Allpages, setAllpages] = useState(0);
  const [AllListing, setAllListing] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [MinPrice, setMinPrice] = useState();
  const [MaxPrice, setMaxPrice] = useState();
  const [Sort, setSort] = useState();
  const [CategoryId, setCategoryId] = useState("");
  const [Home1, setHom1] = React.useState("");

  const token = localStorage.getItem("token");
  const location = useLocation();

  const data = JSON.parse(new URLSearchParams(location.search).get("data"));
  useEffect(() => {
    getUserMyImage();
    if (data) {
      SearchListing();
    } else {
      getAllListing();
    }
  }, [token]);

  const [t, i18n] = useTranslation("common");

  const getUserMyImage = () => {
    // setListingLoader(true);
    fetch(`${url}/webpage/getWebImage`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // "access-control-allow-origin": "*",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Web Image", response);
        if (response.message === "Success") {
          response.doc?.map((item) => {
            if (item.pageName === "Explore") {
              setHom1(ImageUrl + item.image[0]);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllListing = (e, pagnum) => {
    setLoading(true);
    fetch(`${url}/listing/xxx${pagnum ? pagnum : 1}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        // authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All Listing", response);
        setAllpages(response.doc.pages);
        if (response.message === "Success") {
          let NewArray = [];
          NewArray = response?.doc?.promoted?.concat(response?.doc?.listings);
          console.log(NewArray);
          setAllListing(
            NewArray?.map((item) => ({
              // icon: <GiChickenOven />,
              title: item.title,
              video: item.video,
              image: item.images ? ImageUrl + item.images[0] : "",
              bedge: "Posted by " + item.seller?.role,
              titleIcon: <IoIosCheckmarkCircle />,
              titleUrl: `/listing-details/${item._id}`,
              categoryName: item.category.name,
              id: item._id,
              stitle: item.shortDescription,
              cardType: item.category.name,
              cardTypeIcon: <GiMeepleGroup />,
              author: imguser,
              authorUrl: "#",
              isPermoted: item.isPromoted,
              number: item?.seller?.phone,
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
              // url:   `/list-right-sideba/${item._id}`,
              // img: img1
            }))
          );

          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getlistingByFilter = (event) => {
    setLoading(true);
    fetch(`${url}/listing/filter`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        // authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        categoryId: CategoryId ? CategoryId : "0000",
        location: "New york",
        minPrice: MinPrice ? MinPrice : 0,
        maxPrice: MaxPrice ? MaxPrice : 999999,
        sort: Sort ? Sort : "sdasda",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Filter Listing", response);
        if (response.message === "Success") {
          // setAllpages(response.doc.pages);
          let NewArray = [];
          NewArray = response?.doc?.promoted?.concat(response?.doc?.listings);
          console.log(NewArray);
          // setAllCategories(
          setAllListing(
            NewArray?.map((item) => ({
              // icon: <GiChickenOven />,
              title: item.title,
              video: item.video,
              image: item.images ? ImageUrl + item.images[0] : "",
              bedge: "Posted by " + item.seller?.role,
              titleIcon: <IoIosCheckmarkCircle />,
              titleUrl: `/listing-details/${item._id}`,
              categoryName: item.category.name,
              id: item._id,
              stitle: item.shortDescription,
              cardType: item.category.name,
              cardTypeIcon: <GiMeepleGroup />,
              author: imguser,
              authorUrl: "#",
              isPermoted: item.isPromoted,
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
              // url:   `/list-right-sideba/${item._id}`,
              // img: img1
            }))
          );

          setLoading(false);
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

  const SearchListing = (e) => {
    // e.preventDefault();
    // setVistiedLoading(true);
    setLoading(true);

    fetch(`${url}/listing/searchFilterMain1`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        // authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        title: data.title ? data.title : "xxx",
        location: data.location ? data.location : "xxx",
        category: data.category ? data.category : "xxx",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All Search Result", response);
        if (response.message === "Success") {
          //   navigate.push("/");
          // setAllCategories(response.doc)
          // console.log(response?.doc.categories[0].image);
          let NewArray = [];
          NewArray = response?.doc?.promoted?.concat(response?.doc?.listings);
          console.log(NewArray);
          // setAllCategories(
          setAllListing(
            NewArray?.map((item) => ({
              // icon: <GiChickenOven />,
              title: item.title,
              video: item.video,
              image: item.images ? ImageUrl + item.images[0] : "",
              bedge: "Posted by " + item.seller?.role,
              titleIcon: <IoIosCheckmarkCircle />,
              titleUrl: `/listing-details/${item._id}`,
              categoryName: item.category.name,
              id: item._id,
              stitle: item.shortDescription,
              cardType: item.category.name,
              cardTypeIcon: <GiMeepleGroup />,
              author: imguser,
              authorUrl: "#",
              isPermoted: item.isPromoted,
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
              // url:   `/list-right-sideba/${item._id}`,
              // img: img1
            }))
          );

          // setAllListing(NewArray);
          setLoading(false);

          // {
          // pathname: "/list-right-sidebar-list",
          // state: { data },
          // });

          // );
          // setVistiedLoading(false);
          //   localStorage.setItem('token',response.doc)
          // setTimeout(() => {
          //   console.log("Hello, World!");
          //   CheckImage();
          // }, 6000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="list-right-sidebar">
      {/* Header */}
      <GeneralHeader />

      {/* Breadcrumb */}
      <Breadcrumb
        // CurrentPgTitle="List Right Sidebar"
        MenuPgTitle="Listings"
        img={Home1}
      />

      {/* Place List */}
      <section className="card-area padding-top-40px padding-bottom-100px">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-12">
              <div className="generic-header margin-bottom-30px">
                <div className=" col-lg-3 col-md-3 col-sm-12 short-option ml-3">
                  <Select placeholder="Short by" options={state.shortby} />
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 ">
                  <p className="showing__text text-right">{t(state.title)}</p>
                </div>
              </div>
            </div>
            {isLoading ? (
              <div
                className="col-lg-8 row mt-5 "
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <CircularProgress />
              </div>
            ) : AllListing?.length === 0 ? (
              <div className="col-lg-8 row align-items-center justify-content-center">
                <h3>{t("No Listing Found")}</h3>
              </div>
            ) : (
              <div className="col-lg-8 row align-items-start">
                <PlaceGrid griditems={AllListing} />
              </div>
            )}
            <div className="col-lg-4">
              <ListingListSidebar
                getlistingByFilter={() => getlistingByFilter()}
                setCategoryId={setCategoryId}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                setSort={setSort}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="button-shared text-center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Pagination
                  count={Allpages}
                  variant="outlined"
                  shape="rounded"
                  onChange={(e, Value) => getAllListing(e, Value)}
                />
              </div>
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

export default ListRightSidebar;
