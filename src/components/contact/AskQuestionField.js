import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { RiSendPlane2Line } from "react-icons/ri";
import { useTranslation } from "react-i18next";

function AskQuestionField({ title }) {
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <div className="faq-forum">
        <div className="billing-form-item">
          {title ? (
            <div className="billing-title-wrap">
              <h3 className="widget-title pb-0">{t(title)}</h3>
              <div className="title-shape margin-top-10px"></div>
            </div>
          ) : (
            ""
          )}
          <div className="billing-content">
            <div className="contact-form-action">
              <form method="post">
                <div className="input-box">
                  <label className="label-text">{t("Your Name")}</label>
                  <div className="form-group">
                    <span className="form-icon">
                      <AiOutlineUser />
                    </span>
                    <input
                      className="form-control"
                      type="text"
                      name="text"
                      placeholder={t("Your Name")}
                    />
                  </div>
                </div>
                <div className="input-box">
                  <label className="label-text">{t("Your Email")}</label>
                  <div className="form-group">
                    <span className="form-icon">
                      <FaRegEnvelope />
                    </span>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder={t("Enter your email")}
                    />
                  </div>
                </div>
                <div className="input-box">
                  <label className="label-text">{t("Message")}</label>
                  <div className="form-group">
                    <span className="form-icon">
                      <BsPencil />
                    </span>
                    <textarea
                      className="message-control form-control"
                      name="message"
                      placeholder={t("Write message")}
                    ></textarea>
                  </div>
                </div>
                <div className="btn-box">
                  <button type="button" className="theme-btn border-0">
                    <i>
                      <RiSendPlane2Line />
                    </i>{" "}
                    {t("send message")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AskQuestionField;
