import React, { useEffect, useState } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaRocket } from "react-icons/fa";
import ListingTab from "../../pages/dashboard/ListingTab";
import LikedTab from "../../pages/dashboard/LikedTab";
import ArchivedTab from "../../pages/dashboard/ArchivedTab";
import { Link } from "react-router-dom";
import ProfileTab from "../../pages/dashboard/ProfileTab";
import { BsListCheck, BsBookmark, BsPencil } from "react-icons/bs";
import { FaGlobeAmericas, FaRegEnvelope } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { FiPhone, FiEdit } from "react-icons/fi";
import { url } from "../../environment";
import {
  AiOutlineUser,
  AiOutlinePlusCircle,
  AiOutlinePoweroff,
  AiOutlineYoutube,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import Button from "../../components/common/Button";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import sectiondata from "../../store/store";

function Dashboard() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    function showDeleteAcntModal(e) {
      body.classList.add("modal-open");
      body.style.paddingRight = "17px";
      e.preventDefault();
    }
    document.addEventListener(
      "click",
      function (e) {
        for (
          let target = e.target;
          target && target !== this;
          target = target.parentNode
        ) {
          if (
            target.matches(
              ".delete-account-info .delete-account, .card-item .card-content-wrap .delete-btn"
            )
          ) {
            showDeleteAcntModal.call(target, e);
            break;
          }
        }
      },
      false
    );
    function hideDeleteAcntModal(e) {
      body.classList.remove("modal-open");
      body.style.paddingRight = "0";
      e.preventDefault();
    }
    document.addEventListener(
      "click",
      function (e) {
        for (
          let target = e.target;
          target && target !== this;
          target = target.parentNode
        ) {
          if (
            target.matches(
              ".account-delete-modal .modal-bg, .account-delete-modal .modal-dialog .btn-box .theme-btn"
            )
          ) {
            hideDeleteAcntModal.call(target, e);
            break;
          }
        }
      },
      false
    );
  });
  useEffect(() => {
    getAllCategories();
  }, []);
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

  return (
    <main className="dashboard-page">
      {/* Header */}
      <GeneralHeader />

      {/* Breadcrumb */}
      <Breadcrumb
        CurrentPgTitle="Dashboard"
        MenuPgTitle="pages"
        img={sectiondata.dashboard.breadcrumbimg}
      />

      {/*<TestVanillaJs />*/}

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
                    <ProfileTab />
                  </TabPanel>
                  <TabPanel>
                    <ArchivedTab />
                  </TabPanel>
                  <TabPanel>
                    <LikedTab />
                  </TabPanel>
                  <TabPanel>
                    <ArchivedTab />
                  </TabPanel>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Newsletter */}
      <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />

      {/* Modal */}
      <div className="modal-form text-center">
        <div
          className="modal fade account-delete-modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
        >
          <div className="modal-bg"></div>
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content p-4">
              <div className="modal-top border-0 mb-4 p-0">
                <div className="alert-content">
                  <span className="la warning-icon">
                    <AiOutlineExclamationCircle />
                  </span>
                  <h4 className="modal-title mt-2 mb-1">
                    Your account will be deleted permanently!
                  </h4>
                  <p className="modal-sub">Are you sure to proceed.</p>
                </div>
              </div>
              <div className="btn-box">
                <button
                  type="button"
                  className="theme-btn border-0 button-success mr-1"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="theme-btn border-0 button-danger"
                >
                  delete!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
