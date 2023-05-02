import React, { useEffect, useState } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import PopularCategories from "../../components/other/categories/PopularCategories";
import CircularProgress from "@mui/material/CircularProgress";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import PopularCategoriesMore from "../../components/other/categories/PopularCategoriesMore";
import breadcrumbimg from "../../assets/images/bread-bg.jpg";
import sectiondata from "../../store/store";
import { useParams } from "react-router-dom";
import SectionsHeading from "../../components/common/SectionsHeading";

import { url, ImageUrl } from "../../environment";
import { GiChickenOven } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import img1 from "../../assets/images/testi-img1.jpg"; //
const state = {
  breadcrumbImg: breadcrumbimg,
};
function AllCategories() {
  const [isLoading, setLoading] = useState(false);
  const [AllCategories, setAllCategories] = useState([]);
  const token = localStorage.getItem("token");

  const location = useLocation();
  // const { from } = location.state

  useEffect(() => {
    getAllCategories();
    console.log(location);
    window.scrollTo(0, 0);
  }, [token]);

  const { id } = useParams();
  const getAllCategories = () => {
    setLoading(true);
    fetch(`${url}/category/getAllcategory`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        // authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All categories", response);
        if (response.message === "Success") {
          //   navigate.push("/");
          // setAllCategories(response.doc)
          // console.log(response?.doc.categories[0].image);
          let Array = [];
          let Array1 = [];

          // setAllCategories(
          response?.doc?.categories.map((item, index) => {
            // response?.doc?.count.map((ele) => {
            // if (item.type === "Home1") {
            // if (item._id === ele._id) {
            // console.log(ImageUrl + item.image);
            Array.push({
              icon: "",
              title: item.name,
              // id:item._id,
              stitle: "12 Listings",
              count:
                item._id === response?.doc?.count[index]?._id
                  ? response?.doc?.count[index]?.count
                  : 0,
              url:
                item?.name === "Property"
                  ? `/list-map-view/${item._id}`
                  : `/list-right-sidebar/${item._id}`,

              // `/list-right-sidebar/${item._id}`,
              img: ImageUrl + item.image,
            });
            // }
            // });
          });

          setAllCategories(Array);
          // );
          setLoading(false);
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
    <main className="all-categories">
      {/* Header */}
      <GeneralHeader />

      {/* Breadcrumb */}
      <Breadcrumb
        // CurrentPgTitle={from}
        MenuPgTitle="Categories"
        img={state.breadcrumbImg}
      />

      <section className="cat-area padding-top-40px padding-bottom-80px">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading
              className={"mt-1"}
              title={sectiondata.popularcategories.sectitle}
              desc={sectiondata.popularcategories.seccontent}
            />
          </div>
          {isLoading ? (
            <div
              className="row mt-5 "
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <CircularProgress />
            </div>
          ) : (
            <div className="row">
              <PopularCategories catitems={AllCategories} />
              {/* <PopularCategoriesMore
              catitems={sectiondata.popularcategories.morecats}
            /> */}
            </div>
          )}
        </div>
      </section>

      {/* NewsLetter */}
      <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default AllCategories;
