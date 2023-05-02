import React, { Component } from "react";
import { FiMap } from "react-icons/fi";
import { FaMapSigns } from "react-icons/fa";
import { BsFileCode } from "react-icons/bs";
import Select from "react-select";
import SelectCountry from "../common/SelectCountry";
import Geocode from "react-geocode";
import geolib from 'geolib';
import ReactGoogleAutocomplete from "react-google-autocomplete";

import Autocomplete from "react-google-autocomplete";
Geocode.setApiKey("AIzaSyBm-xt-zBBtvE_AreqkHODWIsNvkrsU1Qw");

const cities = [
  {
    value: 0,
    label: "Select a City",
  },
  {
    value: 1,
    label: "New York",
  },
  {
    value: 2,
    label: "Los Angeles",
  },
  {
    value: 3,
    label: "Chicago",
  },
  {
    value: 4,
    label: "Phoenix",
  },
  {
    value: 5,
    label: "Washington",
  },
  {
    value: 6,
    label: "Boston",
  },
  {
    value: 7,
    label: "Philadelphia",
  },
  {
    value: 8,
    label: "Baltimore",
  },
  {
    value: 9,
    label: "Seattle",
  },
  {
    value: 10,
    label: "San Francisco",
  },
];
const states = [
  {
    value: 0,
    label: "Select a State",
  },
  {
    value: 1,
    label: "California",
  },
  {
    value: 2,
    label: "Florida",
  },
  {
    value: 3,
    label: "Texas",
  },
  {
    value: 4,
    label: "Hawaii",
  },
  {
    value: 5,
    label: "Arizona",
  },
  {
    value: 6,
    label: "Michigan",
  },
  {
    value: 7,
    label: "New Jersey",
  },
  {
    value: 8,
    label: "Georgia",
  },
  {
    value: 9,
    label: "South Carolina",
  },
  {
    value: 10,
    label: "Montana",
  },
];
const LocationDetailed = () =>{

  // states = {
  //   selectedCity: null,
  //   selectedState: null,
  //   title: "Add Location",
  // };

  // handleChangeCity = () => {
  //   const { selectedCity } = this.state;
  //   this.setState({ selectedCity });
  // };
  // handleChangeState = () => {
  //   const { selectedState } = this.state;
  //   this.setState({ selectedState });
  // };


    return (
      <>
        <div className="billing-form-item">
          <div className="billing-title-wrap">
            <h3 className="widget-title pb-0">{this.states.title}</h3>
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
                          apiKey={"AIzaSyCvyBRaARkJ7h9nNDFxWYuXXvAjBzpP0To"}
                          onPlaceSelected={(place) => {
                            console.log(place);
                            if(place) {
                              let location = geolib.getLatLng(place);
                              this.setState({ location });
                            }
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
                          name="name"
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
                          // value={this.selectedCity}
                          // onChange={this.handleChangeCity}
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
                          // value={this.selectedState}
                          // onChange={this.handleChangeState}
                          placeholder="Select a State"
                          options={states}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <label className="label-text">Country</label>
                    <div className="form-group">
                      <SelectCountry />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }


export default LocationDetailed;
