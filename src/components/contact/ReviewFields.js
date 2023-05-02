import React, { useState } from "react";
import { MdStar } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import PhotoUploader2 from "../addlisting/PhotoUploader2";
import { url } from "../../environment";
const states = {
  title: "Add a Review",
  subtitle:
    "Your email address will not be published. Required fields are marked *",
};

const ReviewFields = ({ Id, setRefresh, Refresh }) => {
  const [t, i18n] = useTranslation("common");

  const [stars, setStars] = React.useState(1);
  const [Email, setEmail] = React.useState("");
  const [Name, setName] = React.useState("");
  const [Comments, setComments] = React.useState("");
  const [isLoggedIn] = useState(localStorage.getItem("token"));
  const navigate = useHistory();

  const AddReviews = (async) => {
    const SellerId = JSON.parse(localStorage.getItem("user"));
    // setLoading(true)
    if (isLoggedIn) {
      fetch(`${url}/listing/addReview`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          _id: Id,
          seller: SellerId.doc._id,
          reviews: [
            {
              user: SellerId.doc._id,
              rating: stars,
              comments: Comments,
            },
          ],
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("Add Reviews------>>>", response);
          if (response.message === "Success") {
            setRefresh(Refresh + 1);
            setComments("");
            setName("");
            setEmail("");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate.push("/login");
    }
  };

  return (
    <>
      <div className="add-review-listing padding-top-50px" id="review">
        <h2 className="widget-title">{t(states.title)}</h2>
        <div className="title-shape"></div>
        <div className="section-heading padding-top-20px">
          <p className="sec__desc font-size-16">{t(states.subtitle)}</p>
        </div>
        <ul className="rating-list padding-top-20px">
          <li>
            <span className="la d-inline-block">
              <MdStar />
            </span>
            <label className="review-label">
              <input
                type="radio"
                name="review-radio"
                onChange={() => setStars(1)}
              />
              <span className="review-mark"></span>
            </label>
          </li>
          <li>
            <span className="la d-inline-block">
              <MdStar />
            </span>
            <span className="la d-inline-block">
              <MdStar />
            </span>
            <label className="review-label">
              <input
                type="radio"
                name="review-radio"
                onChange={() => setStars(2)}
              />
              <span className="review-mark"></span>
            </label>
          </li>
          <li>
            <span className="la d-inline-block">
              <MdStar />
            </span>
            <span className="la d-inline-block">
              <MdStar />
            </span>
            <span className="la d-inline-block">
              <MdStar />
            </span>
            <label className="review-label">
              <input
                type="radio"
                name="review-radio"
                onChange={() => setStars(3)}
              />
              <span className="review-mark"></span>
            </label>
          </li>
          <li>
            <span className="la d-inline-block">
              <MdStar />
            </span>
            <span className="la d-inline-block">
              <MdStar />
            </span>
            <span className="la d-inline-block">
              <MdStar />
            </span>
            <span className="la d-inline-block">
              <MdStar />
            </span>
            <label className="review-label">
              <input
                type="radio"
                name="review-radio"
                onChange={() => setStars(4)}
              />
              <span className="review-mark"></span>
            </label>
          </li>
          <li>
            <span className="la d-inline-block">
              <MdStar />
            </span>
            <span className="la d-inline-block">
              <MdStar />
            </span>
            <span className="la d-inline-block">
              <MdStar />
            </span>
            <span className="la d-inline-block">
              <MdStar />
            </span>
            <span className="la d-inline-block">
              <MdStar />
            </span>
            <label className="review-label">
              <input
                type="radio"
                name="review-radio"
                onChange={() => setStars(5)}
              />
              <span className="review-mark"></span>
            </label>
          </li>
        </ul>
        <div className="contact-form-action mt-5">
          {/* <form> */}
          <div className="row">
            <div className="col-lg-6">
              <div className="input-box">
                <label className="label-text">{t("Name")}</label>
                <div className="form-group">
                  <span className="la form-icon">
                    <AiOutlineUser />
                  </span>
                  <input
                    className="form-control"
                    value={Name}
                    type="text"
                    name="name"
                    placeholder={t("Your Name")}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="input-box">
                <label className="label-text">{t("Email")}</label>
                <div className="form-group">
                  <span className="la form-icon">
                    <FaRegEnvelope />
                  </span>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={Email}
                    placeholder={t("Email Address")}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="input-box">
                <label className="label-text">{t("Review")}</label>
                <div className="form-group">
                  <span className="la form-icon">
                    <BsPencil />
                  </span>
                  <textarea
                    className="message-control form-control"
                    onChange={(e) => setComments(e.target.value)}
                    name="message"
                    placeholder={t("Write Message")}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="upload-btn-box">
                {/* <form action="#" method="post" encType="multipart/form-data"> */}
                {/* <PhotoUploader2 /> */}

                <button
                  onClick={() => AddReviews()}
                  className="theme-btn border-0 margin-top-20px margin-bottom-20px"
                >
                  {t("Submit review")}
                </button>
                {/* </form> */}
              </div>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
};
export default ReviewFields;
