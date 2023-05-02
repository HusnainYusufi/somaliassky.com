import React, { Component, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
const WidgetFilterPrice = ({ setMinPrice, setMaxPrice }) => {
  const [Value, setValue] = useState([20, 50]);
  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    let minDollars = 0;
    let maxDollars = 500;

    let minSlider = document.querySelector("#min");
    let maxSlider = document.querySelector("#max");
  }, []);

  const Filterstate = {
    title: "Filter by Price",
    stitle: "Price:",
  };

  function valuetext(value) {
    return `${value}°C`;
  }
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
  };
  // render() {
  return (
    <>
      <div className="sidebar-widget">
        <h3 className="widget-title mb-3">{Filterstate.title}</h3>
        <div className="multi-range">
          <Box sx={{ width: 220 }}>
            <Slider
              aria-label="Temperature"
              defaultValue={Value}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              onChange={handleSliderChange}
              step={10}
              marks
              min={0}
              max={110}
            />
          </Box>
        </div>
        <div className="price-slider-amount d-flex">
          <label htmlFor="amount" className="filter__label">
            {t(Filterstate.stitle)}
          </label>
          <div className="price-wrap d-flex">
            <div className="price text-violet">
              <span id="from">${Value[0]}</span>
              <span> - </span>
              <span id="to">${Value[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // }
};

export default WidgetFilterPrice;
