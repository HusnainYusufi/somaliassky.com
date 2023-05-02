import React from "react";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";
import { FacebookAuthProvider } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { url } from "../../../environment";
import { useFormik, Form, FormikProvider } from 'formik';
function SignInOptions({ check }) {
  const provider = new GoogleAuthProvider();
  const providerfb = new FacebookAuthProvider();
  const providerTwt = new TwitterAuthProvider();
  const navigate = useHistory();
  const signInWithGoogle = (e) => {
    // e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        if (check === "signUpCom") {
          postSignUpCom(result);
        } else if (check === "signUpUser") {
          postSignUpUser(result);
        }else if (check === "Login") {
          postLoginIn(result.user.uid);
        }
        // const uid = result.user.uid ;
        // const name = result.user.displayName;
        // const email = result.user.email;
        // const profilePic = result.user.photoURL;
        // localStorage.setItem("name", name);
        // localStorage.setItem("email", email);
        // localStorage.setItem("profilePic", profilePic);
        // localStorage.setItem("UID", uid);
        //   postGoogleData(result)
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const signInWithFacebook = () => {
    // console.log("sas");

    signInWithPopup(auth, providerfb)
      .then((result) => {
        console.log(result.user);
        if (check === "signUpCom") {
          postSignUpCom(result);
        } else if (check === "signUpUser") {
          postSignUpUser(result);
        }else if (check === "Login") {
          postLoginIn(result.user.uid);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signInWithTwitter = () => {
    console.log("sas");

    signInWithPopup(auth, providerTwt)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postSignUpCom = (Data) => {
    fetch(`${url}/user/singUpAsCompany`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        username: Data.user.displayName,
        email: Data.user.email,
        phone: "0302886489218",
        uid: Data.user.uid,
        profileImage: Data.user.photoURL,
        provider: Data.user.providerData[0].providerId,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('ComSignUp ----->>>',response);
        if (response.message === "Success") {
          // navigate.push("/");
          postLoginIn(Data.user.uid)

        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const postSignUpUser = (Data) => {
    fetch(`${url}/user/singUpAsUser`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        username: Data.user.displayName,
        email: Data.user.email,
        phone: "0302886489218",
        uid: Data.user.uid,
        profileImage: Data.user.photoURL,
        provider: Data.user.providerData[0].providerId,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('UserSignUp ----->>>',response);
        if (response.message === "Success") {
          // navigate.push("/");
          postLoginIn(Data.user.uid)
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postLoginIn = (ID) => {
    fetch(`${url}/user/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        uid:ID,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('Login ----->>>',response);
        if (response.message === "Success") {
          localStorage.setItem('user',JSON.stringify(response.doc))
          localStorage.setItem("token", response.doc.token);
          getUserDetails(ID,response.doc)
          navigate.push("/");

        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const getUserDetails = (ID,token) => {
    fetch(`${url}/user/userDetails`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        authorization : `bearer ${token}`
      },
      body: JSON.stringify({
        uid: ID,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('UserDetails',response);
        if (response.message === "Success") {
        //   navigate.push("/");
          localStorage.setItem('UserDetails',JSON.stringify(response.doc))
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="col-lg-4">
        <div className="form-group">
          <button
            className="theme-btn border-0 w-100"
            onClick={() => signInWithGoogle()}
          >
            <FaGoogle /> Google
          </button>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="form-group">
          <button
            className="theme-btn bg-5 border-0 w-100"
            onClick={() => signInWithFacebook()}
          >
            <i>
              <FaFacebookF />
            </i>{" "}
            facebook
          </button>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="form-group">
          <button
            className="theme-btn bg-6 border-0 w-100"
            onClick={() => signInWithTwitter()}
          >
            <i>
              <FaTwitter />
            </i>{" "}
            twitter
          </button>
        </div>
      </div>
    </>
  );
}

export default SignInOptions;
