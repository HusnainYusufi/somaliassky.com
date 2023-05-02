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
import { url } from "../../environment";

const ListingProfile = () => {
  const [ListingLoader, setListingLoader] = React.useState(false);
  const [AllListing, setAllListing] = React.useState([]);
  const [open, setBoastModalOpen] = React.useState(false);
  const [SelectedListingId, setSelectedListingId] = React.useState("");
  const UserID = JSON.parse(localStorage.getItem("user"));
  const [t, i18n] = useTranslation("common");

  useEffect(() => {
    getUserListing();
  }, []);

  const handleClickOpen = (e, Id) => {
    e.preventDefault();
    setBoastModalOpen(true);
    // console.log();
    setSelectedListingId(Id);
  };

  const ArchivedPost = (id) => {
    fetch(`${url}/user/archivePost`, {
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
        console.log("Archived ", response);
        if (response.message === "Success") {
          //   getArchivedPost();
          //   getUserListing();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserListing = () => {
    setListingLoader(true);
    fetch(`${url}/user/myListings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "access-control-allow-origin": "*",
      },
      body: JSON.stringify({
        userid: UserID?.doc?._id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("User Listing", response);
        if (response.message === "Success") {
          setAllListing(
            response?.doc?.map((item) => ({
              // img: item.images ? ImageUrl + item.images[0] : "",
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
          //   setListingOtion(
          //     response?.doc?.map((item) => ({
          //       value: item._id,
          //       label: item.title,
          //     }))
          //   );
          setListingLoader(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {ListingLoader ? (
        <div
          className="col-lg-8 row mt-5 "
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : AllListing?.length > 0 ? (
        <div className="row">
          {AllListing?.map((item, i) => {
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
                          onClick={() => ArchivedPost(item.id)}
                          type="button"
                          className="theme-btn button-success border-0 mr-1 mb-1"
                        >
                          <span className="la">
                            <FaArchive />
                          </span>{" "}
                          {t("Archived")}
                        </button>
                        <button
                          type="button"
                          className="theme-btn delete-btn border-0 mr-1"
                          data-toggle="modal"
                          data-target=".product-delete-modal"
                          onClick={(e) => handleClickOpen(e, item.id)}
                        >
                          <span className="la">
                            <FaRocket />
                          </span>{" "}
                          {t("Boost")}
                        </button>
                        <button
                          type="button"
                          className="theme-btn delete-btn border-0 mb-1 mr-1"
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
          <h2 className="text-align-center">No Listing Found</h2>
        </div>
      )}
    </>
  );
};
export default ListingProfile;
