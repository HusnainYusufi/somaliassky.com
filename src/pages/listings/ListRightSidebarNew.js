import React, { useState, useEffect } from "react";
import { BsGrid, BsListUl } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import GeneralHeader from "../../components/common/GeneralHeader";
import CircularProgress from "@mui/material/CircularProgress";
import Breadcrumb from "../../components/common/Breadcrumb";
import PopularCategoriesTwo from "../../components/other/categories/PopularCategoriesTwo";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ListingListSidebar from "../../components/sidebars/ListingListSidebar";
import Button from "../../components/common/Button";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import imguser from '../../assets/images/user.png'
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
import {
  GiChickenOven,

} from "react-icons/gi";
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
  const [AllListing, setAllListing] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    getAllCategories();
    getAllListing()
  }, [token]);

  const { id } = useParams();
  const getAllCategories = () => {
    setLoading(true)
    fetch(`${url}/category/getsinglesubsubcategory`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        scid: id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All sub sub categories", response);
        if (response.message === "Success") {
          //   navigate.push("/");
          // setAllCategories(response.doc)
          setAllSubCategories(
            response?.doc.map((item) => ({
              // icon: <GiChickenOven />,
              title: item.name,
              stitle: "12 Listings",
              // url:   `/list-right-sideba/${item._id}`,
              // img: img1
            }))
          );

          setLoading(false)

        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllListing = () => {
    // setLoading(true)
    fetch(`${url}/listing/getAllListings`, {
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
        if (response.message === "Success") {
        console.log( response?.doc.map((item) => ({
          // icon: <GiChickenOven />,
          title: item.title,
          video: item.video,
          image: item.images  ? ImageUrl + item.images[0] : '' ,
          stitle: "12 Listings",
          bedge: "New Open",
          titleIcon: <IoIosCheckmarkCircle />,
          titleUrl: "/listing-details",
          stitle: item.shortDescription,
          cardType: "Restaurant",
          cardTypeIcon: <GiChickenOven />,
          author: '',
          authorUrl: "#",
          number: "(492) 492-4828",
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
        })))
          setAllListing(
            response?.doc.map((item) => ({
              // icon: <GiChickenOven />,
              title: item.title,
              video: item.video,
              image: item.images ? ImageUrl + item.images[0] : '' ,
              bedge: "New Open",
              titleIcon: <IoIosCheckmarkCircle />,
              titleUrl: `/listing-details/${item._id}`,
              stitle: item.shortDescription,
              cardType: "Restaurant",
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

          // setLoading(false)

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
        CurrentPgTitle="List Right Sidebar"
        MenuPgTitle="Listings"
        img={state.breadImg}
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
        style={{ background: "#696d85", padding: "20px" }}
      >
        <PopularCategoriesTwo
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

            <div className="col-lg-8 row align-items-start">
              <PlaceGrid griditems={AllListing} />
            </div>

            <div className="col-lg-4">
              <ListingListSidebar />
            </div>
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

export default ListRightSidebar;
