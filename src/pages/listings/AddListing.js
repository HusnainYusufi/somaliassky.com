import React from "react";
import {useHistory} from 'react-router-dom'
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import GeneralInfo from "../../components/addlisting/GeneralInfo";
import AddLocation from "../../components/addlisting/AddLocation";
import AddFullDetails from "../../components/addlisting/AddFullDetails";
import PhotoUploader from "../../components/addlisting/PhotoUploader";
import Amenities from "../../components/addlisting/Amenities";
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
const states = {
  breadcrumbimg: breadcrumbimg,
};
function AddListing() {
  const [AllListingData, setAllListingData] = React.useState({});
  const [GeneralINfo, setGeneralINfo] = React.useState({});
  const [FullDetail, setFullDetail] = React.useState({});
  const [adfield, setAdfield] = React.useState([]);
  const [PriceList, setPriceList] = React.useState({});
  const [AddLocationData, setAddLocationData] = React.useState({});
  const [files, setFiles] = React.useState([]);
  const [Video, setVideo] = React.useState([]);
  const navigate = useHistory();


  const PostListing = (Data) => {
    let SellerId = JSON.parse(localStorage.getItem('user'))
let dOCLINE=[]
if(adfield.length > 0) {
    adfield.map((item) => {
        dOCLINE.push({
            field:item.fieldName ,
            value:item.value ? item.value : '',
        })
    })
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
        address1: AddLocationData.address_1,
        address2: AddLocationData.Address_2,
        phoneNumber: FullDetail.phone,
        city: AddLocationData.city,
        state: AddLocationData.country,
        description: GeneralINfo.Description,
        priceShilling: PriceList.price_shilling,
        priceDollars: PriceList.price_Dollar,
        additionalFields:dOCLINE
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Add Listing ----->>>", response);
        if (response.message === "Success") {
         
          navigate.push("/list-right-sidebar-list");

          // postLoginIn(Data.user.uid)
        } else {
        //   setIsError(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const uploadimage = async (file) => {
   console.log(files,Video)
    let SellerId = JSON.parse(localStorage.getItem('user'))

     const formData = new FormData()
     formData.append('seller' ,  SellerId.doc._id)
    //  formData.append('files', files );
    // for(var i = 0 ; i<file.length;i++){ file, file.name
        formData.append('files',files[0]?.file)
        formData.append('files',files[1]?.file)
        formData.append('files',files[2]?.file)
        formData.append('files',files[3]?.file)
        formData.append('files',files[4]?.file)
        formData.append('files',Video[0]?.file)
        // formData.append('files',file[1])
    // }
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    fetch(url+'/listing/addListingPhotos', {
      method: "POST",
      body: formData,
  }).then(res => res.json()).then(result => {
     console.log('result--->',result)
     if(result.message === 'Success'){
        PostListing(result.doc)
     }
  }).catch(err=>err
    // message.error(err)
    )

//   message.error('File and Message is required')

    
  }

  return (
    <main className="add-listing">
      {/* Header */}
      <GeneralHeader />

      {/* Breadcrumb */}
      <Breadcrumb
        CurrentPgTitle="Add Listing"
        MenuPgTitle="Listings"
        img={states.breadcrumbimg}
      />

      {/* Add Listing */}
      <section className="add-listing-area padding-top-40px padding-bottom-100px">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <GeneralInfo setAdfield={setAdfield} setData={setGeneralINfo} data={GeneralINfo} />

              <AddLocation
                setData={setAddLocationData}
                data={AddLocationData}
              />

              <AddFullDetails
                setData={setFullDetail}
                data={FullDetail}
              />

              <PhotoUploader
                setData={setFiles}
                data={files}
              />
              <PhotoUploader2
                setData={setVideo}
                data={Video}
              />

              {/* <Amenities /> */}

              {/* <OpeningHours /> */}

              <AddPrice 
              setData={setPriceList}
              data={PriceList}
              />
              <div className="billing-form-item p-0 border-0 mb-0 shadow-none">
                <div className="billing-content p-0">
                  <div className="custom-checkbox d-block mr-0">
                    <input type="checkbox" id="privacy" />
                    <label htmlFor="privacy">
                      I Agree to Somaliasky{" "}
                      <Link to="#" className="color-text">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  <div className="custom-checkbox d-block mr-0">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">
                      I Agree to Somaliasky{" "}
                      <Link to="#" className="color-text">
                        Terms of Services
                      </Link>
                    </label>
                  </div>
                  <div className="btn-box mt-4">
                    <button onClick={()=>uploadimage()} type="submit" className="theme-btn border-0">
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
