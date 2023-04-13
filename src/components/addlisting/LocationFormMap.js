import { Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import Geocode from "react-geocode";
import { FiMap } from "react-icons/fi";

import { Autocomplete } from "react-google-maps";
import geolib from "geolib";
import ReactGoogleAutocomplete from "react-google-autocomplete";
Geocode.setApiKey("AIzaSyCvyBRaARkJ7h9nNDFxWYuXXvAjBzpP0To");
const LocationFormMap = ({ Address_1Error, setAddress_1 }) => {
  const inputRef = useRef(null);
  const [Lattitude, setLattitude] = React.useState();
  const [Longitude, setLongitude] = React.useState();
  const handleChange = (e) => {
    setAddress_1(e);
    console.log("ABBBBBBB", e);
    Geocode.fromAddress(e).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        setLattitude(JSON.stringify(lat));
        setLongitude(JSON.stringify(lng));
      },
      (error) => {
        console.error(error);
      }
    );
  };
  let str =
    "https://maps.google.com/maps?q=" +
    Lattitude +
    "," +
    Longitude +
    "&t=&z=15&ie=UTF8&iwloc=&output=embed";
  return (
    <>
      <Grid container p={3} spacing={2}>
        <Grid item xs={12}>
          {/* <Typography variant="caption">Location</Typography> */}
          {/* <Typography variant="caption" color={"primary"}>
            *
          </Typography> */}
          <div className="form-group" style={{ position: "absolute" }}>
            <span className="la form-icon">
              <FiMap />
            </span>
          </div>
          <ReactGoogleAutocomplete
            className="form-control"
            apiKey={"AIzaSyCvyBRaARkJ7h9nNDFxWYuXXvAjBzpP0To"}
            onPlaceSelected={(place) => {
              console.log(place);
              if (place) {
                handleChange(place.formatted_address);
                // let location = geolib.getLatLng(place);
                // this.setState({ location });
              }
            }}
          />
          {Address_1Error && (
            <div style={{ color: "red", fontSize: "12px" }}>
              Please add Address 1
            </div>
          )}
        </Grid>

        <Grid item xs={12}>
          <Typography variant="caption">Map</Typography>
          <Typography variant="caption" color={"primary"}>
            *
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <iframe
            src={str}
            width={"100%"}
            height="350"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </Grid>
      </Grid>
    </>
  );
};
export default LocationFormMap;
