import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function BrowseCategories({ categories }) {
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <div className="row mt-5">
        {categories.map((item) => {
          return (
            <div className="col-lg-2 column-td-6" key={item.id}>
              <div
                className={"browse-category browse-category-color" + item.id}
              >
                <Link to={item.cardLink} className="category-inner d-block">
                  <span>{item.icon}</span>
                  <p className="cat__name">{t(item.title)}</p>
                  <p className="cat__meta">
                    {item.listingsNum} {t("Listings")}
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BrowseCategories;
