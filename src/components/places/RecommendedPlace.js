import React, { useEffect, useState } from "react";
import { IoIosLink } from "react-icons/io";
import { FiHeart, FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { url } from "../../environment";
import { IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function RecommendedPlace({ recommendplaces }) {
  const User = JSON.parse(localStorage.getItem("user"));
  const [ListingId, setListingId] = useState([]);
  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    myFavouritesProducts();
  }, []);

  const favouriatePost = (check, ListId) => {
    fetch(`${url}/user/likePost`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        // authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        listid: ListId,
        user: User?.doc?._id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Like Post", response);
        if (response.message === "Success") {
          myFavouritesProducts();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = (e, check, item) => {
    e.preventDefault();
    console.log(check, item);
    favouriatePost(check, item?.id);
  };
  const handleClickUn = (e, check, item) => {
    e.preventDefault();
    console.log(check, item);
    unFavouriatePost(check, item?.id);
  };

  const myFavouritesProducts = () => {
    fetch(url + "/user/getAllFavourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: User?.doc?._id,
      }),
    })
      .then((res) => res.json())
      .then(function (response) {
        console.log("response My Favourites Listing --->", response);
        // setCoins(response.doc.user.coins)
        let array = response?.doc[0]?.liked?.map((e) => {
          return e._id;
        });
        console.log("favvv--->", array);
        setListingId(array ? array : []);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const unFavouriatePost = (check, ListId) => {
    fetch(`${url}/user/dislikePost`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        // authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        listid: ListId,
        user: User?.doc?._id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Like Post", response);
        if (response?.message === "Success") {
          myFavouritesProducts();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="row mt-5">
        {recommendplaces.map((item, index) => {
          return (
            <div className="col-lg-3 column-td-6" key={index}>
              <div className="card-item">
                <a href={item.titleUrl} className="card-image-wrap">
                  <div className="card-image">
                    <img
                      src={item.image}
                      height={180}
                      className="card__img"
                      alt="Place"
                    />
                    <span
                      className={
                        item.titleIcon ? "badge" : "badge badge-closed"
                      }
                    >
                      {t(item.bedge)}
                    </span>
                    <span
                      className="badge-toggle"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="22 Likes"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      {ListingId !== undefined &&
                        ListingId?.indexOf(item.id) === -1 && (
                          <IconButton
                            onClick={(e) => handleClick(e, true, item)}
                            aria-label="delete"
                            color="error"
                            style={{ outline: "none" }}
                          >
                            <FavoriteBorderIcon></FavoriteBorderIcon>
                          </IconButton>
                        )}
                      {ListingId !== undefined &&
                        ListingId?.indexOf(item.id) > -1 && (
                          <IconButton
                            onClick={(e) => handleClickUn(e, false, item)}
                            aria-label="delete"
                            color="error"
                            style={{ outline: "none" }}
                          >
                            <FavoriteIcon></FavoriteIcon>
                          </IconButton>
                        )}
                    </span>
                  </div>
                </a>
                <div className="card-content-wrap">
                  <div className="card-content">
                    <a href={item.titleUrl}>
                      <h5 className="card-meta">
                        <span>{item.cardTypeIcon}</span> {t(item.cardType)}
                      </h5>
                      <h4 className="card-title">
                        {item.title}
                        <i>{item.titleIcon}</i>
                      </h4>
                      <p className="card-sub">{t(item.stitle)}</p>
                    </a>
                    <a href={item.authorUrl} className="author-img">
                      <img src={item.author} alt="author-img" />
                    </a>
                    <ul className="info-list padding-top-20px">
                      <li>
                        <span className="la d-inline-block">
                          <FiPhone />
                        </span>{" "}
                        {item.number}
                      </li>
                      <li>
                        <span className="la d-inline-block">
                          <IoIosLink />
                        </span>{" "}
                        <a href={item.websiteUrl}>{t(item.website)}</a>
                      </li>
                      <li>
                        <span className="la d-inline-block">
                          <FaRegCalendarCheck />
                        </span>{" "}
                        {item.date}
                      </li>
                    </ul>
                  </div>
                  <div className="rating-row">
                    <div className="rating-rating">
                      {item.ratings.map((rating, index) => {
                        return <span key={index}>{rating}</span>;
                      })}
                      <span className="rating-count">{item.ratingNum}</span>
                    </div>
                    <div className="listing-info">
                      <ul>
                        <li>
                          <span className="info__count">
                            <AiOutlineEye />
                          </span>{" "}
                          {item.view}
                        </li>
                        <li>
                          <span
                            className="info__save"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Bookmark"
                          >
                            <FiHeart />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RecommendedPlace;
