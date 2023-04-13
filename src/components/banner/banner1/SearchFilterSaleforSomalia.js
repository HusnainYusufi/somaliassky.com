import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import SelectCountry from "../../common/SelectCountry";
import Select from "react-select";
import { url } from "../../../environment";

const state = {
  selectedCatOp: null,
  categories: [
    {
      value: 0,
      label: "Select a category",
    },
    {
      value: 1,
      label: "All Category",
    },
    {
      value: 2,
      label: "Clothes",
    },
    {
      value: 3,
      label: "Fishes",
    },
    {
      value: 4,
      label: "Farmer",
    },
    {
      value: 5,
      label: "Fitness",
    },
    {
      value: 6,
      label: "Camel",
    },
    {
      value: 7,
      label: "Salons",
    },
  ],
};
export default function BannerOneSearchInput({ City }) {
  const [AllCategories, setAllCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    setLoading(true);
    fetch(`${url}/category/getAllcategory`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All categories", response);
        if (response.message === "Success") {
          //   navigate.push("/");
          // setAllCategories(response.doc)
          let Array = [];

          // setAllCategories(
          response?.doc.categories?.map((item) => {
            Array.push({
              label: item.name,
              value: item._id,
            });
          });

          setAllCategories(Array);
          // );
          //   setLoading(false);
          //   localStorage.setItem('token',response.doc)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="main-search-input">
        <div className="main-search-input-item">
          <div className="contact-form-action">
            <form action="#">
              <div className="form-group mb-0">
                <span className="form-icon">
                  <FiSearch />
                </span>
                <input
                  className="form-control"
                  type="text"
                  placeholder="What are you looking for?"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="main-search-input-item location">
          <Select placeholder="Select a Location" options={City} />
        </div>

        <div className="main-search-input-item category">
          <Select placeholder="Select a Category" options={AllCategories} />
        </div>

        <div className="main-search-input-btn">
          <button className="button theme-btn" type="submit">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
