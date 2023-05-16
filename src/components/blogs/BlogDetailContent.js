import React from "react";
import ListingDetailsComments from "../contact/ListingDetailsComments";
import BlogCommentFields from "./BlogCommentFields";
import BlogBlockquote from "./BlogBlockquote";
import { Link } from "react-router-dom";
import BlogTags from "./BlogTags";
import BlogShare from "./BlogShare";
import sectiondata from "../../store/store";
import { useTranslation } from "react-i18next";

function BlogDetailContent({ AllBlogs }) {
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <div className="card-item blog-card border-bottom-0">
        {/* {isLoading ? (
          <div className="row">
            <div className="col-12 p-7" style={{ textAlign: "center" }}>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          </div>
        ) : ( */}
        <div className="card-image">
          <img src={AllBlogs.img} alt="Blog" className="card__img" />
        </div>
        <div className="card-content pl-0 pr-0 pb-0">
          <ul className="post-author d-flex align-items-center justify-content-between mb-3">
            <li>
              <img src={AllBlogs.authorImg} alt="" />
              <span className="by__text">By</span>
              <span> {AllBlogs.author},</span>
              <span>
                {AllBlogs.date} -{" "}
                <Link to={AllBlogs.metaLink} className="tag__text">
                  {t(AllBlogs.meta)}
                </Link>
              </span>
            </li>
            <li>
              <Link to="#" className="blog__btn">
                {AllBlogs.likes} {t("Likes")}
              </Link>
            </li>
          </ul>
          <h2 className="card-title font-size-26">{AllBlogs.title}</h2>
          <div
            className="card-sub mt-3"
            dangerouslySetInnerHTML={{ __html: t(AllBlogs.desc1) }}
          />
          {/* <p className="card-sub mt-3">{t(AllBlogs.desc1)}</p> */}
          <p className="card-sub mt-3">{t(AllBlogs.desc2)}</p>

          <BlogBlockquote
            bgImg={AllBlogs.img}
            quoteIcon={AllBlogs.quoteIcon}
            desc={AllBlogs.quoteDesc}
            name={AllBlogs.name}
            designation={AllBlogs.designation}
          />

          <p className="card-sub margin-top-30px">{AllBlogs.desc3}</p>
          <div className="image-fluid margin-top-30px">
            <div className="row">
              {AllBlogs?.images?.map((img, i) => {
                return (
                  <div className="col-lg-4 column-td-6 mb-4" key={i}>
                    <img
                      src={img.img}
                      alt="Blog"
                      className="img-fluid radius-round"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <p className="card-sub mb-3">{t(AllBlogs.desc4)}</p>
          <h3 className="widget-title">{t("Storytelling")}</h3>
          <p className="card-sub mb-3">{t(AllBlogs.desc4)}</p>
          <h3 className="widget-title">{t("Branding")}</h3>
          <p className="card-sub">{t(AllBlogs.desc4)}</p>
          <div className="section-block margin-top-30px margin-bottom-30px"></div>
          <div className="tag-items d-flex justify-content-between">
            <BlogTags
              taglists={AllBlogs.bltags?.lists}
              title={AllBlogs.bltags?.title}
            />

            <BlogShare />
          </div>
          <div className="section-block margin-top-30px margin-bottom-50px"></div>
          <div className="comments-wrap">
            <h2 className="widget-title">3 {t("Comments")}</h2>
            <div className="title-shape"></div>

            <ListingDetailsComments
              commentlists={sectiondata.listingDetails.comments}
            />
          </div>
          <div className="add-review-listing padding-top-50px">
            <h2 className="widget-title">{t("Add a Comment")}</h2>
            <div className="title-shape"></div>
            <div className="section-heading padding-top-10px">
              <p className="sec__desc font-size-16">
                {t(
                  "Your email address will not be published. Required fields are marked"
                )}{" "}
                *
              </p>
            </div>
            <div className="contact-form-action mt-3">
              <BlogCommentFields />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetailContent;
