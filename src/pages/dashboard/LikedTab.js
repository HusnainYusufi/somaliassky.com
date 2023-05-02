import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaGlobeAmericas,
  FaArchive,
  FaRegTrashAlt,
  FaRocket,
} from "react-icons/fa";
import { url, ImageUrl } from "../../environment";
const ListingProfile = () => {
  const [LikedPost, setLikedPost] = React.useState([]);

  const UserID = JSON.parse(localStorage.getItem("user"));

  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    myFavouritesProducts();
  }, []);

  const myFavouritesProducts = () => {
    fetch(url + "/user/getAllFavourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: UserID?.doc?._id,
      }),
    })
      .then((res) => res.json())
      .then(function (response) {
        console.log("response My Favourites Listing --->", response);
        setLikedPost(
          response?.doc[0]?.liked.map((item) => ({
            img: item.images ? ImageUrl + item.images[0] : "",
            title: item.title,
            subtitle: item.shortDescription,
            id: item._id,
            editTxt: "Archived",
            editIcon: <FaArchive />,
            deleteTxt: "Delete",
            deleteIcon: <FaRegTrashAlt />,
            cardLink: "/listing-details",
          }))
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const unFavouriatePost = (ListId) => {
    fetch(`${url}/user/dislikePost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        // authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        listid: ListId,
        user: UserID?.doc?._id,
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
      {LikedPost?.length > 0 ? (
        <div className="row">
          {LikedPost?.map((item, i) => {
            return (
              <div key={i} className="col-lg-4 column-td-6">
                <div className="card-item">
                  <Link to={item.cardLink} className="card-image-wrap">
                    <div className="card-image">
                      <img
                        src={item.img}
                        className="card__img"
                        alt="Card"
                        width={40}
                        height={220}
                      />
                    </div>
                  </Link>
                  <div className="card-content-wrap">
                    <div className="card-content">
                      <Link to={item.cardLink}>
                        <h4 className="card-title mt-0">{t(item.title)}</h4>
                        <p className="card-sub">{t(item.subtitle)}</p>
                      </Link>
                    </div>
                    <div className="rating-row">
                      <div className="edit-info-box">
                        <button
                          onClick={() => unFavouriatePost(item?.id)}
                          type="button"
                          className="theme-btn button-success border-0 mr-1"
                        >
                          <span className="la">
                            <FaArchive />
                          </span>{" "}
                          {t("Dislike")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className="row two-clmn margin-top-35px margin-bottom-35px text-align-center"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h2 className="text-align-center">{t("No Liked Post Found")}</h2>
        </div>
      )}
    </>
  );
};
export default ListingProfile;
