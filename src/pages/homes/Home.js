import React, { useEffect, useState } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import BannerOne from "../../components/banner/banner1/BannerOne";
import Testimonial from "../../components/sliders/Testimonial";
import ClientLogo from "../../components/sliders/ClientLogo";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import RecommendedPlace from "../../components/places/RecommendedPlace";
import { url } from "../../environment";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { GiChickenOven } from "react-icons/gi";
import img1 from "../../assets/images/testi-img1.jpg"; // 263*175
import SectionsHeading from "../../components/common/SectionsHeading";
import PopularCategories from "../../components/other/categories/PopularCategories";

import CtaOne from "../../components/other/cta/CtaOne";
import LatestBlog from "../../components/blogs/LatestBlog";
import Button from "../../components/common/Button";
import SectionDivider from "../../components/common/SectionDivider";
import InfoBox3 from "../../components/other/infoboxes/InfoBox3";
import PlaceOne from "../../components/places/PlaceOne";
import sectiondata from "../../store/store";
import AllCategories from "../categories/AllCategories";
import { ImageUrl } from "../../environment";
function Home() {
  const [AllCategories, setAllCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  // useEffect(() => {
  // }, [])
  useEffect(() => {
    getAllCategories();
    window.scrollTo(0, 0);
  }, [token]);

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
          console.log(response?.doc[0].image);
          let Array = [];

          // setAllCategories(
          response?.doc.map((item) => {
            // if (item.type === "Home1") {
              console.log(ImageUrl + item.image)
              Array.push({
                icon: "",
                title: item.name,
                // id:item._id,
                stitle: "12 Listings",
                url: `/all-categories/${item._id}`,
                img: ImageUrl + item.image
              });
            // }
          });

          setAllCategories(Array);
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
  const CheckImage = () => {
    console.log(AllCategories);
  };
  return (
    <main className="home-1">
      {/* Header */}
      <GeneralHeader />

      {/* Hero Banner */}
      <BannerOne />

      {/* Popular Categories */}
      <section className="cat-area padding-top-100px padding-bottom-90px">
        <div className="container">
          <div className="row section-title-width text-center">
            <SectionsHeading
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
            <div className="row mt-5">
              <PopularCategories catitems={AllCategories} />
            </div>
          )}
        </div>
      </section>

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
              title={sectiondata.mostvisitedplaces.sectitle}
              desc={sectiondata.mostvisitedplaces.seccontent}
            />
          </div>
          <RecommendedPlace
            recommendplaces={sectiondata.mostvisitedplaces.places}
          />
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
