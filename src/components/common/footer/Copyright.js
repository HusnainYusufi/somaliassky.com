import React from "react";
import CopyrightMenu from "./CopyrightMenu";
import { FiHeart } from "react-icons/fi";
import sectiondata from "../../../store/store";
import { useTranslation } from "react-i18next";

function Copyright() {
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="copy-right margin-top-50px padding-top-60px">
            <p className="copy__desc">
              &copy; {t("Copyright Somalia. Made with")}
              <span className="la">
                <FiHeart />
              </span>{" "}
              {t("by")} <a href="https://leafsols.com/">{t("Leaf Solution")}</a>
            </p>

            <CopyrightMenu copyrightright={sectiondata.footerdata.copyright} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Copyright;
