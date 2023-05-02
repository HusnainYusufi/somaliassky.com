import React, { useEffect } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import BlogSidebar from "../../components/sidebars/BlogSidebar";
import BlogDetailContent from "../../components/blogs/BlogDetailContent";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import breadcrumbimg from "../../assets/images/bread-bg.jpg";
import sectiondata from "../../store/store";
import img2 from "../../assets/images/img7.jpg"; // 362*242
import authorimg from "../../assets/images/small-team1.jpg"; // 67*60
import { ImageUrl, url } from "../../environment";
import { useParams } from "react-router-dom";
import { FaQuoteRight } from "react-icons/fa";
import mainimage from "../../assets/images/video-img.jpg"; // 750*500

const state = {
  breadcrumbimg: breadcrumbimg,
};
function BlogDetail() {
  const [AllBlogs, setAllBlogs] = React.useState({});

  const { id } = useParams();
  useEffect(() => {
    getAllBlogs();
  }, []);

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
  const getAllBlogs = () => {
    fetch(`${url}/blog/getSingleBlog${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("User Listing", response);
        if (response.message === "Success") {
          let blog = response?.doc;
          let newArray = {
            img: blog.image[0] ? ImageUrl + blog.image[0] : mainimage,
            author: "David Wise",
            authorImg: authorimg,
            date: getTimeStamp(blog.createdAt),
            meta: "Tips & Tricks",
            metaLink: "#",
            likes: "480",
            title: blog.title,
            desc1: blog.description,
            desc2:
              "Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.",
            desc3:
              "when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed",
            desc4:
              "Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price.",

            /* Blockquote */
            bgimg: mainimage,
            quoteIcon: <FaQuoteRight />,
            quoteDesc:
              "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.",
            name: "- Steve Jobs",
            designation: "Founder of Apple Inc.",

            /* desc Images */
            images: [
              {
                img: img2,
              },
              {
                img: img2,
              },
              {
                img: img2,
              },
            ],
            bltags: {
              title: "Tags: ",
              lists: [
                {
                  path: "#",
                  title: "Travel",
                },
                {
                  path: "#",
                  title: "Food",
                },
                {
                  path: "#",
                  title: "Gym",
                },
              ],
            },
          };
          setAllBlogs(newArray);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* Header */}
      <GeneralHeader />

      {/* Breadcrumb */}
      <Breadcrumb
        CurrentPgTitle="Blog Detail"
        MenuPgTitle="Blog"
        img={AllBlogs.img}
      />

      <section className="blog-single-area padding-top-40px padding-bottom-70px">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <BlogDetailContent AllBlogs={AllBlogs} />
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </div>
  );
}

export default BlogDetail;
