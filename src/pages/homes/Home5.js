import React, { useEffect } from "react";
import HeaderTwo from "../../components/common/HeaderTwo";
import BannerOneSearchInput from "../../components/banner/banner1/BannerOneSearchInput";
import RecommendedPlace from "../../components/places/RecommendedPlace";
import GeneralMap from "../../components/contact/GeneralMap";
import img1 from "../../assets/images/img1.jpg"; // 263*175
import authorimg from "../../assets/images/small-team1.jpg"; // 67*60
import CircularProgress from "@mui/material/CircularProgress";

import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import sectiondata from "../../store/store";
import { RiHotelBedLine } from "react-icons/ri";
import { url, ImageUrl } from "../../environment";
import { IoIosCheckmarkCircle, IoMdStar, IoMdStarHalf } from "react-icons/io";
function Home5() {
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllCordinate();
    getAllSales();
  }, []);

  const [Cordinates, setAllCordinates] = React.useState([]);
  const [SalesPlaces, setAllSalesPlaces] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  const getAllCordinate = () => {
    // setLoading(true)
    fetch(`${url}/listing/getAllCordinates`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("single Listing------>>>", response);
        if (response.message === "Success") {
          let item = response.doc;

          setAllCordinates(item);
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

  const getAllSales = () => {
    setLoading(true);
    fetch(`${url}/listing/getPromotedListingSale`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Recommend places----->>>", response);
        if (response.message === "Success") {
          let item = response?.doc;
          let Array = [];
          item?.map((ele) => {
            Array?.push({
              // icon: <GiChickenOven />,
              title: ele.title,
              video: ele.video,
              image: ele.images ? ImageUrl + ele.images[0] : "",
              bedge: "New Open",
              titleIcon: <IoIosCheckmarkCircle />,
              titleUrl: `/listing-details/${item._id}`,
              stitle: ele.shortDescription,
              cardType: ele.category.name,
              id: ele._id,
              cardTypeIcon: <RiHotelBedLine />,
              author: authorimg,
              authorUrl: "#",
              number: ele.seller.phone,
              website: "www.mysitelink.com",
              date: getTimeStamp(ele.createdAt),
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
          setLoading(false);
          setAllSalesPlaces(Array);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="home-5">
      {/* Header */}
      <HeaderTwo />

      {/* Mapview */}
      {/* <div className="title-shape margin-bottom-35px"> */}
      <GeneralMap marker={Cordinates} />
      {/* </div> */}

      {/* Popular Categories */}
      <section className="hero-wrapper5 section-bgNew padding-top-50px padding-bottom-40px">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <BannerOneSearchInput />

              <div className="hero-catagory after-none text-center mt-4">
                {/* <PopularCategoriesTwo catitems={sectiondata.categories.popularcategories.lists} title={sectiondata.categories.popularcategories.title} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Categories */}
      <section className="cat-area padding-top-100px padding-bottom-90px">
        <div className="container">
          {isLoading ? (
            <div
              className="row mt-5 "
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <CircularProgress />
            </div>
          ) : SalesPlaces.length > 0 ? (
            <RecommendedPlace recommendplaces={SalesPlaces} />
          ) : (
            <div
              className="row two-clmn margin-top-35px margin-bottom-35px text-align-center"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h2 className="text-align-center">No Listing Found</h2>
            </div>
          )}
          {/* <BrowseCategoriesThree catitems={sectiondata.categories.browsecategories4.categories} /> */}
        </div>
      </section>

      {/* How it work */}
      {/* <section className="hiw-area text-center padding-top-100px padding-bottom-80px">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.howitworks.hiw6.sectitle} titleClass=" before-none pt-0" desc={sectiondata.howitworks.hiw6.seccontent} />
                    </div>

                    <div className="row padding-top-100px">
                        <InfoBoxOne infoitems={sectiondata.howitworks.hiw6.items} cardcol={3} />
                    </div>
                </div>
            </section> */}

      {/* Most Visited Place */}
      {/* <section className="card-area text-center padding-top-100px padding-bottom-100px">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.mostvisitedplaces.sectitle} titleClass=" before-none pt-0" desc={sectiondata.mostvisitedplaces.seccontent} />
                    </div>

                    <PlaceOne places={sectiondata.mostvisitedplaces.places} />
                </div>
            </section> */}

      {/* FunFacts */}
      {/* <section className="funfact-area section-bg-2 padding-top-100px padding-bottom-50px text-center">
                <div className="container">
                    <div className="row section-title-width">
                        <SectionsHeading title={sectiondata.funfacts.funfact1.sectitle} titleClass=" text-white before-none pt-0" desc={sectiondata.funfacts.funfact1.seccontent} />
                    </div>

                    <FunFactsOne countitems={sectiondata.funfacts.funfact1.counteritems} />
                </div>
            </section> */}

      {/* Testimonial */}
      {/* <section className="testimonial-area padding-top-100px padding-bottom-100px text-center">
                {sectiondata.testimonialdata.tmimage.map((tmimg, index) => {
                    return (
                        <img key={index} src={tmimg.tmimg} alt="testimonial" className="random-img" />
                    )
                })}
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.testimonialdata.sectitle} titleClass=" before-none pt-0" desc={sectiondata.testimonialdata.seccontent} />
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto mt-4">
                            <Testimonial slideitems={sectiondata.testimonialdata.sliders} />
                        </div>
                    </div>
                </div>
            </section> */}

      {/* <SectionDivider /> */}

      {/* Blog */}
      {/* <section className="blog-area padding-top-100px padding-bottom-80px">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.latestarticles.sectitle} titleClass=" before-none pt-0" desc={sectiondata.latestarticles.seccontent} />
                    </div>

                    <LatestBlog latestarticles={sectiondata.latestarticles.items} />

                </div>
            </section> */}

      {/* CTA 2 */}
      {/* <section className="cta-area cta-area3 padding-top-100px padding-bottom-100px section-bg">
                <CtaOne />
            </section> */}

      {/* Client Logo */}
      {/* <ClientLogo logos={sectiondata.clientlogos} /> */}

      {/* Cta Two */}
      {/* <section className="cta-area cta-area3 column-sm-center section-bg-2 padding-top-70px padding-bottom-70px">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 text-left">
                            <SectionsHeading title={sectiondata.calltoactions.cta3.title} titleClass=" before-none pt-0 mb-3 text-white font-size-28" descClass=" font-size-17" desc={sectiondata.calltoactions.cta3.content} />
                        </div>

                        <div className="col-lg-3">
                            <div className="btn-box">
                                <Button text={sectiondata.calltoactions.cta3.btntext} className=" bg-white color-text-2" url={sectiondata.calltoactions.cta3.btnurl} />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default Home5;
