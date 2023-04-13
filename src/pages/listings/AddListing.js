import React from "react";
import { useHistory } from "react-router-dom";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import GeneralInfo from "../../components/addlisting/GeneralInfo";
import AddLocation from "../../components/addlisting/AddLocation";
import AddFullDetails from "../../components/addlisting/AddFullDetails";
import PhotoUploader from "../../components/addlisting/PhotoUploader";
import Amenities from "../../components/addlisting/Amenities";
import { message } from "antd";

import listingimg from "../../assets/images/list.jpg";
import OpeningHours from "../../components/addlisting/OpeningHours";
import PhotoUploader2 from "../../components/addlisting/VideoUploader";
import AddPrice from "../../components/addlisting/AddPrice";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import { Link } from "react-router-dom";
import breadcrumbimg from "../../assets/images/bread-bg.jpg";
import sectiondata from "../../store/store";
import { url } from "../../environment";
import { useTranslation } from "react-i18next";

const states = {
  breadcrumbimg: breadcrumbimg,
};
function AddListing() {
  const [AllListingData, setAllListingData] = React.useState({});
  const [GeneralINfo, setGeneralINfo] = React.useState({});
  const [TitleError, setTitleError] = React.useState(false);
  const [SubCategoriesError, setSubCategoriesError] = React.useState(false);
  const [ShortdesError, setShortdesError] = React.useState(false);
  const [Address_1Error, setAddress_1Error] = React.useState(false);
  const [CategoriesError, setCategoriesError] = React.useState(false);
  const [Address_1, setAddress_1] = React.useState("");
  const [FullDetail, setFullDetail] = React.useState({});
  const [adfield, setAdfield] = React.useState([]);
  const [PriceList, setPriceList] = React.useState({});
  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const [AddLocationData, setAddLocationData] = React.useState({});
  const [files, setFiles] = React.useState([]);
  const [Video, setVideo] = React.useState([]);
  const navigate = useHistory();
  const [messageApi, contextHolder] = message.useMessage();
  const [t, i18n] = useTranslation("common");

  const success = (e) => {
    messageApi.open({
      type: "success",
      content: e,
      duration: 3,
    });
  };
  const PostListing = (Data) => {
    let SellerId = JSON.parse(localStorage.getItem("user"));

    let dOCLINE = [];
    if (adfield.length > 0) {
      adfield.map((item) => {
        dOCLINE.push({
          field: item.fieldName,
          value: item.value ? item.value : "",
        });
      });
    }

    fetch(`${url}/listing/addListing`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        listid: Data._id,
        seller: SellerId.doc._id,
        category: GeneralINfo.categories,
        subcategory: GeneralINfo.subCategories,
        longitude: AddLocationData.lat,
        latitude: AddLocationData.lng,
        shortDescription: GeneralINfo.short_description,
        title: GeneralINfo.title,
        address1: Address_1,
        address2: AddLocationData.Address_2,
        role: SellerId?.doc?.role,
        phoneNumber: FullDetail.phone,
        city: AddLocationData.city,
        state: AddLocationData.country,
        description: GeneralINfo.Description,
        priceDollars: PriceList.price_Dollar,
        additionalFields: dOCLINE,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Add Listing ----->>>", response);
        if (response.message === "Success") {
          success("Add listing Successfully!");
          // message.success("Add listing Successfully!");
          navigate.push("/list-right-sidebar-list");
          // postLoginIn(Data.user.uid)
        } else {
          //   setIsError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        message.error(err);
      });
  };

  const uploadimage = async (file) => {
    console.log(files, Video);
    let SellerId = JSON.parse(localStorage.getItem("user"));
    if (!GeneralINfo.title) {
      setTitleError(true);
      return;
    } else {
      setTitleError(false);
    }
    if (!GeneralINfo.short_description) {
      setShortdesError(true);
      return;
    } else {
      setShortdesError(false);
    }
    if (!GeneralINfo.categories) {
      setCategoriesError(true);
      return;
    } else {
      setCategoriesError(false);
    }
    if (!GeneralINfo.subCategories) {
      setSubCategoriesError(true);
      return;
    } else {
      setSubCategoriesError(false);
    }
    if (!Address_1) {
      setAddress_1Error(true);
    } else {
      setAddress_1Error(false);
    }

    if (!files[0]?.file) {
      message.error("Please Add Image");
      return;
    }

    const formData = new FormData();
    formData.append("seller", SellerId.doc._id);
    //  formData.append('files', files );
    // for(var i = 0 ; i<file.length;i++){ file, file.name
    formData.append("files", files[0]?.file);
    formData.append("files", files[1]?.file);
    formData.append("files", files[2]?.file);
    formData.append("files", files[3]?.file);
    formData.append("files", files[4]?.file);
    formData.append("files", Video[0]?.file);
    // formData.append('files',file[1])
    // }
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    fetch(url + "/listing/addListingPhotos", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("result--->", result);
        if (result.message === "Success") {
          PostListing(result.doc);
        }
      })
      .catch(
        (err) => err
        // message.error(err)
      );

    //   message.error('File and Message is required')
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(event.target.checked);
  };
  const handleCheckboxChange1 = (event) => {
    setIsChecked1(event.target.checked);
    console.log(event.target.checked);
  };

  return (
    <main className="add-listing">
      {/* Header */}
      {contextHolder}
      <GeneralHeader />

      {/* Breadcrumb */}
      <Breadcrumb
        CurrentPgTitle="Add Listing"
        MenuPgTitle="Listings"
        img={listingimg}
      />

      {/* Add Listing */}
      <section className="add-listing-area padding-top-40px padding-bottom-100px">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <GeneralInfo
                setAdfield={setAdfield}
                TitleError={TitleError}
                SubCategoriesError={SubCategoriesError}
                ShortdesError={ShortdesError}
                CategoriesError={CategoriesError}
                setData={setGeneralINfo}
                data={GeneralINfo}
              />

              <AddLocation
                Address_1Error={Address_1Error}
                setData={setAddLocationData}
                data={AddLocationData}
                setAddress_1={setAddress_1}
              />

              <AddFullDetails setData={setFullDetail} data={FullDetail} />

              <PhotoUploader setData={setFiles} data={files} />
              <PhotoUploader2 setData={setVideo} data={Video} />

              {/* <Amenities /> */}

              {/* <OpeningHours /> */}

              <AddPrice setData={setPriceList} data={PriceList} />
              <div className="billing-form-item p-0 border-0 mb-0 shadow-none">
                <div className="billing-content p-0">
                  <div className="custom-checkbox d-block mr-0">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                    />
                    <label htmlFor="privacy">
                      {t("I Agree to Somaliasky")}{" "}
                      <Link to="#" className="color-text">
                        {t("Privacy Policy")}
                      </Link>
                    </label>
                  </div>
                  <div className="custom-checkbox d-block mr-0">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="terms">
                      {t("I Agree to Somaliasky")}{" "}
                      <Link to="#" className="color-text">
                        {t("Terms of Services")}
                      </Link>
                    </label>
                  </div>
                  <div className="btn-box mt-4">
                    <button
                      // disabled={true}
                      onClick={() => uploadimage()}
                      // type="submit"
                      className="theme-btn border-0"
                    >
                      submit listing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  );
}

export default AddListing;
