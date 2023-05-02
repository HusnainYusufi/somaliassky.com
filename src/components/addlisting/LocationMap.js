import { Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import Geocode from "react-geocode";
import { Autocomplete } from "react-google-maps";

Geocode.setApiKey("AIzaSyCvyBRaARkJ7h9nNDFxWYuXXvAjBzpP0To");

const LocationMap = () => {
  const inputRef = useRef(null);
  const [Lattitude, setLattitude] = React.useState();
  const [Longitude, setLongitude] = React.useState();
  const handleChange = (e) => {
    console.log("ABBBBBBB", inputRef.current.value);
    Geocode.fromAddress(inputRef.current.value).then(
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
    <Grid container p={3} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="caption">Location</Typography>
        <Typography variant="caption" color={"primary"}>
          *
        </Typography>
        <Autocomplete
          // width={100}
          // ref={inputRef}
          // apiKey="AIzaSyCvyBRaARkJ7h9nNDFxWYuXXvAjBzpP0To"
          onPlaceSelected={(place) => {
            handleChange(place);
          }}
          types={["address"]}
          componentRestrictions={{ country: "pk" }}
        />
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
  );
};
export default LocationMap;
