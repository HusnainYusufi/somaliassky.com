import { useEffect, useState } from "react";
import HeaderTwo from "../../components/common/HeaderTwo";
import Banner3 from "../../components/banner/banner3/Banner3";
import SectionsHeading from "../../components/common/SectionsHeading";
import BrowseCategories from "../../components/other/categories/BrowseCategories";
import SectionDivider from "../../components/common/SectionDivider";
import Button from "../../components/common/Button";
import { IoIosCheckmarkCircle, IoMdStar, IoMdStarHalf } from "react-icons/io";
import imguser from "../../assets/images/user.png";
import CircularProgress from "@mui/material/CircularProgress";
import RecommendedPlace from "../../components/places/RecommendedPlace";
import { GiChickenOven } from "react-icons/gi";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import sectiondata from "../../store/store";
import home3 from "../../assets/video/rest.mp4";
import { url, ImageUrl } from "../../environment";
function Home3() {
  const [AllCategories, setAllCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [AllVistedPlaces, setAllVistedPlaces] = useState([]);

  useEffect(() => {
    getAllCategories();
    window.scrollTo(0, 0);
  }, [token]);

  const getMostVisted = () => {
    setLoading(true);
    fetch(`${url}/listing/getPromotedListingJobs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All Companies Recommend", response);
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
            });
          });

          setAllVistedPlaces(Array);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllCategories = () => {
    setLoading(true);
    fetch(`${url}/category/getAllcategory`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All categories", response);
        if (response.message === "Success") {
          let Array = [];

          response?.doc?.categories?.map((item) => {
            Array.push({
              id: 1,
              icon: <GiChickenOven />,
              title: item.name,
              listingsNum: 42 + 1,
              cardLink: `/all-categories/${item._id}`,
            });
          });

          setAllCategories(Array);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="home-3">
      {}
      <HeaderTwo />

      {}

      <Banner3
        bgImg={home3}
        herotitle={sectiondata.herobanners.banner3.title}
        herocontent={sectiondata.herobanners.banner3.content}
      />

      {}
      <section className="hero-catagory section-bg padding-top-100px padding-bottom-80px text-center">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading
              title={sectiondata.categories.browsecategories.sectitle}
              desc={sectiondata.categories.browsecategories.seccontent}
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
            <BrowseCategories categories={AllCategories} />
          )}
        </div>
      </section>

      {}
      <section className="card-area text-center padding-top-100px padding-bottom-100px">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading
              title={"Most Visited Resturants"}
              desc={sectiondata.mostvisitedplaces.seccontent}
            />
          </div>

          <RecommendedPlace
            recommendplaces={sectiondata.mostvisitedplaces.places}
          />
        </div>
      </section>

      <SectionDivider />

      {}
      {}

      <SectionDivider />

      {}
      {}

      {}
      {}

      {}
      {}

      <SectionDivider />

      {}
      {}

      <SectionDivider />

      {}
      {}

      <SectionDivider />

      {}
      {}

      {}
      <section className="cta-area cta-area3 column-sm-center section-bg-2 padding-top-70px padding-bottom-70px">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 text-left">
              <SectionsHeading
                title={sectiondata.calltoactions.cta3.title}
                titleClass=" mb-3 text-white font-size-28"
                descClass=" font-size-17"
                desc={sectiondata.calltoactions.cta3.content}
              />
            </div>

            <div className="col-lg-3">
              <div className="btn-box">
                <Button
                  text={sectiondata.calltoactions.cta3.btntext}
                  url={sectiondata.calltoactions.cta3.btnurl}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default Home3;
