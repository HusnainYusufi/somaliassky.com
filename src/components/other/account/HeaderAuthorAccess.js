import React, { useState, useEffect } from "react";
import { FiPlus, FiPlusCircle, FiArchive, FiSearch } from "react-icons/fi";
import { increment } from "../../../Redux/Action";
import ReactCountryFlag from "react-country-flag";
import classNames from "classnames";

import { BsListCheck, BsQuestion, BsGear, BsPower } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";

import { Link } from "react-router-dom";
import Button from "../../common/Button";
import { useSelector, useDispatch } from "react-redux";

import userimg from "../../../assets/images/team1.jpg";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { useTranslation } from "react-i18next";

import i18next from "i18next";
import cookies from "js-cookie";
import MenuItem from "@mui/material/MenuItem";
import { url } from "../../../environment";
const options = ["Somalia", "Saudi Arabia", "UK", "Iran"];
const languages = [
  {
    code: "en",
    name: "English",
    dir: "ltl",
    country_code: "en",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
  {
    code: "so",
    name: "Somalia",
    dir: "ltl",
    country_code: "so",
  },
];
const ITEM_HEIGHT = 48;
export default function HeaderAuthorAccess() {
  const [AuthorAccessOpen, setAuthorAccessOpen] = useState(false);
  const [UserDetails, setUserDetails] = useState({});
  const [isLoggedIn] = useState(localStorage.getItem("token"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("user")));
    // getUserDetails()
  }, []);

  const getUserDetails = (ID, token) => {
    fetch(`${url}/user/userDetails`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        uid: ID,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("UserDetails", response);
        if (response.message === "Success") {
          //   navigate.push("/");
          localStorage.setItem("UserDetails", JSON.stringify(response.doc));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [t, i18n] = useTranslation("common");

  const logOut = () => {
    localStorage.clear();
    dispatch(increment());
  };

  return (
    <>
      <div className="logo-right-content">
        <ul className="author-access-list">
          {!isLoggedIn && (
            <li>
              <Link to="/login">{t("Login")}</Link>
              <span className="or-text">{t("or")}</span>
              <Link to="/sign-up">{t("Sign Up")}</Link>
            </li>
          )}
          <li>
            {isLoggedIn ? (
              <Button text={t("Sell")} url="/add-listing/new">
                <FiPlusCircle />
              </Button>
            ) : (
              <Button text={t("Sell")} url="/login">
                <FiPlusCircle />
              </Button>
            )}
          </li>
        </ul>
        {isLoggedIn && (
          <div
            className="side-user-menu-open"
            onClick={() => {
              setAuthorAccessOpen(!AuthorAccessOpen);
              setUserDetails(JSON.parse(localStorage.getItem("user")));
            }}
          >
            <AiOutlineUser />
          </div>
        )}
      </div>
      {/* <div> */}

      <div
        class="dropdown"
        style={{ display: "flex", alignItems: "center", marginRight: "9px" }}
      >
        <a
          class="btn btn-secondary dropdown-toggle d-flex align-items-center GlobalIconNew"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div>
            <AiOutlineGlobal sx={{ width: 50, height: 50 }} />
          </div>
        </a>
        <ul class="dropdown-menu">
          {languages.map((item) => (
            <li>
              <a
                class="dropdown-item"
                onClick={() => {
                  i18next.changeLanguage(item.code);

                  document.body.dir = i18n.dir();
                  handleClose();
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Side User panel */}
      <div
        className={
          AuthorAccessOpen ? "side-user-panel active" : "side-user-panel"
        }
      >
        <div className="humburger-menu">
          <div
            className="humburger-menu-lines side-menu-close"
            onClick={() => setAuthorAccessOpen(!AuthorAccessOpen)}
          ></div>
        </div>

        <div className="side-menu-wrap side-user-menu-wrap">
          <div className="side-user-img">
            <img
              src={UserDetails ? UserDetails?.doc?.profileImage : userimg}
              alt="User"
            />
            <h4 className="su__name">
              {UserDetails ? UserDetails?.doc?.username : "Mark"}
            </h4>
            {/* <span className="su__meta">Joined 3 years ago</span> */}
            <div className="avatar-icon">
              <Link
                to="/dashboard"
                data-toggle="tooltip"
                data-placement="top"
                title="Change Avatar"
              >
                {" "}
                <FiPlus />
              </Link>
            </div>
          </div>

          <ul className="side-menu-ul">
            <li>
              <Link to="/dashboard">
                <AiOutlineUser className="user-icon" /> My Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <BsListCheck className="user-icon" /> My Listings
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <FiArchive className="user-icon" /> Archived
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <FiPlusCircle className="user-icon" /> add listing
              </Link>
            </li>
            <li>
              <div className="dropdown-divider"></div>
            </li>
            <li>
              <Link to="#">
                <BsQuestion className="user-icon" /> help
              </Link>
            </li>
            <li>
              <Link to="#">
                <BsGear className="user-icon" /> Settings
              </Link>
            </li>
            <li
              onClick={() => {
                logOut();
                dispatch(increment());
              }}
            >
              <Link to="/login">
                <BsPower className="user-icon" /> Sign Out
              </Link>
            </li>
          </ul>
          <div className="side-user-search contact-form-action">
            <form method="post">
              <div className="form-group mb-0">
                <FiSearch className="form-icon" />
                <input
                  className="form-control"
                  type="search"
                  name="search-field"
                  placeholder="Search by keywords"
                />
              </div>
              <button type="button" className="theme-btn border-0">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
