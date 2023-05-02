import React from "react";
import { useTranslation } from "react-i18next";

function BlogBlockquote({ bgImg, quoteIcon, desc, name, designation }) {
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <div
        className="blockquote-item margin-top-30px"
        style={{ backgroundImage: "url(" + bgImg + ")" }}
      >
        <blockquote className="mb-0">
          <i className="blockquote__icon">{quoteIcon}</i>
          <p className="blockquote__text">{t(desc)}</p>
          <h4 className="blockquote__meta">
            {t(name)} <span>{t(designation)}</span>
          </h4>
        </blockquote>
      </div>
    </>
  );
}

export default BlogBlockquote;
