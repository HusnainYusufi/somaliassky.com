import { AiOutlineUser, AiOutlineFacebook } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { BsLink45Deg } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function AddFullDetails({ setData, data }) {
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
          <h3 className="widget-title pb-0">{t("Full Details")}</h3>
          <div className="title-shape margin-top-10px"></div>
        </div>
        <div className="billing-content">
          <div className="contact-form-action">
            <form method="post">
              <div className="row">
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">{t("Owner Name")}</label>
                    <div className="form-group">
                      <span className="la form-icon">
                        <AiOutlineUser />
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        name="owner_name"
                        onChange={(e) => getGeneralFormData(e)}
                        placeholder={t("Name")}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">{t("Email")}</label>
                    <div className="form-group">
                      <span className="la form-icon">
                        <FaRegEnvelope />
                      </span>
                      <input
                        className="form-control"
                        onChange={(e) => getGeneralFormData(e)}
                        type="email"
                        name="email"
                        placeholder={t("Email address")}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">
                      {t("Phone")}{" "}
                      <span className="text-muted">(optional)</span>
                    </label>
                    <div className="form-group">
                      <span className="la form-icon">
                        <FiPhone />
                      </span>
                      <input
                        className="form-control"
                        onChange={(e) => getGeneralFormData(e)}
                        type="text"
                        name="phone"
                        placeholder={t("Number")}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">
                      {t("Website")}{" "}
                      <span className="text-muted">(optional)</span>
                    </label>
                    <div className="form-group">
                      <span className="la form-icon">
                        <BsLink45Deg />
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        name="website"
                        onChange={(e) => getGeneralFormData(e)}
                        placeholder="https://techydevs.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">
                      {t("Facebook Link")}{" "}
                      <span className="text-muted">(optional)</span>
                    </label>
                    <div className="form-group">
                      <span className="la form-icon">
                        <AiOutlineFacebook />
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        name="facebook_link"
                        onChange={(e) => getGeneralFormData(e)}
                        placeholder="https://www.facebook.com/"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Twitter Link <span className="text-muted">(optional)</span></label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <AiOutlineTwitter />
                                            </span>
                                            <input className="form-control" type="text" name="text" placeholder="https://www.twitter.com/" />
                                        </div>
                                    </div>
                                </div> */}
                {/* <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Google Plus <span className="text-muted">(optional)</span></label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <TiSocialGooglePlus />
                                            </span>
                                            <input className="form-control" type="text" name="text" placeholder="https://plus.google.com" />
                                        </div>
                                    </div>
                                </div> */}
                {/* <div className="col-lg-6">
                                    <div className="input-box">
                                        <label className="label-text">Linkedin Link <span className="text-muted">(optional)</span></label>
                                        <div className="form-group">
                                            <span className="la form-icon">
                                                <AiOutlineLinkedin />
                                            </span>
                                            <input className="form-control" type="text" name="text" placeholder="https://linkedin.com" />
                                        </div>
                                    </div>
                                </div> */}
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

export default AddFullDetails;
