import React from "react";
import { useTranslation } from "react-i18next";

export default function BannerOneHeroHeading({
  title,
  content,
  titleHighlight,
}) {
  const [t, i18n] = useTranslation("common");
  return (
    <>
      <div className="hero-heading">
        <div className="section-heading">
          <h2 className="sec__title cd-headline zoom">
            {t(title)}
            <span className="cd-words-wrapper">
              {titleHighlight.map((item, index) => {
                return (
                  <b className={item.active ? "is-visible" : " "} key={index}>
                    {" "}
                    {t(item.text)}
                  </b>
                );
              })}
            </span>
          </h2>
          <p className="sec__desc" style={{ color: "white" }}>
            {t(content)}
          </p>
        </div>
      </div>
    </>
  );
}
