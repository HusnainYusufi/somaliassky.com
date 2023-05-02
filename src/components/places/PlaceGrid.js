import React, { useEffect } from "react";
import { IoIosLink } from "react-icons/io";
import { FiHeart, FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { url } from "../../environment";
function PlaceGrid({ setAllListing, griditems }) {
  const User = JSON.parse(localStorage.getItem("user"));
  const [t, i18n] = useTranslation("common");

  const [ListingId, setListingId] = useState([]);

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

  const reArrangeListing = (item, index) => {
    let obj = griditems;
    obj[index]["Like"] = item;
    setAllListing(obj);
  };

  return (
    <>
      {griditems?.map((item, index) => {
        return (
          <div className="col-lg-6 col-md-6 col-sm-12 " key={index}>
            <div className={item.isPermoted ? "card-item-green" : "card-item"}>
              <Link to={item?.titleUrl} className="card-image-wrap">
                <div className="card-image">
                  <img
                    width={200}
                    height={250}
                    src={item?.image}
                    className="card__img"
                    alt="Place"
                  />
                  <span
                    className={item?.titleIcon ? "badge" : "badge badge-closed"}
                  >
                    {item?.bedge}
                  </span>
                  <span
                    className={
                      item?.isPermoted ? "badgeNew" : "badge badge-closed"
                    }
                  >
                    {item?.isPermoted ? t("Permoted") : ""}
                  </span>
                  <span
                    className="badge-toggle"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                    title="22 Likes"
                    // onClick={(e)=>handleClick(e,true,item)}
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
              </Link>
              <div className="card-content-wrap">
                <div className="card-content">
                  <Link to={item?.titleUrl}>
                    <h5 className="card-meta">
                      <span>{item?.cardTypeIcon}</span> {t(item?.cardType)}
                    </h5>
                    <h4 className="card-title">
                      {t(item?.title)}
                      {/* <i>{item?.titleIcon}</i> */}
                    </h4>
                    <p className="card-sub">{item?.stitle}</p>
                  </Link>
                  <a href={item?.authorUrl} className="author-img">
                    <img src={item?.author} alt="author-img" />
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
                      <a href={item.websiteUrl}>{item.website}</a>
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
                    {item?.ratings?.map((rating, index) => {
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
                          title={t("Bookmark")}
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
    </>
  );
}

export default PlaceGrid;
