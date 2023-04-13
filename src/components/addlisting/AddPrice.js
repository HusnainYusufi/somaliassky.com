import React from "react";
import { FiEdit } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function AddPrice({ data, setData }) {
  const [t, i18n] = useTranslation("common");

  const getGeneralFormData = (e) => {
    let obj = data;
    obj[e.target.name] = e.target.value;
    setData(obj);
    console.log(obj);
  };
  return (
    <>
      <div className="billing-form-item">
        <div className="billing-title-wrap">
          <h3 className="widget-title pb-0">{t("Pricing")}</h3>
          <div className="title-shape margin-top-10px"></div>
        </div>
        <div className="billing-content">
          <div className="contact-form-action">
            <form method="post">
              <div className="row">
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">{t("Price")}</label>
                    <div className="form-group">
                      <span className="la form-icon">
                        <FaDollarSign />
                      </span>
                      <input
                        className="form-control"
                        type="number"
                        name="price_Dollar"
                        onChange={(e) => getGeneralFormData(e)}
                        placeholder={t("USD Price")}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-12">
                                    <div className="input-box">
                                        <label className="label-text">Description</label>
                                        <div className="form-group mb-0">
                                            <span className="la form-icon">
                                                <BsPencil />
                                            </span>
                                            <textarea className="message-control form-control" name="message" placeholder="Write description"></textarea>
                                        </div>
                                    </div>
                                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPrice;
