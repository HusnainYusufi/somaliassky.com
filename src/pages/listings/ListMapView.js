import React, { useState, useEffect } from "react";
import { FiRefreshCw } from "react-icons/fi";
import GeneralHeader from "../../components/common/GeneralHeader";
import PlaceListing from "../../components/places/PlaceListing";
import ListingListSidebar from "../../components/sidebars/ListingListSidebar";
import Button from "../../components/common/Button";
import { useParams } from "react-router-dom";
import imguser from "../../assets/images/user.png";
import PopularCategoriesTwo from "../../components/other/categories/PopularCategoriesTwo";
import { GiChickenOven, GiMeepleGroup } from "react-icons/gi";

import { IoIosCheckmarkCircle, IoMdStar, IoMdStarHalf } from "react-icons/io";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import CircularProgress from "@mui/material/CircularProgress";

import GenericHeader from "../../components/common/GenericHeader";
import MapViewCluster from "../../components/contact/MapViewCluster";
import sectiondata from "../../store/store";
import { url, ImageUrl } from "../../environment";
function ListMapView() {
  const [AllSubCategories, setAllSubCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [CategoryId, setCategoryId] = useState("");

  const [SubId, setSubId] = useState("");
  const [MinPrice, setMinPrice] = useState();
  const [FormFields, setFormFields] = useState([]);

  const [MaxPrice, setMaxPrice] = useState();
  const [Sort, setSort] = useState();
  const [Allpages, setAllpages] = useState(0);
  const [AllListing, setAllListing] = useState([]);
  const [LoadingListing, setLoadingListing] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    getlistingByCategory();
  }, []);
  useEffect(() => {
    getlistingBySubcategory();
  }, [SubId]);
  const getlistingByCategory = (pagNum) => {
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
          // setAllpages(response.doc.pages);
          let NewArray = [];
          NewArray = response?.doc?.promoted?.concat(response?.doc?.listings);
          console.log(NewArray);
          setAllListing(
            NewArray?.map((item) => ({
              // icon: <GiChickenOven />,
              title: item.title,
              video: item.video,
              image: item.images ? ImageUrl + item.images[0] : "",
              bedge: "New Open",
              titleIcon: <IoIosCheckmarkCircle />,
              titleUrl: `/listing-details/${item._id}`,
              stitle: item.shortDescription,
              cardType: item.category.name,
              cardTypeIcon: <GiChickenOven />,
              author: imguser,
              authorUrl: "#",
              number: item.seller.phone,
              website: "www.mysitelink.com",
              date: "Posted 1 month ago",
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
              cardType: item.category.name,
              cardTypeIcon: <GiChickenOven />,
              author: imguser,
              authorUrl: "#",
              number: item.seller.phone,
              website: "www.mysitelink.com",
              date: "Posted 1 month ago",
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
          setFormFields(response.doc.filterfields);
          setLoadingListing(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="List-map-view">
      {/* Header */}
      <GeneralHeader />

      {/* Mapview */}
      <MapViewCluster />
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
          <div className="row">
            <div className="col-lg-12">
              <GenericHeader />
            </div>

            <div className="col-lg-4">
              <ListingListSidebar
                getlistingByFilter={() => getlistingByFilter()}
                setCategoryId={setCategoryId}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                setSort={setSort}
                FormFields={FormFields}
              />
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
                <h3>No Listing Found</h3>
              </div>
            ) : (
              <div className="col-lg-8">
                <PlaceListing listitems={AllListing} />
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="button-shared text-center">
                <Button text="load more" url="#" className="border-0">
                  <span className="d-inline-block">
                    <FiRefreshCw />
                  </span>
                </Button>
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

export default ListMapView;
