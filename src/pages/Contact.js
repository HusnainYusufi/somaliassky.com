import React, { useEffect } from "react";
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import AskQuestionField from "../components/contact/AskQuestionField";
import ContactSidebar from "../components/sidebars/ContactSidebar";
import GeneralMap from "../components/contact/GeneralMap";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import breadcrumbimg from "../assets/images/contact-us.png";
import sectiondata from "../store/store";
import contactUs from "../assets/images/321f.jpg";
import { useTranslation } from "react-i18next";
import { url, ImageUrl } from "../environment";
const state = {
  breadcrumbimg: breadcrumbimg,
};
function Contact() {
  const [Home1, setHom1] = React.useState("");

  const [t, i18n] = useTranslation("common");
  useEffect(() => {
    getUserMyImage();
  }, []);
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
            if (item.pageName === "Contact") {
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
    <main className="contact-page">
      {/* Header */}
      <GeneralHeader />

      {/* Breadcrumb */}
      <Breadcrumb
        // CurrentPgTitle="Contact Us"
        // MenuPgTitle="pages"
        img={Home1}
      />

      <section className="contact-area padding-top-40px padding-bottom-80px">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <AskQuestionField title={t("Get in touch")} />
            </div>

            <div className="col-lg-5">
              <ContactSidebar contactinfo={sectiondata.contactdata} />
            </div>
          </div>
        </div>
      </section>

      <div className="gmaps">
        <GeneralMap />
        <div className="map-address-box">
          <ul className="map-address">
            <li>
              <span className="la">
                <GoLocation />
              </span>
              <h5 className="map__title">{t("address")}</h5>
              <p className="map__desc">
                {sectiondata.contactdata.mapoverlay.address}
                {/* <br />
                                 {sectiondata.contactdata.mapoverlay.city} */}
              </p>
            </li>
            <li>
              <span className="la">
                <FiPhone />
              </span>
              <h5 className="map__title">{t("phone")}</h5>
              <p className="map__desc">
                Local: {sectiondata.contactdata.mapoverlay.number}
              </p>
              {/* <p className="map__desc">Local: {sectiondata.contactdata.mapoverlay.number2}</p> */}
            </li>
            <li>
              <span className="la">
                <FaRegEnvelope />
              </span>
              <h5 className="map__title">email</h5>
              <p className="map__desc">
                {sectiondata.contactdata.mapoverlay.email1}
              </p>
              {/* <p className="map__desc">{sectiondata.contactdata.mapoverlay.email2}</p> */}
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default Contact;
