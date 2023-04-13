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
  // useEffect(() => {
  // }, [])
  useEffect(() => {
    getAllCategories();
    getMostVisted();
    getUserMyListing();
    window.scrollTo(0, 0);
  }, [token]);

  const fullScreen = useMediaQuery("(max-width:425px)");
  const UserID = JSON.parse(localStorage.getItem("user"));

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

          setAllCategories(Array.slice(0, 7));
          let Obj = Array.slice(0, 7);
          Obj[7] = {
            // icon: <IoIosCheckmarkCircle />,
            title: "Others",
            // id:item._id,
            stitle: "12 Listings",

            url: "/all-categories",

            // `/list-right-sidebar/${item._id}`,
            img: other,
          };
          setAllCategories(Obj);

          // );
          setLoading(false);
          //   localStorage.setItem('token',response.doc)
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
    // setListingLoader(true);
    fetch(`${url}/user/getMyListing`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // "access-control-allow-origin": "*",
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
        // authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All Visted places", response);
        if (response.message === "Success") {
          //   navigate.push("/");
          // setAllCategories(response.doc)
          // console.log(response?.doc.categories[0].image);
          let Array = [];

          // setAllCategories(
          response?.doc?.map((item, index) => {
            Array?.push({
              // icon: <GiChickenOven />,
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
              // url:   `/list-right-sideba/${item._id}`,
              // img: img1
            });
          });

          setAllVistedPlaces(Array);
          // );
          setVistiedLoading(false);
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
  const { t } = useTranslation();

  return (
    <main className="home-1">
      {/* Header */}
      <GeneralHeader />
      {/* Hero Banner */}
      <BannerOne setLookingFor={setLookingFor} LookingFor={LookingFor} />
      {/* Popular Categories */}
      {/* {!fullScreen && ( */}
      <section className="cat-area padding-top-100px padding-bottom-90px">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading
              className={"mt-1"}
              title={sectiondata.popularcategories.sectitle}
              // desc={sectiondata.popularcategories.seccontent}
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
              <h2 className="text-align-center">No Categories Found</h2>
            </div>
          )}
        </div>
      </section>
      {/* )} */}

      {/* How It Work */}
      {/* <section className="hiw-area text-center padding-top-100px padding-bottom-110px">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.howitworks.hiw1.sectitle} desc={sectiondata.howitworks.hiw1.seccontent} />
                    </div>

                    <HowItWorkOne hiw1content={sectiondata.howitworks.hiw1} />
                </div>
            </section> */}
      {/* Most Visited Place */}
      <section className="card-area text-center padding-bottom-100px">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading
              className={"mt-1"}
              title={sectiondata.mostvisitedplaces.sectitle}
              // desc={sectiondata.mostvisitedplaces.seccontent}
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
              <h2 className="text-align-center">No Ads Found</h2>
            </div>
          )}
          {/* <PlaceOne places={sectiondata.mostvisitedplaces.places} /> */}
        </div>
      </section>
      {/* FunFacts */}
      {/* <section className="funfact-area section-bg-2 padding-top-100px padding-bottom-50px text-center">
                <div className="container">
                    <div className="row section-title-width">
                        <SectionsHeading title={sectiondata.funfacts.funfact1.sectitle} titleClass="text-white" desc={sectiondata.funfacts.funfact1.seccontent} />
                    </div>

                    <FunFactsOne countitems={sectiondata.funfacts.funfact1.counteritems} />
                </div>
            </section> */}
      {/* How It Work */}
      {/* <section className="hiw-area padding-top-100px padding-bottom-80px after-none text-center">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.howitworks.hiw2.sectitle} desc={sectiondata.howitworks.hiw2.seccontent} />
                    </div>

                    <InfoBox3 infoitems={sectiondata.howitworks.hiw2.items} />
                </div>
            </section> */}
      {/* CTA */}
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
      {/* Testimonial */}
      {/* <section className="testimonial-area padding-top-100px padding-bottom-100px text-center">
                {sectiondata.testimonialdata.tmimage.map((tmimg, index) => {
                    return (
                        <img key={index} src={tmimg.tmimg} alt="testimonial" className="random-img" />
                    )
                })}
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.testimonialdata.sectitle} desc={sectiondata.testimonialdata.seccontent} />
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto mt-4">
                            <Testimonial slideitems={sectiondata.testimonialdata.sliders} />
                        </div>
                    </div>
                </div>
            </section> */}
      <SectionDivider />
      {/* Blog */}
      {/* <section className="blog-area padding-top-100px padding-bottom-80px">
                <div className="container">
                    <div className="row section-title-width section-title-ml-mr-0">
                        <div className="col-lg-8">
                            <SectionsHeading title={sectiondata.latestarticles.sectitle} desc={sectiondata.latestarticles.seccontent} />
                        </div>
                        <div className="col-lg-4">
                            <div className="btn-box h-100 d-flex align-items-center justify-content-end">
                                <Button text={sectiondata.latestarticles.btntext} url={sectiondata.latestarticles.btnurl} className=" margin-top-100px" />
                            </div>
                        </div>
                    </div>

                    <LatestBlog latestarticles={sectiondata.latestarticles.items} />
                </div>
            </section> */}
      {/* CTA 2 */}
      <section className="cta-area cta-area3 padding-top-100px padding-bottom-100px section-bg">
        <CtaOne />
      </section>
      {/* Client Logo */}
      {/* <ClientLogo logos={sectiondata.clientlogos} /> */}
      {/* NewsLetter */}
      {/* <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} /> */}
      {/* Footer */}
      <Footer />
      <ScrollTopBtn />
    </main>
  );
}

export default Home;
