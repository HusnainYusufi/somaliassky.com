import React from "react";
import { useTranslation } from "react-i18next";

function WidgetPostedBy({ items, title }) {
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <div className="sidebar-widget">
        <h3 className="widget-title">{title}</h3>
        <div className="title-shape"></div>
        <div className="check-box-list mt-4">
          {items.map((item, index) => {
            return (
              <div className="custom-checkbox" key={index}>
                <input type="checkbox" id={"chb4-" + index} />
                <label htmlFor={"chb4-" + index}>{t(item.title)}</label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WidgetPostedBy;
