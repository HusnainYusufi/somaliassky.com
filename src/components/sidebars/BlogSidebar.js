import React, { useEffect } from "react";
import WidgetAuthorTwo from "./widgets/WidgetAuthorTwo";
import WidgetCategory from "./widgets/WidgetCategory";
import WidgetTags from "./widgets/WidgetTags";
import WidgetSubscribe from "./widgets/WidgetSubscribe";
import WidgetFollow from "./widgets/WidgetFollow";
import WidgetSearchTwo from "./widgets/WidgetSearchTwo";
import WidgetPopularPost from "./widgets/WidgetPopularPost";
import sectiondata from "../../store/store";
import { ImageUrl, url } from "../../environment";
import similarimg from "../../assets/images/img8.jpg"; // 90*90

function BlogSidebar() {
  const [vistiedLoading, setVistiedLoading] = React.useState(false);
  const [AllVistedPlaces, setAllVistedPlaces] = React.useState([]);
  useEffect(() => {
    getMostVisted();
  }, []);

  const getTimeStamp = (timestamp) => {
    const timeDifference = Date.parse(new Date()) - Date.parse(timestamp);
    let timeAgo;
    // console.log(timeDifference, timestamp);
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
  const getMostVisted = () => {
    setVistiedLoading(true);
    fetch(`${url}/listing/getPromotedListingIndexPage`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("All Visted places", response);
        if (response.message === "Success") {
          let Array = [];

          response?.doc?.map((item, index) => {
            Array?.push({
              img: item.images ? ImageUrl + item.images[0] : similarimg,
              title: item.title,

              titleLink: "/blog-single",
              date: getTimeStamp(item.createdAt),
              author: "SomaliaSky",
              authorUrl: "https://techydevs.com",
              cardClass: "mb-3",
            });
          });

          setAllVistedPlaces(Array);
          setVistiedLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="sidebar section-bg">
        <WidgetSearchTwo />
        <WidgetAuthorTwo contents={sectiondata.blogsidebar.wAuthor} />
        <WidgetCategory
          wCategories={sectiondata.listingDetails.sidebar.widgetCategories}
        />
        <WidgetTags
          tagcontent={sectiondata.listingDetails.sidebar.widgetTags}
        />
        <WidgetPopularPost ppitems={AllVistedPlaces} />
        <WidgetSubscribe />
        <WidgetFollow
          followconnect={sectiondata.listingDetails.sidebar.widgetFollowConnect}
        />
      </div>
    </>
  );
}

export default BlogSidebar;
