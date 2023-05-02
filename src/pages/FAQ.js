import React, { useEffect, useState } from "react";
import GeneralHeader from "../components/common/GeneralHeader";
import { useTranslation } from "react-i18next";
import Banner6 from "../components/banner/banner6/Banner6";
import FaqCategories from "../components/other/categories/FaqCategories";
import AccordionList from "../components/other/AccordionList";
import SectionsHeading from "../components/common/SectionsHeading";
import AskQuestionField from "../components/contact/AskQuestionField";
import IconBoxTwo from "../components/other/iconboxes/IconBoxTwo";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import sectiondata from "../store/store";
import { url, ImageUrl } from "../environment";
import { FaMinus, FaPlus } from "react-icons/fa";
function Faq() {
  const [Home1, setHom1] = React.useState("");
  const [isLoading, setLoading] = useState(false);
  const [AllFAQ, setAllFAQ] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllFaq();
    getUserMyImage();
  }, []);

  const [t, i18n] = useTranslation("common");

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
            if (item.pageName === "FAQ") {
              setHom1(ImageUrl + item.image[0]);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllFaq = () => {
    setLoading(true);
    fetch(`${url}/faq/getFaqs1`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        // authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All FAQ", response);
        if (response.message === "Success") {
          //   navigate.push("/");
          let Array = [];
          response.doc.faqs.map((item) => {
            Array.push({
              title: item.question,
              desc: item.answer,
              plus: <FaPlus />,
              minus: <FaMinus />,
              cardClass: "mb-3",
            });
          });
          setAllFAQ(Array);
          // setAllCategories(response.doc)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="faq-page">
      {/* Header */}
      <GeneralHeader />

      {/* Banner */}
      <Banner6 Home1={Home1} title="Hello, How Can We Help You?" />

      {/* Category */}
      <section className="hiw-area section-bg padding-top-80px padding-bottom-50px after-none text-center">
        <div className="container">
          <FaqCategories />
        </div>
      </section>

      <section className="faq-area padding-top-100px padding-bottom-100px">
        <div className="container">
          <div className="row section-title-width section-title-ml-mr-0">
            <div className="col-lg-12">
              <SectionsHeading
                title={sectiondata.accordions.sectitle}
                desc={sectiondata.accordions.seccontent}
              />
            </div>
          </div>
          <div className="row margin-top-35px">
            <div className="col-lg-8">
              <AccordionList accordionItems={AllFAQ} />
            </div>
            <div className="col-lg-4">
              <AskQuestionField title="Still have question?" />
            </div>
          </div>

          <div className="section-block-2 margin-top-120px"></div>

          <div className="row padding-top-100px">
            <IconBoxTwo items={sectiondata.iconboxes.iconlist1} />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default Faq;
