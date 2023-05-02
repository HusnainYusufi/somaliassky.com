import React from "react";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTranslation } from "react-i18next";

import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { useDispatch } from "react-redux";
import { setStringValue } from "../../Redux/Action";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PlaceOne({ places, setSubId }) {
  const [value, setValue] = React.useState();
  const [t, i18n] = useTranslation("common");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (Id) => {
    setSubId(Id);
  };
  return (
    <div className="row mt-3 " style={{ justifyContent: "center" }}>
      <div className="col-lg-12 justify-content-center">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          style={{ justifyContent: "center" }}
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
          aria-label="icon label tabs example"
        >
          {places &&
            places.map((item) => {
              return (
                <Tab
                  className="TabsBackgroud"
                  onClick={() => handleClick(item.id)}
                  // icon={<PhoneIcon />}
                  style={{ fontWeight: "600" }}
                  label={t(item?.title)}
                />
              );
            })}
        </Tabs>
      </div>
    </div>
  );
}

export default PlaceOne;
