import React, { useEffect, useState } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import PopularCategories from "../../components/other/categories/PopularCategories";
import CircularProgress from "@mui/material/CircularProgress";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import PopularCategoriesMore from "../../components/other/categories/PopularCategoriesMore";
import breadcrumbimg from "../../assets/images/bread-bg.jpg";
import sectiondata from "../../store/store";
import { useParams } from "react-router-dom";
import { url } from "../../environment";
import {GiChickenOven} from 'react-icons/gi';
import { useLocation } from 'react-router-dom'
import img1 from "../../assets/images/testi-img1.jpg"; // 
const state = {
  breadcrumbImg: breadcrumbimg,
};
function AllCategories() {
  const [isLoading, setLoading] = useState(false);
  const [AllSubCategories, setAllSubCategories] = useState([]);
  const token = localStorage.getItem("token");
  
  const location = useLocation()
  // const { from } = location.state

  useEffect(() => {
    getAllCategories();
    console.log(location)
    window.scrollTo(0, 0)
  }, [token]);

  const { id } = useParams();
  const getAllCategories = () => {
    setLoading(true)
    fetch(`${url}/category/getsinglesubcategory`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        cid: id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All sub categories", response);
        if (response.message === "Success") {
          //   navigate.push("/");
          // setAllCategories(response.doc)
          setAllSubCategories(response?.doc.map((item)=>({
              icon: <GiChickenOven />,
              title: item.name,
              stitle: '12 Listings',
              url:   `/list-right-sidebar/${item._id}`,
              img: img1
          })))
    setLoading(false)

        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="all-categories">
      {/* Header */}
      <GeneralHeader />

      {/* Breadcrumb */}
      <Breadcrumb
        // CurrentPgTitle={from}
        MenuPgTitle="Categories"
        img={state.breadcrumbImg}
      />

      <section className="cat-area padding-top-40px padding-bottom-80px">
        <div className="container">
        {isLoading ? (
            <div
              className="row mt-5 "
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <CircularProgress />
            </div>
          ) : (
          <div className="row">
            <PopularCategories
              catitems={AllSubCategories}
            />
            {/* <PopularCategoriesMore
              catitems={sectiondata.popularcategories.morecats}
            /> */}
          </div>
          )}
        </div>
      </section>

      {/* NewsLetter */}
      <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default AllCategories;
