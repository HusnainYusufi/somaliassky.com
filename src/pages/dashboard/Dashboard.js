import React, { useEffect, useState } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { message } from "antd";
import { Upload } from "antd";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BoostModal from "./BoostModal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { BsListCheck, BsBookmark, BsPencil } from "react-icons/bs";
import {
  FaGlobeAmericas,
  FaArchive,
  FaRegTrashAlt,
  FaRocket,
} from "react-icons/fa";
import BostPost from "../../assets/images/BoostedPost.png";
import { GiPositionMarker } from "react-icons/gi";
import { FiPhone } from "react-icons/fi";
import { url, ImageUrl } from "../../environment";
// import imguser from "../../assets/images/user.png";
import imguser from "../../assets/images/team1.jpg"; // 368*331
import ListingTab from "../../pages/dashboard/ListingTab";
import {
  AiOutlineUser,
  AiOutlinePlusCircle,
  AiOutlinePoweroff,
} from "react-icons/ai";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import sectiondata from "../../store/store";

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

const Dashboard = () => {
  const [SelectedListingId, setSelectedListingId] = useState("");
  const [CoinsError, setCoinsError] = useState("");
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [ListingLoader, setListingLoader] = useState(false);
  const [UserDetails, setUserDetails] = React.useState({});
  const [open, setBoastModalOpen] = React.useState(false);
  const [NoOfDays, setNoOfDays] = React.useState(1);
  const [AllArchived, setAllArchived] = React.useState([]);
  const [LikedPost, setLikedPost] = React.useState([]);
  const [Coins, setCoins] = useState(0);
  const [OpenDeleteModal, setOpenDeleteModal] = React.useState(false);
  const handleOpen = () => setOpenDeleteModal(true);
  const handleCloseDelete = () => setOpenDeleteModal(false);

  const [ListingOtion, setListingOtion] = React.useState([]);
  const [EditProfile, setEditProfile] = React.useState({ id: 0 });
  const [AllListing, setAllListing] = React.useState([]);
  const [openBooster, setOpenBooster] = React.useState(false);
  const handleOpenBooster = () => setOpenBooster(true);
  const handleCloseBooster = () => setOpenBooster(false);
  useEffect(() => {
    const UserID = JSON.parse(localStorage.getItem("user"));
    // getArchivedPost();
    getAllCategories();
    // getProfileEdit();
    // myFavouritesProducts();
    // setUserDetails({
    //   img: UserID?.doc?.profileImage ? UserID.doc.profileImage : img1,
    //   name: UserID.doc.username,
    //   date: "Joined 4 years ago",
    //   address: "101 Parkview, New York",
    //   number: UserID.doc.phone,
    //   email: UserID.doc.email,
    //   website: "www.techydevs.com",
    //   websiteUrl: "https://techydevs.com",
    // });
  }, []);

  const handleClickOpen = (e, Id) => {
    e.preventDefault();
    setBoastModalOpen(true);
    // console.log();
    setSelectedListingId(Id);
  };

  const getEditProfile = (e) => {
    let obj = EditProfile;
    obj[e.target.name] = e.target.value;
    console.log(obj);
    setEditProfile(obj);
  };

  const handleClose = () => {
    setBoastModalOpen(false);
  };

  const getTimeStamp = (timestamp) => {
    const timeDifference = Date.parse(new Date()) - Date.parse(timestamp);
    let timeAgo;
    console.log(timeDifference, timestamp);
    if (timeDifference < 1000) {
      timeAgo = "Just now";
    } else if (timeDifference < 60000) {
      timeAgo = `${Math.floor(timeDifference / 1000)} seconds ago`;
    } else if (timeDifference < 3600000) {
      timeAgo = `${Math.floor(timeDifference / 60000)} minutes ago`;
    } else if (timeDifference < 86400000) {
      timeAgo = `${Math.floor(timeDifference / 3600000)} hours ago`;
    } else {
      timeAgo = `${Math.floor(timeDifference / 86400000)} days ago`;
    }

    return <span>{timeAgo}</span>;
  };

  const UserID = JSON.parse(localStorage.getItem("user"));
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Save Changes Successfully!",
      duration: 3,
    });
  };

  const errorMessage = (MEss) => {
    messageApi.open({
      type: "error",
      content: MEss,
      duration: 3,
    });
  };

  const getAllCategories = () => {
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
          let Array = [];
          let Array1 = [];
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
          getArchivedPost();
          getUserListing();
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
        console.log("Archived", response);
        if (response.message === "Success") {
          getArchivedPost();
          getUserListing();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postProfileEdit = (e) => {
    e.preventDefault();
    fetch(`${url}/user/completeProfile${UserID?.doc?._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        phone: EditProfile.phone,
        companyName: EditProfile.companyName,
        companyWebsiteUrl: EditProfile.companyWebsiteUrl,
        companySocialMedia: EditProfile.companySocialMedia,
        city: EditProfile.city,
        address: EditProfile.address,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Edit Profile", response);
        if (response.message === "Success") {
          success();
          // message.success("Save Changes Successfully!", { duration: 2000 });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProfileEdit = (e) => {
    fetch(`${url}/user/getUserProfile${UserID?.doc?._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(" Get Profile details", response);
        if (response.message === "Success") {
          // message.success("Save Changes Successfully!", 2000);
          setEditProfile(response?.doc[0]);
          localStorage.setItem("userDoc", JSON.stringify(response.doc[0]));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const getArchivedPost = (id) => {
    fetch(`${url}/user/getArchiveListing`, {
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

  const uploadimage = async (file) => {
    const formData = new FormData();
    console.log(file); // const formData = new FormData();
    formData.append("seller", UserID.doc._id);
    formData.append("profileimg", file.file.originFileObj);

    fetch(url + "/user/uploadProfileImage", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("result--->", result);
        if (result.message === "Success") {
          getProfileEdit();
          // success();
        }
      })
      .catch((err) => errorMessage(err));

    //   message.error('File and Message is required')
  };

  const uploadStoreimage = async (file) => {
    const formData = new FormData();
    console.log(file); // const formData = new FormData();
    formData.append("storeid", EditProfile.storeId);
    formData.append("storeimg", file.file.originFileObj);

    fetch(url + "/user/uploadStoreImage", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Store result--->", result);
        if (result.message === "Success") {
          getProfileEdit();
          // success();
        }
      })
      .catch((err) => errorMessage(err));

    //   message.error('File and Message is required')
  };

  const propsUpload = {
    // beforeUpload: () => false,
    onChange: uploadimage,
    showUploadList: false,
  };
  const propsStore = {
    // beforeUpload: () => false,
    onChange: uploadStoreimage,
    showUploadList: false,
  };

  return (
    <main className="dashboard-page">
      {/* {contextHolder} */}
      {}
      <GeneralHeader />

      {}
      <Breadcrumb
        CurrentPgTitle="Dashboard"
        MenuPgTitle="pages"
        img={ImageUrl + EditProfile?.storeCoverImage}
      />

      {}

      <section className="dashboard-area padding-top-40px padding-bottom-90px">
        <div className="container">
          <Tabs>
            <div className="row">
              <div className="col-lg-12">
                <div className="dashboard-nav d-flex justify-content-between align-items-center mb-4">
                  <TabList className="nav nav-tabs border-0" id="nav-tab">
                    <Tab>
                      <div className="nav-item nav-link theme-btn pt-0 pb-0 mr-1">
                        <span className="la">
                          <BsListCheck />
                        </span>{" "}
                        Listings
                      </div>
                    </Tab>
                    <Tab>
                      <div className="nav-item nav-link theme-btn pt-0 pb-0 mr-1">
                        <span className="la">
                          <AiOutlineUser />
                        </span>{" "}
                        Profile
                      </div>
                    </Tab>
                    <Tab>
                      <div className="nav-item nav-link theme-btn pt-0 pb-0 mr-1">
                        <span className="la">
                          <BsBookmark />
                        </span>{" "}
                        Archived
                      </div>
                    </Tab>
                    <Tab>
                      <div className="nav-item nav-link theme-btn pt-0 pb-0 mr-1">
                        <span className="la">
                          <BsBookmark />
                        </span>{" "}
                        Liked
                      </div>
                    </Tab>
                    <Tab>
                      <div className="nav-item nav-link theme-btn pt-0 pb-0 mr-1">
                        <span className="la">
                          <FaRocket />
                        </span>{" "}
                        Booster
                      </div>
                    </Tab>
                  </TabList>
                  <div className="btn-box">
                    <Link to="/add-listing/new" className="theme-btn">
                      <span className="la">
                        <AiOutlinePlusCircle />
                      </span>{" "}
                      create listing
                    </Link>
                    <Link to="/" className="theme-btn ml-1">
                      <span className="la">
                        <AiOutlinePoweroff />
                      </span>{" "}
                      sign out
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="tab-content" id="nav-tabContent">
                  <TabPanel>
                    <ListingTab />
                  </TabPanel>
                  <TabPanel>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="user-profile-action">
                          <div className="user-pro-img mb-4">
                            <img
                              src={
                                EditProfile?.profileImage
                                  ? ImageUrl + EditProfile?.profileImage
                                  : imguser
                              }
                              alt="user"
                            />
                            <div
                              className="dropdown edit-btn"
                              style={{ backgroundColor: "transparent" }}
                            >
                              <Upload {...propsUpload}>
                                <button
                                  className="theme-btn edit-btn dropdown-toggle border-0 after-none"
                                  type="button"
                                  id="editImageMenu"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                >
                                  Edit
                                </button>
                              </Upload>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="editImageMenu"
                              >
                                <div className="upload-btn-box">
                                  <form>
                                    <input
                                      type="file"
                                      name="files[]"
                                      id="filer_input"
                                      multiple="multiple"
                                    />
                                    <button
                                      className="theme-btn border-0 w-100 button-success"
                                      type="submit"
                                      value="submit"
                                    >
                                      Save changes
                                    </button>
                                  </form>
                                </div>
                                <div className="btn-box mt-3">
                                  <button className="theme-btn border-0 w-100">
                                    Remove Photo
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="user-details">
                            <h2 className="user__name widget-title pb-2">
                              {UserDetails.name}
                            </h2>
                            <div className="section-heading">
                              <p className="sec__desc font-size-15 line-height-24">
                                {sectiondata.dashboard.userbio}
                              </p>
                            </div>
                            <ul className="list-items mt-3">
                              <li>
                                <span className="la d-inline-block">
                                  <GiPositionMarker />
                                </span>{" "}
                                {sectiondata.dashboard.address}
                              </li>
                              <li className="text-lowercase">
                                <span className="la d-inline-block">
                                  <FiPhone />
                                </span>{" "}
                                {UserDetails.number}
                              </li>
                              <li className="text-lowercase">
                                <span className="la d-inline-block">
                                  <FaGlobeAmericas />
                                </span>{" "}
                                {sectiondata.dashboard.website}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="user-profile-action">
                          <div className="user-details">
                            <h2 className="user__name widget-title pb-2 mt-4 mb-2">
                              Store Image
                            </h2>
                          </div>
                          <div className="user-pro-img mb-4">
                            <img
                              src={
                                EditProfile.storeCoverImage
                                  ? ImageUrl + EditProfile.storeCoverImage
                                  : imguser
                              }
                              alt="user"
                            />
                            <div
                              className="dropdown edit-btn"
                              style={{ backgroundColor: "transparent" }}
                            >
                              <Upload {...propsStore}>
                                <button
                                  className="theme-btn edit-btn dropdown-toggle border-0 after-none"
                                  type="button"
                                  id="editImageMenu"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                >
                                  Edit
                                </button>
                              </Upload>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="user-form-action">
                          <div className="billing-form-item">
                            <div className="billing-title-wrap">
                              <h3 className="widget-title pb-0">
                                Edit Complete
                              </h3>
                              <div className="title-shape margin-top-10px"></div>
                            </div>
                            <div className="billing-content">
                              <div className="contact-form-action">
                                <form>
                                  <div className="input-box">
                                    <label className="label-text">Phone</label>
                                    <div className="form-group">
                                      <span className="la form-icon">
                                        <BsPencil />
                                      </span>
                                      <input
                                        className="form-control"
                                        type="text"
                                        defaultValue={EditProfile.phone}
                                        name="phone"
                                        onChange={(e) => getEditProfile(e)}
                                        placeholder="EnterPhone"
                                      />
                                    </div>
                                  </div>
                                  <div className="input-box">
                                    <label className="label-text">
                                      Company Name
                                    </label>
                                    <div className="form-group">
                                      <span className="la form-icon">
                                        <BsPencil />
                                      </span>
                                      <input
                                        className="form-control"
                                        type="text"
                                        defaultValue={EditProfile.companyName}
                                        name="companyName"
                                        onChange={(e) => getEditProfile(e)}
                                        placeholder="EnterPhone"
                                      />
                                    </div>
                                  </div>
                                  <div className="input-box">
                                    <label className="label-text">
                                      Company Website Url
                                    </label>
                                    <div className="form-group">
                                      <span className="la form-icon">
                                        <BsPencil />
                                      </span>
                                      <input
                                        className="form-control"
                                        type="text"
                                        defaultValue={
                                          EditProfile.companyWebsiteUrl
                                        }
                                        name="companyWebsiteUrl"
                                        onChange={(e) => getEditProfile(e)}
                                        placeholder="Enter Company Website Url"
                                      />
                                    </div>
                                  </div>
                                  <div className="input-box">
                                    <label className="label-text">
                                      Company Social Media
                                    </label>
                                    <div className="form-group">
                                      <span className="la form-icon">
                                        <BsPencil />
                                      </span>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="companySocialMedia"
                                        defaultValue={
                                          EditProfile.companySocialMedia
                                        }
                                        onChange={(e) => getEditProfile(e)}
                                        placeholder="Company Social Media"
                                      />
                                    </div>
                                  </div>
                                  <div className="input-box">
                                    <label className="label-text">City</label>
                                    <div className="form-group">
                                      <span className="la form-icon">
                                        <BsPencil />
                                      </span>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="city"
                                        defaultValue={EditProfile.city}
                                        onChange={(e) => getEditProfile(e)}
                                        placeholder="Type city"
                                      />
                                    </div>
                                  </div>
                                  <div className="input-box">
                                    <label className="label-text">
                                      Address
                                    </label>
                                    <div className="form-group">
                                      <span className="la form-icon">
                                        <BsPencil />
                                      </span>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="address"
                                        defaultValue={EditProfile.address}
                                        onChange={(e) => getEditProfile(e)}
                                        placeholder="Type Address"
                                      />
                                    </div>
                                  </div>

                                  <div className="btn-box">
                                    <button
                                      onClick={postProfileEdit}
                                      className="theme-btn button-success border-0"
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="delete-account-info">
                          <div className="billing-form-item">
                            <div className="billing-title-wrap">
                              <h3 className="widget-title pb-0 color-text">
                                Delete Account
                              </h3>
                              <div className="title-shape margin-top-10px"></div>
                            </div>
                            <div className="delete-info-content p-4">
                              <p className="mb-3">
                                <span className="text-warning">Warning:</span>{" "}
                                Once you delete your account, there is no going
                                back. Please be certain.
                              </p>
                              <button
                                onClick={() => handleOpen()}
                                className="theme-btn button-success border-0"
                              >
                                Delete my account
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    {AllArchived.length > 0 ? (
                      <div className="row">
                        {AllArchived?.map((item, i) => {
                          return (
                            <div key={i} className="col-lg-4 column-td-6">
                              <div className="card-item">
                                <Link
                                  to={item.cardLink}
                                  className="card-image-wrap"
                                >
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
                                      <h4 className="card-title mt-0">
                                        {item.title}
                                      </h4>
                                      <p className="card-sub">
                                        {item.subtitle}
                                      </p>
                                    </Link>
                                  </div>
                                  <div className="rating-row">
                                    <div className="edit-info-box">
                                      <button
                                        onClick={() => unArchivedPost(item.id)}
                                        type="button"
                                        className="theme-btn button-success border-0 mr-1"
                                      >
                                        <span className="la">
                                          <FaArchive />
                                        </span>{" "}
                                        UnArchived
                                      </button>
                                      <button
                                        type="button"
                                        className="theme-btn delete-btn border-0"
                                        data-toggle="modal"
                                        data-target=".product-delete-modal"
                                      >
                                        <span className="la">
                                          {item.deleteIcon}
                                        </span>{" "}
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
                        <h2 className="text-align-center">
                          No Archived Post Found
                        </h2>
                      </div>
                    )}
                  </TabPanel>
                  <TabPanel>
                    {LikedPost.length > 0 ? (
                      <div className="row">
                        {LikedPost?.map((item, i) => {
                          return (
                            <div key={i} className="col-lg-4 column-td-6">
                              <div className="card-item">
                                <Link
                                  to={item.cardLink}
                                  className="card-image-wrap"
                                >
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
                                      <h4 className="card-title mt-0">
                                        {item.title}
                                      </h4>
                                      <p className="card-sub">
                                        {item.subtitle}
                                      </p>
                                    </Link>
                                  </div>
                                  <div className="rating-row">
                                    <div className="edit-info-box">
                                      <button
                                        onClick={() =>
                                          unFavouriatePost(item.id)
                                        }
                                        type="button"
                                        className="theme-btn button-success border-0 mr-1"
                                      >
                                        <span className="la">
                                          <FaArchive />
                                        </span>{" "}
                                        Dislike
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
                        <h2 className="text-align-center">
                          No Liked Post Found
                        </h2>
                      </div>
                    )}
                  </TabPanel>
                  <TabPanel>
                    {AllArchived.length > 0 ? (
                      <div className="row">
                        {AllArchived?.map((item, i) => {
                          return (
                            <div key={i} className="col-lg-4 column-td-6">
                              <div className="card-item">
                                <Link
                                  to={item.cardLink}
                                  className="card-image-wrap"
                                >
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
                                      <h4 className="card-title mt-0">
                                        {item.title}
                                      </h4>
                                      <p className="card-sub">
                                        {item.subtitle}
                                      </p>
                                    </Link>
                                  </div>
                                  <div className="rating-row">
                                    <div className="edit-info-box">
                                      <button
                                        onClick={() => unArchivedPost(item.id)}
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
                                        <span className="la">
                                          {item.deleteIcon}
                                        </span>{" "}
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
                        <h2 className="text-align-center">
                          No Booster Post Found
                        </h2>
                      </div>
                    )}
                  </TabPanel>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </section>

      {}
      <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

      {}
      <Footer />

      <ScrollTopBtn />

      {}

      <Modal
        open={OpenDeleteModal}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
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
    </main>
  );
};

export default Dashboard;
