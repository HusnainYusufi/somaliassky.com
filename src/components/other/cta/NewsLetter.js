import React from "react";
import SectionsHeading from "../../common/SectionsHeading";
import { FaRegEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function NewsLetter({ newsLetterContent }) {
  const [t, i18n] = useTranslation("common");

  return (
    <>
      <section className="cta-area cta-area2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-box d-flex align-items-center">
                <div className="col-lg-8">
                  <SectionsHeading
                    title={newsLetterContent.title}
                    titleClass="text-white"
                    desc={newsLetterContent.content}
                  />
                </div>
                <div className="col-lg-4">
                  <div className="contact-form-action">
                    <form method="post">
                      <div className="form-group mb-0">
                        <span className="form-icon">
                          <FaRegEnvelope />
                        </span>
                        <input
                          className="form-control"
                          type="email"
                          placeholder={t(newsLetterContent.inputplaceholder)}
                        />
                        <button className="theme-btn" type="submit">
                          {t(newsLetterContent.btntext)}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsLetter;
