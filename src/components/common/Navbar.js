import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import sectiondata from "../../store/store";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [isLoggedIn] = useState(localStorage.getItem("token"));
  const counter = useSelector((state) => state.counter);
  const [t, i18n] = useTranslation("common");

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
  }, [counter]);

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
                            <Link to={ditem.path} class="dropbtn">
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
      <div className="side-menu-open" onClick={() => setNavOpen(!navOpen)}>
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
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
          <div className="side-nav-button">
            <Link to="/login" className="theme-btn">
              login
            </Link>
            <Link to="/sign-up" className="theme-btn">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
