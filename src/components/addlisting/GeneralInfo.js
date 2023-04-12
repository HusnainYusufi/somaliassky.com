import React, { useEffect, useState } from "react";

import { BsPencilSquare, BsQuestion, BsPencil } from "react-icons/bs";
import { AiOutlineTags } from "react-icons/ai";
import Select from "react-select";
import { url, ImageUrl } from "../../environment";

const state = {
  title: "General Information",
  selectedCatOp: null,
  categories: [
    {
      value: 0,
      label: "Select a category",
    },
    {
      value: 2,
      label: "Shops",
    },
    {
      value: 3,
      label: "Hotels",
    },
    {
      value: 4,
      label: "Restaurants",
    },
    {
      value: 5,
      label: "Fitness",
    },
    {
      value: 6,
      label: "Travel",
    },
    {
      value: 7,
      label: "Salons",
    },
    {
      value: 8,
      label: "Event",
    },
    {
      value: 9,
      label: "Business",
    },
  ],
};
function GeneralInfo({setAdfield, setData, data }) {
  const [AllSubCategories, setAllSubCategories] = useState([]);
  const [AllCategories, setAllCategories] = useState([]);
  const [FormFields, setFormFields] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    getAllCategories();
    window.scrollTo(0, 0);
  }, []);

  //   getFor
  const getAllCategories = () => {
    setLoading(true);
    fetch(`${url}/category/getAllcategory`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All categories", response);
        if (response.message === "Success") {
          //   navigate.push("/");
          // setAllCategories(response.doc)
          console.log(response?.doc[0].image);
          let Array = [];

          // setAllCategories(
          response?.doc.map((item) => {
            // if (item.type === "Home1") {
            console.log(ImageUrl + item.image);
            Array.push({
              label: item.name,
              value: item.name,
              id: item._id,
            });
            // }
          });

          setAllCategories(Array);
          // );
          setLoading(false);
          //   localStorage.setItem('token',response.doc)
          setTimeout(() => {
            console.log("Hello, World!");
          }, 6000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSubCategories = (id) => {
    setLoading(true);
    data.categories=id
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
          setAllSubCategories(
            response?.doc.map((item) => ({
              label: item.name,
              value: item.name,
              id: item._id,
            }))
          );
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFormFields = (id) => {
    data.subCategories=id

    setLoading(true);
    fetch(`${url}/category/getFormFields`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        subcatid: id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All Forms field ", response);
        if (response.message === "Success") {
          //   navigate.push("/");
          // setAllCategories(response.doc)
          setFormFields(response.doc);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addtionalFormField = (e, index) => {
    let obj = FormFields;
    obj[index]['value'] = e.target.value;
    console.log(obj);
    setFormFields(obj);
    setAdfield(obj)
  };
  const addtionalFormSelect = (e, index,name) => {
    let obj = FormFields;
    obj[index]['value'] = e.value;
    console.log(obj);
    setFormFields(obj);
    setAdfield(obj)

  };
  const getGeneralFormData = (e) => {
    let obj = data;
    obj[e.target.name] = e.target.value;
    setData(obj);
    console.log(obj);
  };
  return (
    <>
      <div className="billing-form-item">
        <div className="billing-title-wrap">
          <h3 className="widget-title pb-0">{state.title}</h3>
          <div className="title-shape margin-top-10px"></div>
        </div>
        <div className="billing-content">
          <div className="contact-form-action">
            <form method="post">
              <div className="row">
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">Listing Title</label>
                    <div className="form-group">
                      <span className="la form-icon">
                        <BsPencilSquare />
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        name="title"
                        onChange={(e) => getGeneralFormData(e)}
                        placeholder="Enter your listing title"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text d-flex align-items-center ">
                      Short Description{" "}
                    </label>
                    <div className="form-group">
                      <span className="la form-icon">
                        <BsPencil />
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        name="short_description"
                        onChange={(e) => getGeneralFormData(e)}
                        placeholder="Enter short descrition here"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Description</label>
                    <div className="form-group">
                      <span className="la form-icon">
                        <BsPencil />
                      </span>
                      <textarea
                        className="message-control form-control"
                        name="Description"
                        onChange={(e) => getGeneralFormData(e)}
                        placeholder="Write your listing description"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Category</label>
                    <div className="form-group mb-0">
                      <Select
                        placeholder="Select a Category"
                        options={AllCategories}
                        onChange={(e) => getSubCategories(e.id)}
                      />
                    </div>
                  </div>
                </div>
                {AllSubCategories.length > 0 && (
                  <div className="col-lg-12">
                    <div className="input-box">
                      <label className="label-text">Sub Category</label>
                      <div className="form-group mb-0">
                        <Select
                          placeholder="Select a Sub Category"
                          options={AllSubCategories}
                          onChange={(e) => getFormFields(e.id)}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {FormFields &&
                  FormFields.map((item, index) => {
                    return item.component === "dropdown" ? (
                      <div className="col-lg-12">
                        <div className="input-box">
                          <label className="label-text">{item.fieldName}</label>
                          <div className="form-group mb-0">
                            <Select
                              placeholder="Select "
                              options={item.options}
                              onChange={(e)=>addtionalFormSelect(e,index,item.fieldName)}
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      item.component === "input" && (
                        <div className="col-lg-12">
                          <div className="input-box">
                            <label className="label-text">
                              {item.fieldName}
                            </label>
                            <div className="form-group mb-0">
                              <input
                                onChange={(e) => addtionalFormField(e, index)}
                                className="form-control"
                                type="text"
                                name={item.fieldName}
                                // onChange={(e) => getGeneralFormData(e)}
                                placeholder="Enter here"
                              />
                            </div>
                          </div>
                        </div>
                      )
                    );
                  })}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneralInfo;
