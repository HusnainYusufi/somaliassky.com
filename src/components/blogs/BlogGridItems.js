import React from "react";
import { Link } from "react-router-dom";

function BlogGridItems({ blitems }) {
  const DisplayContent = ({ content }) => {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  };
  return (
    <>
      <div className="row">
        {blitems.map((item, i) => {
          return (
            <div className="col-lg-4 column-td-6" key={i}>
              <div className="card-item blog-card">
                <Link to={item.titleLink} className="card-image-wrap">
                  <div className="card-image">
                    <img
                      height={200}
                      src={item.img}
                      alt="Blog Grid"
                      className="card__img"
                    />
                  </div>
                </Link>
                <div className="card-content pl-0 pr-0">
                  <Link to={item.titleLink} className="card-title">
                    {item.title}
                  </Link>
                  <ul className="card-meta pl-0 d-flex justify-content-between align-items-center mt-2">
                    <li>
                      {item.date} -{" "}
                      <Link to={item.metaLink} className="tag__text">
                        {item.meta}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">{item.likes} Likes</Link>
                    </li>
                  </ul>
                  {/* {item.desc} */}
                  <div
                    className="card-sub mt-3"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                  {/* <p className="card-sub mt-3">{item.desc}</p> */}
                  <ul className="post-author d-flex align-items-center justify-content-between mt-3">
                    <li>
                      <img src={item.authorImg} alt="Author" />
                      <span className="by__text"> By</span>
                      <span> {item.author}</span>
                    </li>
                    <li>
                      <Link to={item.readmoreLink} className="blog__btn">
                        {item.readmore}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BlogGridItems;
