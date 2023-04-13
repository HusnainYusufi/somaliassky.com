import React, { useEffect } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import BlogGridItems from "../../components/blogs/BlogGridItems";
import Pagination from "../../components/blogs/Pagination";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import breadcrumbimg from "../../assets/images/bread-bg.jpg";
import sectiondata from "../../store/store";
import img2 from "../../assets/images/img7.jpg"; // 362*242
import authorimg from "../../assets/images/small-team1.jpg"; // 67*60
import { ImageUrl, url } from "../../environment";
const state = {
  breadcrumbimg: breadcrumbimg,
};
function BlogGrid() {
  const [AllBlogs, setAllBlogs] = React.useState([]);
  useEffect(() => {
    getAllBlogs();
  }, []);
  const getAllBlogs = () => {
    fetch(`${url}/blog/allBlogs1`, {
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
          let blog = response?.doc?.blogs;
          let newArray = [];
          blog.map((item) => {
            newArray.push({
              img: item.image[0] ? ImageUrl + item.image[0] : img2,
              title: item.title,
              titleLink: `/blog-single/${item._id}`,
              desc: item.description,
              date: "12 Jan, 2020",
              meta: "Tips & Tricks",
              metaLink: "#",
              author: "David Wise",
              authorImg: authorimg,
              readmore: "Read More",
              readmoreLink: "/blog-single",
              likes: "340",
            });
          });
          setAllBlogs(newArray);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="blog-grid-page">
      {/* Header */}
      <GeneralHeader />

      {/* Breadcrumb */}
      <Breadcrumb
        CurrentPgTitle="Blog Grid"
        MenuPgTitle="Blog"
        img={state.breadcrumbimg}
      />

      <section className="blog-grid padding-top-40px padding-bottom-100px">
        <div className="container">
          <BlogGridItems blitems={AllBlogs} />

          <div className="row">
            <div className="col-lg-12">
              <Pagination />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default BlogGrid;
