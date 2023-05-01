import React, { useEffect, useState } from "react";
import { FiChevronDown, FiPlusCircle } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";

import { AiOutlineUser } from "react-icons/ai";

import { AiOutlineGlobal } from "react-icons/ai";
import i18next from "i18next";
import Button from "../common/Button";

import { Link } from "react-router-dom";
import sectiondata from "../../store/store";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";
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

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [isLoggedIn] = useState(localStorage.getItem("token"));
  const counter = useSelector((state) => state.counter);
  const [t, i18n] = useTranslation("common");
  const fullScreen = useMediaQuery("(max-width:960px)");
  const directionality = i18next.dir();

  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  i18n.dir();
  useEffect(() => {
    function showResNavMenu() {
      this.classList.toggle("active");
    }
    document.addEventListener(
      "click",
      function (e) {
        for (
          let target = e.target;
          target && target !== this;
          target = target.parentNode
        ) {
          if (target.matches(".side-menu-ul li")) {
            showResNavMenu.call(target, e);
            break;
          }
        }
      },
      false
    );
    let obj = sectiondata.headermenu.find((item) => item.title === "Profile")
      ? false
      : true;

    if (obj && isLoggedIn) {
      sectiondata.headermenu.push({
        title: "Profile",
        path: "#",
        dropdown: [
          {
            title: "dashboard",
            path: "/dashboard",
          },
        ],
      });
      sectiondata.headermenu.push({
        title: "Chat",
        path: "/chat",
      });
    }
  });
  // });
  useEffect(() => {
    FilterNavbarData();
  }, [counter, i18n.language]);
  const changeLanguage = (ev) => {
    console.log(ev);
    i18next.changeLanguage(ev);
    document.body.dir = i18n.dir();
  };
  const FilterNavbarData = () => {
    const result = sectiondata.headermenu.filter(
      (item) => item.title !== "Profile" && item.title !== "Chat"
    );
    console.log(result);
    if (!isLoggedIn) sectiondata.headermenu = result;
    // sectiondata.headermenu.push({
    //   title: "Profile",
    //   path: "#",
    //   dropdown: [
    //     {
    //       title: "user profile",
    //       path: "/user-profile",
    //     },

    //     {
    //       title: "dashboard",
    //       path: "/dashboard",
    //     },
    //   ],
    // });
  };
  return (
    <>
      <div className="main-menu-content">
        <nav>
          <ul>
            {sectiondata.headermenu.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>
                    {t(item.title)} {item.dropdown ? <FiChevronDown /> : ""}
                  </Link>
                  {item.dropdown ? (
                    <ul className="dropdown-menu-item">
                      {item.dropdown.map((ditem, index2) => {
                        return (
                          <li key={index2} class="dropdown">
                            <Link
                              to={ditem.path}
                              class="dropbtn"
                              // onClick={() => changeLanguage("so")}
                            >
                              {t(ditem.title)}
                              {"  "}
                              {ditem.dropdown ? <FiChevronDown /> : ""}
                            </Link>
                            {ditem.dropdown &&
                              ditem.dropdown.map((litem, index3) => {
                                return (
                                  <div class="dropdown-content">
                                    <li key={index3}>
                                      <Link to={"/index5"} class="dropbtn">
                                        {"   "} {t("Sale")}
                                      </Link>
                                    </li>
                                    <li key={index3}>
                                      <Link to={"/index6"} class="dropbtn">
                                        {"   "} {t("Rent")}
                                      </Link>
                                    </li>
                                  </div>
                                );
                              })}
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div>
        <div
          // style={{ position: "unset" }}
          className="side-menu-open"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="menu__bar"></span>
          <span className="menu__bar"></span>
          <span className="menu__bar"></span>
        </div>
      </div>
      <div
        className={navOpen ? "side-nav-container active" : "side-nav-container"}
      >
        <div className="humburger-menu">
          <div
            className="humburger-menu-lines side-menu-close"
            onClick={() => setNavOpen(!navOpen)}
          ></div>
        </div>
        <div className="side-menu-wrap">
          <ul className="side-menu-ul">
            {sectiondata.headermenu.map((item, i) => {
              return (
                <li key={i}>
                  <Link to={item.path}>{item.title}</Link>{" "}
                  {item.dropdown ? (
                    <span className="la-angle-down">
                      <FiChevronDown />
                    </span>
                  ) : (
                    ""
                  )}
                  {item.dropdown ? (
                    <ul className="dropdown-menu-item">
                      {item.dropdown.map((ditem, di) => {
                        return (
                          <li key={di}>
                            <Link to={ditem.path}>
                              {t(ditem.title)}
                              {"  "}
                              {ditem.dropdown ? <FiChevronDown /> : ""}
                              {ditem.dropdown ? (
                                <ul className="dropdown-menu-item">
                                  {ditem.dropdown.map((ele, ii) => {
                                    return (
                                      <li key={ii}>
                                        <Link to={ele.path}>
                                          {t(ele.title)}
                                          {"  "}
                                          {ele.dropdown ? (
                                            <FiChevronDown />
                                          ) : (
                                            ""
                                          )}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              ) : (
                                ""
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
          {!isLoggedIn && (
            <div className="side-nav-button">
              <Link to="/login" className="theme-btn">
                login
              </Link>
              <Link to="/sign-up" className="theme-btn">
                Sign up
              </Link>
            </div>
          )}
          {isLoggedIn ? (
            <div className="side-nav-button">
              <Link to="/add-listing/new" className="theme-btn">
                {t("Sell")}
              </Link>
            </div>
          ) : (
            <div className="side-nav-button">
              <Link to="/login" className="theme-btn">
                {t("Sell")}
              </Link>
            </div>
          )}
          <div className="d-flex" style={{ justifyContent: "center" }}>
            {directionality === "rtl" && (
              <div
                dir="ltl"
                class="dropdown"
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "fixed !important",
                }}
              >
                <a
                  class="btn btn-secondary dropdown-toggle d-flex mt-2 ml-1 mr-1 align-items-center "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div>Languages</div>
                </a>
                <ul class="dropdown-menu">
                  {languages.map((item) => (
                    <li>
                      <a
                        class="dropdown-item"
                        onClick={() => {
                          i18next.changeLanguage(item.code);

                          document.body.dir = i18n.dir();
                          // handleClose();
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
