import React, { useEffect } from "react";
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import Plans from "../components/other/plans/Plans";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import breadcrumbimg from "../assets/images/bread-bg.jpg";
import sectiondata from "../store/store";
import { MdClose } from "react-icons/md";
import { url, ImageUrl } from "../environment";
import { IoMdPaperPlane } from "react-icons/io";
import { FiCheck } from "react-icons/fi";
const state = {
  breadcrumbimg: breadcrumbimg,
};
function PricingPlan() {
  const [AllPlans, setAllPlans] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    getAllplans();
    getUserMyImage();
  }, []);

  const [Home1, setHom1] = React.useState("");

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
            if (item.pageName === "About") {
              setHom1(ImageUrl + item.image[0]);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllplans = () => {
    setIsLoading(true);
    fetch(`${url}/rocket/getRocketPlans`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All Plans ----->>>", response);
        if (response.message === "Success") {
          let Array = [];
          response.doc?.map((item) => {
            Array.push({
              icon: <IoMdPaperPlane />,
              title: item.type,
              price: item.price,
              _id: item._id,
              currency: "$",
              mo: "Per Month",
              rockets: item.noOfRockets,
              features: item.description,
              buttonTxt: "Continue",
              buttonUrl: "#",
              active: false,
            });
          });
          setAllPlans(Array);
          // setAllPages(response.doc.pages);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="pricing-plan-page">
      {/* Header */}
      <GeneralHeader />

      {/* Breadcrumb */}
      <Breadcrumb
        CurrentPgTitle="Pricing Plans"
        MenuPgTitle="pages"
        img={Home1}
      />

      {/* Pricing Plan */}
      <section className="pricing-area padding-top-70px padding-bottom-90px">
        <div className="container">
          <Plans plans={AllPlans} />
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

export default PricingPlan;
