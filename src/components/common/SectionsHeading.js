import React from "react";
import { useTranslation } from "react-i18next";

export default function SectionsHeading({
  children,
  title,
  desc,
  titleClass,
  descClass,
}) {
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <div className="section-heading">
        {title ? (
          <h2 className={"sec__title " + titleClass}>{t(title)}</h2>
        ) : (
          " "
        )}
        {desc ? <p className={"sec__desc " + descClass}>{desc}</p> : " "}
      </div>
      {children}
    </>
  );
}
