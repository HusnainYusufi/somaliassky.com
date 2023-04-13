import React from "react";
import { useTranslation } from "react-i18next";

function FooterContactWidget({ footercontact }) {
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <div className="col-lg-3 column-td-6">
        <div className="footer-item">
          <h4 className="footer__title">{t(footercontact.title)}</h4>
          <ul className="info-list contact-links">
            {footercontact.lists.map((list, index) => {
              return (
                <li key={index}>
                  <span className="la">{list.icon}</span> {t(list.text)}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FooterContactWidget;
