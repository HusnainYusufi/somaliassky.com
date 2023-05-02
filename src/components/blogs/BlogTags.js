import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function BlogTags({ taglists, title }) {
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <ul className="tag-list">
        <li className="font-weight-semi-bold color-text-2">{t(title)}</li>
        {taglists?.map((item, i) => {
          return (
            <li key={i}>
              <Link to={item.path} className="radius-rounded">
                {t(item.title)}{" "}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default BlogTags;
