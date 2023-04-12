import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { url } from "../../environment";
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 0,
  marginRight: 0,
  width: "100%",
  height: "auto",
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
  alignItems: "start",
};

const img = {
  display: "block",
  width: "auto",
  maxWidth: "808px",
  height: "auto",
};

function PhotoUploader({setData,data}) {

  const uploadimage = async (file) => {
   
    let SellerId = JSON.parse(localStorage.getItem('user'))

     const formData = new FormData()
     formData.append('seller' ,  SellerId.doc._id)
    //  formData.append('files', files );
    // for(var i = 0 ; i<file.length;i++){ file, file.name
        formData.append('files',file[0]?.file)
        formData.append('files',file[1]?.file)
        formData.append('files',file[2]?.file)
        formData.append('files',file[3]?.file)
        formData.append('files',file[4]?.file)
        // formData.append('files',file[1])
    // }
    // console.log('formdata---->>',formData)
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    fetch(url+'/listing/addListingPhotos', {
      method: "POST",
      body: formData,
  }).then(res => res.json()).then(result => {
     console.log('result--->',result)
  }).catch(err=>err
    // message.error(err)
    )

//   message.error('File and Message is required')

    
  }

  // const thumbs = files.map(file => (
  //     <div style={thumb} key={file.name}>
  //         <div style={thumbInner}>
  //             <img
  //                 src={file.preview}
  //                 style={img}
  //                 alt="Author Profile"
  //             />
  //         </div>
  //     </div>
  // ));

  const handleChangeStatus = ({ meta },files, status) => {
    console.log(status, meta);
    setData(status)
  };

  
  return (
    <>
      <div className="billing-form-item">
        <div className="billing-title-wrap">
          <h3 className="widget-title pb-0">Video</h3>
          <div className="title-shape margin-top-10px"></div>
        </div>
        <div className="billing-content">
          <div className="row">
            <div className="col-lg-12">
              <Dropzone
                //   getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                // onSubmit={handleSubmit}
                accept="video/*"
                inputContent={(files, extra) =>
                  extra.reject
                    ? "Image, audio and video files only"
                    : "Drag Files"
                }
                styles={{
                  dropzoneReject: {
                    borderColor: "red",
                    backgroundColor: "#DAA",
                  },
                  inputLabel: (files, extra) =>
                    extra.reject ? { color: "red" } : {},
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoUploader;
