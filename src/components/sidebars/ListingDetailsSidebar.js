import WidgetAuthor from "./widgets/WidgetAuthor";
import WidgetStaticsInfo from "./widgets/WidgetStaticsInfo";
import WidgetCategory from "./widgets/WidgetCategory";
import WidgetTags from "./widgets/WidgetTags";
import WidgetSimilarListing from "./widgets/WidgetSimilarListing";
import WidgetSubscribe from "./widgets/WidgetSubscribe";
import WidgetFollow from "./widgets/WidgetFollow";
import sectiondata from "../../store/store";
import { BsCheckCircle } from "react-icons/bs";
import authorimg from "../../assets/images/small-team1.jpg"; // 67*60

import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
const state = {
  btnText: "Verified Listing",
  btnIcon: <BsCheckCircle />,
};
function ListingDetailsSidebar({ data }) {
  const widgetAuthor = {
    authorImg: data?.seller?.profileImage
      ? data?.seller?.profileImage
      : authorimg,
    authorName: data?.seller?.username,
    date: "Posted 3 Days ago",
    address: data?.address2,
    email: data?.seller?.email,
    number: data?.seller?.phone,
    id: data?._id,
    sellerId: data?.seller?._id,
    website: "www.techydevs.com",
    websiteUrl: "https://techydevs.com",
    socials: [
      {
        icon: <FaFacebookF />,
        url: "https://facebook.com",
      },
      {
        icon: <FaTwitter />,
        url: "https://twitter.com",
      },
      {
        icon: <FaInstagram />,
        url: "https://instagram.com",
      },
      {
        icon: <FaDribbble />,
        url: "https://dribbble.com",
      },
      {
        icon: <FaBehance />,
        url: "https://behance.be",
      },
    ],
  };
  return (
    <>
      <div className="author-verified-badge margin-bottom-20px">
        <div
          className="author__verified-badge"
          data-toggle="tooltip"
          data-placement="top"
          title="Listing has been verified and belongs the business owner or manager"
        >
          <span className="d-inline-block">{state.btnIcon}</span>{" "}
          {state.btnText}
        </div>
      </div>
      <div className="sidebar section-bg">
        <WidgetAuthor contents={widgetAuthor} />
        <WidgetStaticsInfo
          staticsinfo={sectiondata.listingDetails.sidebar.widgetStaticsInfo}
        />
        {/* <WidgetBooking />
                <WidgetOpenHours openhours={sectiondata.listingDetails.sidebar.widgetOpenHours} /> */}
        <WidgetCategory
          wCategories={sectiondata.listingDetails.sidebar.widgetCategories}
        />
        <WidgetTags
          tagcontent={sectiondata.listingDetails.sidebar.widgetTags}
        />
        <WidgetSimilarListing
          similarcontent={
            sectiondata.listingDetails.sidebar.widgetSimilarListing
          }
        />
        <WidgetSubscribe />
        <WidgetFollow
          followconnect={sectiondata.listingDetails.sidebar.widgetFollowConnect}
        />
      </div>
    </>
  );
}

export default ListingDetailsSidebar;
