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
  const [AllArchived, setAllArchived] = React.useState([]);
  const UserID = JSON.parse(localStorage.getItem("user"));
  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    getArchivedPost();
  }, []);

  const getArchivedPost = (id) => {
    fetch(`${url}/user/getMyPromotedListings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        seller: UserID?.doc?._id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Get Archived", response);
        if (response.message === "Success") {
          setAllArchived(
            response?.doc?.map((item) => ({
              img: item.images ? ImageUrl + item.images[0] : "",
              title: item.title,
              subtitle: item.shortDescription,
              id: item._id,
              editTxt: "Archived",
              editIcon: <FaArchive />,
              deleteTxt: "Delete",
              deleteIcon: <FaRegTrashAlt />,
              cardLink: "#",
            }))
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unArchivedPost = (id) => {
    fetch(`${url}/user/unArchivePost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        listingid: id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Archived", response);
        if (response.message === "Success") {
          // getArchivedPost();
          // getUserListing();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {AllArchived?.length > 0 ? (
        <div className="row">
          {AllArchived?.map((item, i) => {
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
                          // onClick={() => unArchivedPost(item.id)}
                          type="button"
                          className="theme-btn button-success border-0 mr-1"
                        >
                          <span className="la">
                            <FaArchive />
                          </span>{" "}
                        </button>
                        <button
                          type="button"
                          className="theme-btn delete-btn border-0"
                          data-toggle="modal"
                          data-target=".product-delete-modal"
                        >
                          <span className="la">{item.deleteIcon}</span>{" "}
                          {t(item.deleteTxt)}
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
          <h2 className="text-align-center">{t("No Booster Post Found")}</h2>
        </div>
      )}
    </>
  );
};
export default ListingProfile;
