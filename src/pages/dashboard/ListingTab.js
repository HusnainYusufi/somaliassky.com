import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import BostPost from "../../assets/images/BoostedPost.png";

import BoostModal from "./BoostModal";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FaGlobeAmericas,
  FaArchive,
  FaRegTrashAlt,
  FaRocket,
} from "react-icons/fa";
import { url } from "../../environment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",

  width: 400,
  bgcolor: "background.paper",
  p: 4,
};

const ListingProfile = () => {
  const [ListingLoader, setListingLoader] = React.useState(false);
  const [CoinsError, setCoinsError] = useState("");
  const [NoOfDays, setNoOfDays] = React.useState(1);
  const [ListingOtion, setListingOtion] = React.useState([]);
  const [Coins, setCoins] = useState(0);
  const [AllListing, setAllListing] = React.useState([]);
  const [open, setBoastModalOpen] = React.useState(false);
  const [SelectedListingId, setSelectedListingId] = React.useState("");
  const UserID = JSON.parse(localStorage.getItem("user"));
  const [openBooster, setOpenBooster] = React.useState(false);
  const [t, i18n] = useTranslation("common");

  const handleOpenBooster = () => setOpenBooster(true);
  const handleCloseBooster = () => setOpenBooster(false);
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
          getUserListing();
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
          setListingOtion(
            response?.doc?.map((item) => ({
              value: item._id,
              label: item.title,
            }))
          );
          setListingLoader(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const BoostPost = () => {
    setCoinsError("");
    if (Coins < NoOfDays) {
      setCoinsError("No of days should be less than equal to coins");
      return;
    }

    fetch(`${url}/user/boostAdd`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        user: UserID?.doc?._id,
        listid: SelectedListingId,
        noOfDays: Number(NoOfDays),
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Boost Listing", response);
        if (response.message === "Success") {
          handleOpenBooster();
          setTimeout(() => {
            handleCloseBooster();
          }, 2000);
          // setCoins(response?.doc?.coins);
          // success('Post Boasted Successfully')
        }
        setBoastModalOpen(false);
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
                        <h4 className="card-title mt-0">{item.title}</h4>
                        <p className="card-sub">{item.subtitle}</p>
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
                          Archived
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
                          Boost
                        </button>
                        <button
                          type="button"
                          className="theme-btn delete-btn border-0 mb-1 mr-1"
                          data-toggle="modal"
                          data-target=".product-delete-modal"
                        >
                          <span className="la">{item.deleteIcon}</span>{" "}
                          {item.deleteTxt}
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
      <BoostModal
        CoinsError={CoinsError}
        setCoins={setCoins}
        Coins={Coins}
        BoostPost={() => BoostPost()}
        setNoOfDays={setNoOfDays}
        noOfDays={NoOfDays}
        ListingOtion={ListingOtion}
        setBoastModalOpen={setBoastModalOpen}
        open={open}
      />
      <Modal
        open={openBooster}
        onClose={handleCloseBooster}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid item textAlign={"center"}>
            <img src={BostPost} width={100} alt="post" />
          </Grid>
          <Typography mt={2} id="modal-modal-title" variant="h6" component="h2">
            Post Boosted Successfully!
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
export default ListingProfile;
