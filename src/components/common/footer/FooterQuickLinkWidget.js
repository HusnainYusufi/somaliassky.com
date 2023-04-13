import React from "react";
import { useTranslation } from "react-i18next";

function FooterQuickLinkWidget({ footerquicklink }) {
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <div className="col-lg-3 column-td-6">
        <div className="footer-item">
          <h4 className="footer__title">{t(footerquicklink.title)}</h4>
          <ul className="list-items">
            {footerquicklink.links.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.path}>{t(link.text)}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FooterQuickLinkWidget;
