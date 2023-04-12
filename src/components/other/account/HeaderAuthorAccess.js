import React, { useState, useEffect } from "react";
import { FiPlus, FiPlusCircle, FiBookmark, FiSearch } from "react-icons/fi";
import { BsListCheck, BsQuestion, BsGear, BsPower } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";

import { Link } from "react-router-dom";
import Button from "../../common/Button";
import userimg from "../../../assets/images/team1.jpg";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {url} from '../../../environment'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const options = [
  'Somalia',
  'Saudi Arabia',
  'UK',
  'Iran',

];

const ITEM_HEIGHT = 48;
export default function HeaderAuthorAccess() {
  const [AuthorAccessOpen, setAuthorAccessOpen] = useState(false);
  const [UserDetails, setUserDetails] = useState({});
  const [isLoggedIn] = useState(localStorage.getItem("token"));
  const [anchorEl, setAnchorEl] = React.useState(null);
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
  

    const getUserDetails = (ID,token) => {
      fetch(`${url}/user/userDetails`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          authorization : `bearer ${token}`
        },
        body: JSON.stringify({
          uid: ID,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log('UserDetails',response);
          if (response.message === "Success") {
          //   navigate.push("/");
            localStorage.setItem('UserDetails',JSON.stringify(response.doc))
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  const logOut = () => {
    localStorage.clear();
  };
  return (
    <>
      <div className="logo-right-content">
        <ul className="author-access-list">
          {!isLoggedIn && (
            <li>
              <Link to="/login">login</Link>
              <span className="or-text">or</span>
              <Link to="/sign-up">Sign up</Link>
            </li>
          )}
          <li>
          {isLoggedIn ? (
            <Button text="add listing" url="/add-listing/new">
              <FiPlusCircle />
            </Button>
          ) : (
            <Button text="add listing" url="/login">
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
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className='lanuageDrop'
        aria-label="Open to show more"
        title="Open to show more"
      >
        <div style={{color:'white'}}>
        <AiOutlineGlobal/>
        </div>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map(item => (
          <MenuItem onClick={handleClose} key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    {/* </div> */}
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
                <FiBookmark className="user-icon" /> My Bookmarks
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
            <li onClick={logOut}>
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
