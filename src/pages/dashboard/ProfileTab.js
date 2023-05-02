import React, { useEffect } from "react";
import imguser from "../../assets/images/team1.jpg"; // 368*331
import { useTranslation } from "react-i18next";
import { FiPhone } from "react-icons/fi";
import { BsListCheck, BsBookmark, BsPencil } from "react-icons/bs";
import { url, ImageUrl } from "../../environment";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import img1 from "../../assets/images/img1.jpg"; // 263*175
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";

import { GiPositionMarker } from "react-icons/gi";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import { message } from "antd";
import sectiondata from "../../store/store";

import { Upload } from "antd";
import {
  FaGlobeAmericas,
  FaArchive,
  FaRegTrashAlt,
  FaRocket,
} from "react-icons/fa";
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
  const [EditProfile, setEditProfile] = React.useState({ id: 0 });
  const [UserDetails, setUserDetails] = React.useState({});

  const UserID = JSON.parse(localStorage.getItem("user"));
  const [OpenDeleteModal, setOpenDeleteModal] = React.useState(false);
  const handleOpen = () => setOpenDeleteModal(true);
  const handleCloseDelete = () => setOpenDeleteModal(false);

  useEffect(() => {
    getProfileEdit();
    setUserDetails({
      img: UserID?.doc?.profileImage ? UserID.doc.profileImage : img1,
      name: UserID.doc.username,
      date: "Joined 4 years ago",
      address: "101 Parkview, New York",
      number: UserID.doc.phone,
      email: UserID.doc.email,
      website: "www.techydevs.com",
      websiteUrl: "https://techydevs.com",
    });
  }, []);

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
          // getProfileEdit();
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
          // getProfileEdit();
          // success();
        }
      })
      .catch((err) => errorMessage(err));

    //   message.error('File and Message is required')
  };

  const getEditProfile = (e) => {
    let obj = EditProfile;
    obj[e.target.name] = e.target.value;
    console.log(obj);
    setEditProfile(obj);
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
  const [t, i18n] = useTranslation("common");

  return (
    <>
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
                    {t("Edit")}
                  </button>
                </Upload>
                <div className="dropdown-menu" aria-labelledby="editImageMenu">
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
                        {t("Save changes")}
                      </button>
                    </form>
                  </div>
                  <div className="btn-box mt-3">
                    <button className="theme-btn border-0 w-100">
                      {t("Remove Photo")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-details">
              <h2 className="user__name widget-title pb-2">
                {t(UserDetails?.name)}
              </h2>
              <div className="section-heading">
                <p className="sec__desc font-size-15 line-height-24">
                  {t(sectiondata.dashboard.userbio)}
                </p>
              </div>
              <ul className="list-items mt-3">
                <li>
                  <span className="la d-inline-block">
                    <GiPositionMarker />
                  </span>{" "}
                  {EditProfile?.address}
                </li>
                <li className="text-lowercase">
                  <span className="la d-inline-block">
                    <FiPhone />
                  </span>{" "}
                  {UserDetails?.number}
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
                {t("Store Image")}
              </h2>
            </div>
            <div className="user-pro-img mb-4">
              <img
                src={
                  EditProfile?.storeCoverImage
                    ? ImageUrl + EditProfile?.storeCoverImage
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
                    {t("Edit")}
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
                <h3 className="widget-title pb-0">{t("Edit Complete")}</h3>
                <div className="title-shape margin-top-10px"></div>
              </div>
              <div className="billing-content">
                <div className="contact-form-action">
                  <form>
                    <div className="input-box">
                      <label className="label-text">{t("Phone")}</label>
                      <div className="form-group">
                        <span className="la form-icon">
                          <BsPencil />
                        </span>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={EditProfile?.phone}
                          name="phone"
                          onChange={(e) => getEditProfile(e)}
                          placeholder={t("EnterPhone")}
                        />
                      </div>
                    </div>
                    <div className="input-box">
                      <label className="label-text">{t("Company Name")}</label>
                      <div className="form-group">
                        <span className="la form-icon">
                          <BsPencil />
                        </span>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={EditProfile?.companyName}
                          name="companyName"
                          onChange={(e) => getEditProfile(e)}
                          placeholder={t("EnterPhone")}
                        />
                      </div>
                    </div>
                    <div className="input-box">
                      <label className="label-text">
                        {t("Company Website Url")}
                      </label>
                      <div className="form-group">
                        <span className="la form-icon">
                          <BsPencil />
                        </span>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={EditProfile?.companyWebsiteUrl}
                          name="companyWebsiteUrl"
                          onChange={(e) => getEditProfile(e)}
                          placeholder={t("Enter Company Website Url")}
                        />
                      </div>
                    </div>
                    <div className="input-box">
                      <label className="label-text">
                        {t("Company Social Media")}
                      </label>
                      <div className="form-group">
                        <span className="la form-icon">
                          <BsPencil />
                        </span>
                        <input
                          className="form-control"
                          type="text"
                          name="companySocialMedia"
                          defaultValue={EditProfile?.companySocialMedia}
                          onChange={(e) => getEditProfile(e)}
                          placeholder={t("Company Social Media")}
                        />
                      </div>
                    </div>
                    <div className="input-box">
                      <label className="label-text">{t("City")}</label>
                      <div className="form-group">
                        <span className="la form-icon">
                          <BsPencil />
                        </span>
                        <input
                          className="form-control"
                          type="text"
                          name="city"
                          defaultValue={EditProfile?.city}
                          onChange={(e) => getEditProfile(e)}
                          placeholder={t("Type city")}
                        />
                      </div>
                    </div>
                    <div className="input-box">
                      <label className="label-text">{t("Address")}</label>
                      <div className="form-group">
                        <span className="la form-icon">
                          <BsPencil />
                        </span>
                        <input
                          className="form-control"
                          type="text"
                          name="address"
                          defaultValue={EditProfile?.address}
                          onChange={(e) => getEditProfile(e)}
                          placeholder={t("Type Address")}
                        />
                      </div>
                    </div>

                    <div className="btn-box">
                      <button
                        onClick={postProfileEdit}
                        className="theme-btn button-success border-0"
                      >
                        {t("Save Changes")}
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
                  {t("Delete Account")}
                </h3>
                <div className="title-shape margin-top-10px"></div>
              </div>
              <div className="delete-info-content p-4">
                <p className="mb-3">
                  <span className="text-warning">{t("Warning")}:</span>{" "}
                  {t(
                    "Once you delete your account, there is no going back. Please be certain."
                  )}
                </p>
                <button
                  onClick={() => handleOpen()}
                  className="theme-btn button-success border-0"
                >
                  {t("Delete my account")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={OpenDeleteModal}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {t("Text in a modal")}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {t(
              "Duis mollis, est non commodo luctus, nisi erat porttitor ligula."
            )}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
export default ListingProfile;
