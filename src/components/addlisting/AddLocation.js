import React, { Component, useRef } from "react";
import { FiMap } from "react-icons/fi";
import { FaMapSigns } from "react-icons/fa";
import { BsFileCode } from "react-icons/bs";
import Select from "react-select";
import SelectCountry from "../common/SelectCountry";
import Geocode from "react-geocode";
import geolib from "geolib";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import Sectiondata from '../../store/store'
import Autocomplete from "react-google-autocomplete";
Geocode.setApiKey("AIzaSyBm-xt-zBBtvE_AreqkHODWIsNvkrsU1Qw");

const cities = [
  {
    value: 0,
    label: "Select a City",
  },
  {
    value: 'New York',
    label: "New York",
  },
  {
    value: 'Los Angeles',
    label: "Los Angeles",
  },
  {
    value: 'Chicago',
    label: "Chicago",
  },
  {
    value: 'Phoenix',
    label: "Phoenix",
  },
  {
    value: 'Washington',
    label: "Washington",
  },
  {
    value: 'Boston',
    label: "Boston",
  },
  {
    value:'Philadelphia',
    label: "Philadelphia",
  },
  {
    value: 'Baltimore',
    label: "Baltimore",
  },
  {
    value: 'Seattle',
    label: "Seattle",
  },
  {
    value: 'San Francisco',
    label: "San Francisco",
  },
];
const states = [
  {
    value: 0,
    label: "Select a State",
  },
  {
    value: 'California',
    label: "California",
  },
  {
    value: 'Florida',
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
const LocationDetailed = ({data,setData}) => {
  const inputRef = useRef(null);
  const [coordinates, setCoordinates] = React.useState({});

  const handleChange = (e) => {
    console.log("ABBBBBBB", inputRef.current.value);
    data.address_1 = inputRef.current.value
    Geocode.fromAddress(inputRef.current.value).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        data.lat=lat;
        data.lng=lng;
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
    position => {
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
      console.log(position.coords)
    },
    error => console.error(error),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
  
} 
  const getGeneralFormData = (e) => {
    let obj = data;
    obj[e.target.name] = e.target.value;
    setData(obj);
    console.log(obj);
  };
  const getSelectValue = (e,name) => {
    let obj = data;
    obj[name] = e.value;
    setData(obj);
    console.log(obj);
  };
  return (
    <>
      <div className="billing-form-item">
        <div className="billing-title-wrap">
          <h3 className="widget-title pb-0">{states.title}</h3>
          <div className="title-shape margin-top-10px"></div>
        </div>
        <div className="billing-content">
          <div className="contact-form-action">
            <form method="post">
              <div className="row">
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">Address</label>
                    <div className="form-group">
                      <span className="la form-icon">
                        <FiMap />
                      </span>

                      <ReactGoogleAutocomplete
                        className="Location_input"
                        apiKey={"AIzaSyCvyBRaARkJ7h9nNDFxWYuXXvAjBzpP0To"}
                        ref={inputRef}
                        onPlaceSelected={(place) => {
                          handleChange(place);getCurrentCoordinates()
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">Address 2</label>
                    <div className="form-group">
                      <span className="la form-icon">
                        <FaMapSigns />
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        name="Address_2"
                        onChange={(e)=>getGeneralFormData(e)}
                        placeholder="Temporary address"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">City</label>
                    <div className="form-group">
                      <Select
                      name="city"
                        onChange={(e)=>getSelectValue(e,'city')}
                        placeholder="Select a City"
                        options={cities}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">State</label>
                    <div className="form-group">
                      <Select
                          name="city"
                          onChange={(e)=>getSelectValue(e,'state')}
                        placeholder="Select a State"
                        options={states}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label className="label-text">Country</label>
                  <div className="form-group">
                  <Select
                   name="country"
                   onChange={(e)=>getSelectValue(e,'country')}
                    placeholder="Select a Location"
                    options={Sectiondata.countries}
                />
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

export default LocationDetailed;
