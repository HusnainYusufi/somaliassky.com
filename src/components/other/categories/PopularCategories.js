import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/img1.jpg";
import { useTranslation } from "react-i18next";

function PopularCategories({ catitems }) {
  const [t, i18n] = useTranslation("common");

  return (
    <>
      {catitems?.map((item, index) => {
        return (
          <div className="col-lg-3 col-md-4 col-6 " key={index}>
            <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
              <figure className="category-fig m-0">
                {item.title === "Others" ? (
                  <img
                    src={item.img}
                    alt="category"
                    className="cat-img"
                    width={"40px"}
                    height={"200px"}
                  />
                ) : (
                  <img
                    src={item.img ? item.img : img1}
                    alt="category"
                    className="cat-img"
                    width={"40px"}
                    height={"200px"}
                  />
                )}
                <figcaption className="fig-caption">
                  <Link to={item.url} className="cat-fig-box">
                    {/* {item.title !== "Others" && (
                      // <div className="icon-element mb-3">{item.icon}</div>
                    )} */}
                    <div className="cat-content">
                      <h4 className="cat__title mb-3 p-1">{t(item.title)}</h4>
                      {item.title !== "Others" && (
                        <span className="badge">
                          {item.count + " " + t("Listings")}
                        </span>
                      )}
                    </div>
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PopularCategories;
