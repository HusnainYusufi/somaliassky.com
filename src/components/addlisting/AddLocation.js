import React, { useRef } from "react";
import { FiMap } from "react-icons/fi";
import { FaMapSigns } from "react-icons/fa";
import Select from "react-select";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Geocode from "react-geocode";
import LocationMap from "./LocationMap";
import LocationFormMap from "./LocationFormMap";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { useTranslation } from "react-i18next";
import Sectiondata from "../../store/store";
Geocode.setApiKey("AIzaSyBm-xt-zBBtvE_AreqkHODWIsNvkrsU1Qw");
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const cities = [
  {
    value: 0,
    label: "Select a City",
  },
  {
    value: "New York",
    label: "New York",
  },
  {
    value: "Los Angeles",
    label: "Los Angeles",
  },
  {
    value: "Chicago",
    label: "Chicago",
  },
  {
    value: "Phoenix",
    label: "Phoenix",
  },
  {
    value: "Washington",
    label: "Washington",
  },
  {
    value: "Boston",
    label: "Boston",
  },
  {
    value: "Philadelphia",
    label: "Philadelphia",
  },
  {
    value: "Baltimore",
    label: "Baltimore",
  },
  {
    value: "Seattle",
    label: "Seattle",
  },
  {
    value: "San Francisco",
    label: "San Francisco",
  },
];
const states = [
  {
    value: 0,
    label: "Select a State",
  },
  {
    value: "California",
    label: "California",
  },
  {
    value: "Florida",
    label: "Florida",
  },
  {
    label: "Texas",
    value: "Texas",
  },
  {
    label: "Hawaii",
    value: "Hawaii",
  },
  {
    label: "Arizona",
    value: "Arizona",
  },
  {
    label: "Michigan",
    value: "Michigan",
  },
  {
    label: "New Jersey",
    value: "New Jersey",
  },
  {
    label: "Georgia",
    value: "Georgia",
  },
  {
    label: "South Carolina",
    value: "South Carolina",
  },
  {
    label: "Montana",
    value: "Montana",
  },
];
const LocationForm = ({ Address_1Error, setAddress_1, data, setData }) => {
  const inputRef = useRef(null);
  const [coordinates, setCoordinates] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [t, i18n] = useTranslation("common");

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (e) => {
    console.log("ABBBBBBB", inputRef.current.value);
    data.address_1 = inputRef.current.value;
    Geocode.fromAddress(inputRef.current.value).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);

        // setLattitude(JSON.stringify(lat))
        // setLongitude(JSON.stringify(lng))
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const getCurrentCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        data.lat = position.coords.latitude;
        data.lng = position.coords.longitude;
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log(position.coords);
        handleClick();
      },
      (error) => console.error(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  const getGeneralFormData = (e) => {
    let obj = data;
    obj[e.target.name] = e.target.value;
    setData(obj);
    console.log(obj);
  };

  const getSelectValue = (e, name) => {
    let obj = data;
    obj[name] = e.value;
    setData(obj);
    console.log(obj);
  };
  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {t("Current coordinates get SuccessFully!")}
        </Alert>
      </Snackbar>
      <div className="billing-form-item">
        <div className="billing-title-wrap">
          <h3 className="widget-title pb-0">{t(states.title)}</h3>
          <div className="title-shape margin-top-10px"></div>
        </div>
        <div className="billing-content">
          <div className="contact-form-action">
            <form method="post">
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="input-box">
                    <label className="label-text">{"Address"}</label>
                    <LocationFormMap
                      Address_1Error={Address_1Error}
                      setAddress_1={setAddress_1}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">{t("Address 2")}</label>
                    <div className="form-group">
                      <span className="la form-icon">
                        <FaMapSigns />
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        name="Address_2"
                        onChange={(e) => getGeneralFormData(e)}
                        placeholder={t("Temporary address")}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">{t("City")}</label>
                    <div className="form-group">
                      <Select
                        name="city"
                        onChange={(e) => getSelectValue(e, "city")}
                        placeholder={t("Select a City")}
                        options={cities}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">{t("State")}</label>
                    <div className="form-group">
                      <Select
                        name="city"
                        onChange={(e) => getSelectValue(e, "state")}
                        placeholder={t("Select a State")}
                        options={states}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label className="label-text">{t("Country")}</label>
                  <div className="form-group">
                    <Select
                      name="country"
                      onChange={(e) => getSelectValue(e, "country")}
                      placeholder={t("Select a Location")}
                      options={Sectiondata.countries}
                    />
                  </div>
                </div>
                <div className="col-lg-12 mb-4">
                  <div className="input-box">
                    <Fab
                      onClick={() => getCurrentCoordinates()}
                      style={{ zIndex: "inherit" }}
                      color="primary"
                      variant="extended"
                    >
                      <NavigationIcon sx={{ mr: 1 }} />
                      {t("Navigate Current Location")}
                    </Fab>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationForm;
