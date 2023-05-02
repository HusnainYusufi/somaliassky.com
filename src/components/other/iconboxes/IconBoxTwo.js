import React from "react";
import { useTranslation } from "react-i18next";

function IconBoxTwo({ items }) {
  const [t, i18n] = useTranslation("common");

  return (
    <>
      {items.map((item) => {
        return (
          <div className="col-lg-4 column-td-6" key={item.id}>
            <div className="icon-box icon-box-layout-4">
              <div className={"info-icon bg-" + item.id + " text-center"}>
                <span>{item.icon}</span>
              </div>
              <div className="info-content">
                <h4 className="info__title">{t(item.title)}</h4>
                <p className="info__desc">{t(item.subtitle)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default IconBoxTwo;
