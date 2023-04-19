import { useEffect, useState } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import Banner4 from "../../components/banner/banner4/Banner4";
import SectionsHeading from "../../components/common/SectionsHeading";
import BrowseCategoriesTwo from "../../components/other/categories/BrowseCategoriesTwo";
import RecommendedPlace from "../../components/places/RecommendedPlace";
import { GiChickenOven, GiMeepleGroup } from "react-icons/gi";
import CircularProgress from "@mui/material/CircularProgress";
import imguser from "../../assets/images/user.png";

import { IoIosCheckmarkCircle, IoMdStar, IoMdStarHalf } from "react-icons/io";

import SectionDivider from "../../components/common/SectionDivider";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import sectiondata from "../../store/store";
import home4 from "../../assets/video/jobs.mp4";
import { url, ImageUrl } from "../../environment";

function Home4() {
  const [AllCategories, setAllCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const [AllVistedPlaces, setAllVistedPlaces] = useState([]);
  useEffect(() => {
    getAllCategories();
    window.scrollTo(0, 0);
    getMostVisted();
    getUserMyImage();
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

  const [Home1, setHom1] = useState("");

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
            if (item.pageName === "Jobs") {
              setHom1(ImageUrl + item.image[0]);
            }
          });
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
          //   navigate.push("/");
          // setAllCategories(response.doc)
          // console.log(response?.doc[0].image);
          let Array = [];

          // setAllCategories(
          response?.doc.categories.map((item) => {
            // if (item.type === "Jobs") {
            Array.push({
              icon: <GiMeepleGroup />,
              title: item.name,
              cardLink: `/all-categories/${item._id}`,
              img: ImageUrl.concat(item.image),
            });
            // }
          });

          setAllCategories(Array);
          // );
          setLoading(false);
          //   localStorage.setItem('token',response.doc)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="home-4">
      {/* Header */}
      <GeneralHeader />

      {/* Banner */}
      <Banner4
        videoUrl={Home1}
        title={sectiondata.herobanners.banner4.sectitle}
        content={sectiondata.herobanners.banner4.seccontent}
      />

      {/* Browse Categories */}
      <section className="cat-area padding-top-100px padding-bottom-90px">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading
              title={sectiondata.categories.browsecategories3.sectitle}
              titleClass=" before-none pt-0"
              desc={sectiondata.categories.browsecategories2.seccontent}
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
            <BrowseCategoriesTwo catitems={AllCategories} />
          )}
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
      <section className="card-area text-center padding-top-100px padding-bottom-100px">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading
              title={"Most Visited Jobs"}
              titleClass=" before-none pt-0"
              desc={sectiondata.mostvisitedplaces.seccontent}
            />
          </div>

          <RecommendedPlace recommendplaces={AllVistedPlaces} />
        </div>
      </section>

      {/* FunFacts */}
      {/* <section className="funfact-area section-bg-2 padding-top-100px padding-bottom-50px text-center">
                <div className="container">
                    <div className="row section-title-width">
                        <SectionsHeading title={sectiondata.funfacts.funfact1.sectitle} titleClass=" text-white before-none pt-0" desc={sectiondata.funfacts.funfact1.seccontent} />
                    </div>

                    <FunFactsOne countitems={sectiondata.funfacts.funfact1.counteritems} />
                </div>
            </section> */}

      {/* How It Work */}
      {/* <section className="hiw-area padding-top-100px padding-bottom-80px after-none text-center">
                <div className="container">
                    <div className="row section-title-width text-center">
                        <SectionsHeading title={sectiondata.howitworks.hiw2.sectitle} titleClass=" before-none pt-0" desc={sectiondata.howitworks.hiw2.seccontent} />
                    </div>

                    <InfoBox3 infoitems={sectiondata.howitworks.hiw2.items} isbtnshow={false} />
                </div>
            </section> */}

      {/* CTA */}
      {/* <section className="cta-area section-bg column-sm-center padding-top-80px padding-bottom-80px">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 text-left">
                            <SectionsHeading title={sectiondata.calltoactions.cta3.title} titleClass=" before-none pt-0 mb-3 font-size-28" descClass=" font-size-17" desc={sectiondata.calltoactions.cta3.content} />
                        </div>

                        <div className="col-lg-3">
                            <div className="btn-box">
                                <Button text={sectiondata.calltoactions.cta3.btntext} url={sectiondata.calltoactions.cta3.btnurl} />
                            </div>
                        </div>
                    </div>
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

      <SectionDivider />

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

      {/* NewsLetter */}
      {/* <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} /> */}

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default Home4;
