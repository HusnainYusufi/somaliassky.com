import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Button({ text, url, className, children }) {
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <Link to={url} className={"theme-btn " + className}>
        {children} {t(text)}
      </Link>
    </>
  );
}
