import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GeneralHeader from "../../components/common/GeneralHeader";
import ListingDetailsBreadcrumb from "./ListingDetailsBreadcrumb";
import ListingDetailsSidebar from "../../components/sidebars/ListingDetailsSidebar";
import ListingDetailsGallery from "../../components/sliders/ListingDetailsGallery";
import { RiReplyLine } from "react-icons/ri";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { MdStar, MdStarHalf } from "react-icons/md";
import team1 from "../../assets/images/team2.jpg";
import GeneralMap from "../../components/contact/GeneralMap";
import ModalVideo from "react-modal-video";
import { useTranslation } from "react-i18next";

import ContactInfo from "../../components/contact/ContactInfo";
import ListingDetailsComments from "../../components/contact/ListingDetailsComments";
import ReviewFields from "../../components/contact/ReviewFields";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import sectiondata from "../../store/store";
import { useParams } from "react-router-dom";
import { url, ImageUrl } from "../../environment";
const contentstate = {
  mapTitle: "Location",
  peopleViewtitle: "People Also Viewed",
};
const ListingDetail = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [SingleDetails, setSingleDetails] = React.useState({ video: [] });
  const [AllComments, setAllComments] = React.useState([]);
  const [Cordinates, setCordinates] = React.useState([]);
  const [ContactInfoDet, setContactInfo] = React.useState({});
  const [t, i18n] = useTranslation("common");

  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [Refresh, setRefresh] = React.useState(0);
  const openModal = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    getSingleListing();
    window.scrollTo(0, 0);
  }, [Refresh]);

  const getSingleListing = (async) => {
    fetch(`${url}/listing/getSpecificListing${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("single Listing------>>>", response);
        if (response.message === "Success") {
          let item = response.doc[0];
          let contactinfos = {
            title: item?.title,

            address: item?.address2,
            email: item?.seller?.email,
            number: item?.seller?.phone,
            website: "www.techydevs.com",
            websiteUrl: "https://techydevs.com",
          };
          let CommentsArray = [];
          item?.reviews.map((ele) => {
            CommentsArray.push({
              img: team1,
              name: ele.user?.username,
              date: getTimeStamp(item.createdAt),
              content: ele.comments,
              stars: [
                <MdStar />,
                <MdStar />,
                <MdStar />,
                <MdStar />,
                <MdStarHalf />,
              ],
              replyBtn: "Reply",
              replyBtnIcon: <RiReplyLine />,
            });
          });
          GetCommentData(CommentsArray);
          setContactInfo(contactinfos);
          setSingleDetails(item);
          setCordinates([item]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetCommentData = (com) => {
    setAllComments(com);
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

  return (
    <main className="listing-details">
      {}
      <GeneralHeader />

      {}
      <ListingDetailsBreadcrumb
        title={SingleDetails?.title}
        SingleDetails={SingleDetails}
        address1={SingleDetails?.address1}
        address2={SingleDetails?.address2}
      />

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={sectiondata.listingDetails.videoid}
        onClose={() => setIsOpen(false)}
      />

      <section className="single-listing-area padding-top-35px">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-listing-wrap">
                <ListingDetailsGallery Images={SingleDetails?.images} />

                <div className="listing-description padding-top-40px padding-bottom-35px">
                  <h2 className="widget-title">
                    {t(SingleDetails?.shortDescription)}
                  </h2>
                  <div className="title-shape"></div>
                  <div className="section-heading mt-4">
                    <p className="sec__desc font-size-16">
                      {t(SingleDetails?.description)}
                    </p>
                  </div>
                </div>

                <div className="video-listing padding-bottom-40px">
                  <h2 className="widget-title">
                    {t(sectiondata.listingDetails.videotitle)}
                  </h2>
                  <div className="title-shape"></div>
                  <div className="video__box margin-top-35px text-center">
                    {SingleDetails?.video[0] ? (
                      <video width="100%" controls>
                        <source
                          src={ImageUrl + SingleDetails?.video[0]}
                          type="video/mp4"
                        />
                        {t("Error Message")}
                      </video>
                    ) : (
                      <div className="video__box-content">
                        <span
                          className="mfp-iframe video-popup-btn video-play-btn"
                          onClick={openModal}
                          title={t("Play Video")}
                        >
                          <span className="d-inline-block">
                            <AiOutlinePlayCircle />
                          </span>
                        </span>
                        <p className="video__desc">
                          {t(sectiondata.listingDetails.videobtn)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="listing-map gmaps">
                  <h2 className="widget-title">{contentstate.mapTitle}</h2>
                  <div className="title-shape margin-bottom-35px"></div>
                  <GeneralMap marker={Cordinates} />
                </div>

                <ContactInfo contactinfos={ContactInfoDet} />

                {AllComments.length > 0 ? (
                  <>
                    <div className="comments-wrap">
                      <h2 className="widget-title">
                        {AllComments.length} {t("Reviews")}
                      </h2>
                      <div className="title-shape"></div>
                      <ListingDetailsComments commentlists={AllComments} />
                    </div>
                  </>
                ) : null}
                <ReviewFields
                  setRefresh={setRefresh}
                  Refresh={Refresh}
                  Id={id}
                />
              </div>
            </div>

            <div className="col-lg-4">
              <ListingDetailsSidebar data={SingleDetails} />
            </div>
          </div>
        </div>
      </section>

      <NewsLetter
        className="mb-4"
        newsLetterContent={sectiondata.calltoactions.newsletters}
      />

      {}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
};

export default ListingDetail;
