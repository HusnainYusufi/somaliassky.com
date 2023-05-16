import React, { useState, useEffect } from "react";
import { BsGrid, BsListUl } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { useTranslation } from "react-i18next";

import GeneralHeader from "../../components/common/GeneralHeader";
import CircularProgress from "@mui/material/CircularProgress";
import Breadcrumb from "../../components/common/Breadcrumb";
import PopularCategoriesTwo from "../../components/other/categories/PopularCategoriesTwo";
import { useParams } from "react-router-dom";
import { GiChickenOven, GiMeepleGroup } from "react-icons/gi";
import { IoIosCheckmarkCircle, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { Link } from "react-router-dom";
import imguser from "../../assets/images/user.png";
import Pagination from "@mui/material/Pagination";
import ListingListSidebar from "../../components/sidebars/ListingListSidebar";
import Button from "../../components/common/Button";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import Select from "react-select";
import breadcrumbimg from "../../assets/images/bread-bg.jpg";
import PlaceGrid from "../../components/places/PlaceGrid";
import sectiondata from "../../store/store";
import { url, ImageUrl } from "../../environment";
import { useLocation } from "react-router-dom";
import Form from "antd/es/form/Form";

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
  const [isLoading, setLoading] = useState(false);
  const [CategoryId, setCategoryId] = useState("");
  const [FormFieldsSelected, setFormFieldsSelected] = useState([{ id: "" }]);
  const [t, i18n] = useTranslation("common");

  const [SubId, setSubId] = useState("");
  const [MinPrice, setMinPrice] = useState();
  const [MaxPrice, setMaxPrice] = useState();
  const [Sort, setSort] = useState();
  const [FormFields, setFormFields] = useState([]);
  const [Allpages, setAllpages] = useState(0);
  const [AllListing, setAllListing] = useState([]);
  const [LoadingListing, setLoadingListing] = useState(false);

  const token = localStorage.getItem("token");
  const [Home1, setHom1] = React.useState("");
  const location = useLocation();

  console.log(JSON.parse(new URLSearchParams(location.search).get("data")));
  useEffect(() => {
    getlistingByCategory();
    getUserMyImage();
  }, [token]);

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
  useEffect(() => {
    getlistingBySubcategory();
  }, [SubId]);

  const { id } = useParams();

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

  const getlistingByCategory = (e, pagNum) => {
    setLoading(true);
    setLoadingListing(true);
    fetch(`${url}/listing/getPromotedListingByCategory${pagNum ? pagNum : 1}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        // authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        catid: id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All Listing", response);
        if (response.message === "Success") {
          let NewArray = [];
          NewArray = response?.doc?.promoted?.concat(response?.doc?.listings);
          console.log(NewArray);
          setAllpages(response.doc.pages);
          setAllListing(
            NewArray?.map((item) => ({
              // icon: <GiChickenOven />,
              title: item.title,
              video: item.video,
              image: item.images ? ImageUrl + item.images[0] : "",
              bedge: "New Open",
              titleIcon: <IoIosCheckmarkCircle />,
              categoryName: item.category.name,
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
              // url:   `/list-right-sideba/${item._id}`,
              // img: img1
            }))
          );
          setAllSubCategories(
            response?.doc?.subcategories?.map((item) => ({
              // icon: <GiChickenOven />,
              title: item.name,
              stitle: "12 Listings",
              id: item._id,
              // url:   `/list-right-sideba/${item._id}`,
              // img: img1
            }))
          );

          setLoading(false);
          setLoadingListing(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getlistingByFilter = (event) => {
    console.log(FormFieldsSelected);

    let Docline = [];
    FormFieldsSelected.map((item) => {
      if (item.value && item.value.length > 0) {
        Docline.push({
          name: item.name,
          value: item.value,
        });
      }
    });
    console.log(Docline);
    setLoadingListing(true);
    fetch(`${url}/listing/filter`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        // authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        categoryId: id ? id : CategoryId ? CategoryId : "0000",
        location: "New york",
        minPrice: MinPrice ? MinPrice : 0,
        maxPrice: MaxPrice ? MaxPrice : 999999,
        sort: Sort ? Sort : "sdasda",
        additionalfield: Docline,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Filter Listing", response);
        if (response.message === "Success") {
          // setAllpages(response.doc.pages);
          setAllListing(
            response?.doc?.map((item) => ({
              // icon: <GiChickenOven />,
              title: item.title,
              video: item.video,
              image: item.images ? ImageUrl + item.images[0] : "",
              bedge: "New Open",
              titleIcon: <IoIosCheckmarkCircle />,
              titleUrl: `/listing-details/${item._id}`,
              stitle: item.shortDescription,
              id: item._id,

              cardType: item.category.name,
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
              // url:   `/list-right-sideba/${item._id}`,
              // img: img1
            }))
          );

          setLoading(false);
          setLoadingListing(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getlistingBySubcategory = (pagNum) => {
    console.log(SubId);
    setLoadingListing(true);
    if (!SubId) {
      return;
    }
    fetch(
      `${url}/listing/getPromotedListingBySubCategory${pagNum ? pagNum : 1}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          // authorization: `bearer ${token}`,
        },
        body: JSON.stringify({
          catid: SubId,
        }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("All Subcategory", response);
        if (response.message === "Success") {
          setAllpages(response.doc.pages);
          setFormFields(response.doc.filterfields);

          setAllListing(
            response?.doc?.listings?.map((item) => ({
              // icon: <GiChickenOven />,
              title: item.title,
              video: item.video,
              image: item.images ? ImageUrl + item.images[0] : "",
              bedge: "New Open",
              titleIcon: <IoIosCheckmarkCircle />,
              titleUrl: `/listing-details/${item._id}`,
              stitle: item.shortDescription,
              cardType: item.category.name,
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
              // url:   `/list-right-sideba/${item._id}`,
              // img: img1
            }))
          );
          setLoadingListing(false);
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
      {isLoading ? (
        <div
          className="row mt-5 "
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <CircularProgress />
        </div>
      ) : (
        <div
          className="hero-catagory after-none text-center mt-4"
          style={{ padding: "20px" }}
        >
          <PopularCategoriesTwo
            id={"Main2255"}
            setSubId={setSubId}
            catitems={AllSubCategories}
            title={sectiondata.categories.popularcategories.title}
          />
        </div>
      )}
      {/* Place List */}
      <section className="card-area padding-top-40px padding-bottom-100px">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-12">
              <div className="generic-header margin-bottom-30px">
                <ul className="generic-nav">
                  {state.navs.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          to={item.path}
                          className={item.active ? "active" : " "}
                        >
                          <span className="d-inline-block">{item.icon}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="short-option ml-3">
                  <Select placeholder="Short by" options={state.shortby} />
                </div>
                <p className="showing__text text-right">{state.title}</p>
              </div>
            </div>
            {LoadingListing ? (
              <div
                className="col-lg-8 row mt-5 "
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <CircularProgress />
              </div>
            ) : AllListing.length == 0 ? (
              <div className="col-lg-8 row align-items-center justify-content-center">
                <h3>{t("No Listing Found")}</h3>
              </div>
            ) : (
              <div className="col-lg-8 row align-items-start">
                <PlaceGrid
                  setAllListing={setAllListing}
                  griditems={AllListing}
                />
                {/* <Pagination
                  count={Allpages}
                  variant="outlined"
                  shape="rounded"
                  onChange={(e, Value) => getAllListing(e, Value)}
                /> */}
              </div>
            )}
            <div className="col-lg-4">
              <ListingListSidebar
                getlistingByFilter={() => getlistingByFilter()}
                setCategoryId={setCategoryId}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                FormFieldsSelected={FormFieldsSelected}
                setFormFieldsSelected={setFormFieldsSelected}
                setSort={setSort}
                FormFields={FormFields}
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
                  onChange={(e, Value) => getlistingByCategory(e, Value)}
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
