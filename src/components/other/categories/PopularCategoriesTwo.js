import React from "react";
// import "./styles.css";
import styled from "styled-components";
import Testimonial from "../../../components/sliders/Testimonial";
import s from "csd";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { GiPositionMarker } from "react-icons/gi";
import { IoMdMusicalNotes } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { FaSearchPlus } from "react-icons/fa";
import Slider from "react-slick";
import sectiondata from "../../../store/store";
import PlaceOne from "../../../components/places/PlaceOne";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

// import BannerOneSearchInput from "../banner1/SearchFilterSale";
// import BannerThreeSearchInput2 from "./BannerThreeSearchInput2";
// import BannerThreeSearchInput3 from "./BannerThreeSearchInput3";

function PopularCategoriesTwo({ catitems, title, setSubId }) {
  const [focusedIdx, setFocusedIdx] = React.useState(0);
  return (
    <>
      <ul className="tag-list">
        <div className="App">
          <div className="col-lg-12 mx-auto mt-4">
            <PlaceOne places={catitems} setSubId={setSubId} />
          </div>
        </div>
      </ul>
    </>
  );
}

export default PopularCategoriesTwo;
