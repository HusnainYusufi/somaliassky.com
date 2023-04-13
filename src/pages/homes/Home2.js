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

  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    getMostVisted();
  }, []);

  const getMostVisted = () => {
    setVistiedLoading(true);
    fetch(`${url}/listing/getPromotedListingGateOfSomalia`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        // authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All Companies Recommend", response);
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
            });
          });

          setAllVistedPlaces(Array);
          // );
          setVistiedLoading(false);
          //   localStorage.setItem('token',response.doc)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="home-2">
      {/* Header */}
      <GeneralHeader />

      {/* Banner */}
      <BannerTwo bgImg={home2} />

      {/* Popular Destination */}
      {/* <section className="cat-area destination-area padding-top-100px padding-bottom-100px">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.populardestination.sectitle} desc={sectiondata.populardestination.seccontent} />
                    </div>

                    <div className="row mt-5">
                        <PopularDestination destinations={sectiondata.populardestination.destinations} />
                    </div> */}

      {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="button-shared mt-4 text-center">
                                <Button text={sectiondata.populardestination.viewmorebtn} url={sectiondata.populardestination.viewmorebtnurl}>
                                    <span className="la">
                                        <BsEye />
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div> */}
      {/* </div>
            </section> */}

      <SectionDivider />

      {/* How it Work */}
      {/* <HowItWorkTwo /> */}

      <SectionDivider />

      {/* Recommended Place */}
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

      {/* FunFacts */}
      {/* <section className="funfact-area section-bg-2 padding-top-100px padding-bottom-50px text-center">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.funfacts.funfact2.sectitle} titleClass="text-white" desc={sectiondata.funfacts.funfact2.seccontent} />
                    </div>

                    <FunFactsTwo funfactitems={sectiondata.funfacts.funfact2.counteritems} />
                </div>
            </section> */}

      {/* How It Work */}
      {/* <section className="hiw-area padding-top-100px padding-bottom-80px after-none text-center">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.howitworks.hiw2.sectitle} desc={sectiondata.howitworks.hiw2.seccontent} />
                    </div>

                    <InfoBox3 infoitems={sectiondata.howitworks.hiw2.items} isbtnshow={true} />
                </div>
            </section> */}

      {/* Authors */}
      {/* <section className="author-area padding-top-100px padding-bottom-100px">
                <div className="container-fluid">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.authors.sectitle} titleClass="text-white" desc={sectiondata.authors.seccontent} />
                    </div>

                    <Authors authoritems={sectiondata.authors.sliders} />
                </div>
            </section> */}

      {/* Testimonial */}
      {/* <section className="testimonial-area padding-top-100px padding-bottom-100px text-center">
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
      {/* <section className="cta-area cta-area3 padding-top-100px padding-bottom-100px section-bg">
                <CtaOne />
            </section> */}

      {/* Client Logo */}
      {/* <ClientLogo logos={sectiondata.clientlogos} /> */}

      {/* NewsLetter */}
      <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default Home2;
