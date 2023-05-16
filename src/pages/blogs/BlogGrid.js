import React, { useEffect } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import BlogGridItems from "../../components/blogs/BlogGridItems";
import Pagination from "@mui/material/Pagination";

import SectionsHeading from "../../components/common/SectionsHeading";
import { useTranslation } from "react-i18next";
import { IoIosCheckmarkCircle, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { GiChickenOven, GiMeepleGroup } from "react-icons/gi";
import imguser from "../../assets/images/user.png";

import CircularProgress from "@mui/material/CircularProgress";
import RecommendedPlace from "../../components/places/RecommendedPlace";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import breadcrumbimg from "../../assets/images/bread-bg.jpg";
import sectiondata from "../../store/store";
import img2 from "../../assets/images/img7.jpg"; // 362*242
import authorimg from "../../assets/images/small-team1.jpg"; // 67*60
import { ImageUrl, url } from "../../environment";
const state = {
  breadcrumbimg: breadcrumbimg,
};
function BlogGrid() {
  const [vistiedLoading, setVistiedLoading] = React.useState(false);
  const [Allpages, setAllpages] = React.useState(0);

  const [AllBlogs, setAllBlogs] = React.useState([]);
  const [Home1, setHom1] = React.useState("");

  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    getAllBlogs();
    getUserMyImage();
  }, []);

  const getAllBlogs = (e, pagNum) => {
    setVistiedLoading(true);
    fetch(`${url}/blog/allBlogs${pagNum ? pagNum : 1}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("User Listing", response);
        if (response.message === "Success") {
          setAllpages(response.doc.pages);
          setVistiedLoading(false);

          let blog = response?.doc?.blogs;
          let newArray = [];
          blog.map((item) => {
            newArray.push({
              img: item.image[0] ? ImageUrl + item.image[0] : img2,
              title: item.title,
              titleLink: `/blog-single/${item._id}`,
              desc: item.description.slice(0, 100),
              date: "12 Jan, 2020",
              meta: "Tips & Tricks",
              metaLink: "#",
              author: "David Wise",
              authorImg: authorimg,
              readmore: "Read More",
              readmoreLink: "/blog-single",
              likes: "340",
            });
          });
          setAllBlogs(newArray);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            if (item.pageName === "Blog") {
              setHom1(ImageUrl + item.image[0]);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="blog-grid-page">
      {/* Header */}
      <GeneralHeader />

      {/* Breadcrumb */}
      <Breadcrumb CurrentPgTitle="Blog Grid" MenuPgTitle="Blog" img={Home1} />

      <section className="blog-grid padding-top-40px padding-bottom-100px">
        {vistiedLoading ? (
          <div
            className="row mt-5 "
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <CircularProgress />
          </div>
        ) : AllBlogs.length > 0 ? (
          <div className="container">
            <BlogGridItems blitems={AllBlogs} />

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
                    onChange={(e, Value) => getAllBlogs(e, Value)}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="row two-clmn margin-top-35px margin-bottom-35px text-align-center"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h2 className="text-align-center">{t("No Blogs Found")}</h2>
          </div>
        )}
      </section>
      {/* 
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
      </section> */}

      {/* Newsletter */}
      <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default BlogGrid;
