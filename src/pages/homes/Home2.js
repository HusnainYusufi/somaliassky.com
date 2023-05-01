import { useEffect, useState } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import BannerTwo from "../../components/banner/banner2/BannerTwo";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import SectionsHeading from "../../components/common/SectionsHeading";
import { IoIosCheckmarkCircle, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { GiChickenOven } from "react-icons/gi";
import imguser from "../../assets/images/user.png";
import CircularProgress from "@mui/material/CircularProgress";

import SectionDivider from "../../components/common/SectionDivider";
import RecommendedPlace from "../../components/places/RecommendedPlace";
import { url, ImageUrl } from "../../environment";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import sectiondata from "../../store/store";
import home2 from "../../assets/images/home1.jpg";

function Home2() {
  const [AllVistedPlaces, setAllVistedPlaces] = useState([]);
  const [vistiedLoading, setVistiedLoading] = useState(false);
  const [Home1, setHom1] = useState("");

  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    getMostVisted();
    getUserMyImage();
  }, []);

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
            if (item.pageName === "Gate Of Somalia") {
              setHom1(ImageUrl + item.image[0]);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMostVisted = () => {
    setVistiedLoading(true);
    fetch(`${url}/listing/getPromotedListingGateOfSomalia`, {
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
          setVistiedLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="home-2">
      <GeneralHeader />

      <BannerTwo bgImg={Home1} />

      <SectionDivider />

      <SectionDivider />

      <section className="card-area padding-top-100px padding-bottom-90px text-center">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading
              title={sectiondata.recommendedplaces.sectitle}
              desc={sectiondata.recommendedplaces.seccontent}
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
              <h2 className="text-align-center">No Ads Found</h2>
            </div>
          )}
        </div>
      </section>

      <SectionDivider />

      <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default Home2;
