import React from "react";
import SignInOptions from "./SignInOptions";
import { AiOutlineUser } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import { url } from "../../../environment";
import { Formik, useFormik, Form, Field, FormikProvider } from "formik";
import * as Yup from "yup";
function LoginBox({ title, subtitle }) {
  const [isError, setIsError] = React.useState(false);
  const [userValue, setUserValue] = React.useState({});

  const navigate = useHistory();

  // const SignupSchema = Yup.object().shape({
  //   password: Yup.string().min(5, "Too Short!").required("Required"),
  //   email: Yup.string().email("Invalid email").required("Required"),
  // });
  const getAllform = (e) => {
    let obj = userValue;
    obj[e.target.name] = e.target.value;
    console.log(obj);
    setUserValue(obj);
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string()
      // .min(6, "Too Short!")
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    // password: Yup.string().required('Password is required'),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      // remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      postLogin();
      console.log(formik);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const postLogin = () => {
    fetch(`${url}/user/loginForm`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email: formik.values.email,
        password: formik.values.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("ComSignUp ----->>>", response);
        if (response.message === "Success") {
          localStorage.setItem("token", response.doc.token);
          localStorage.setItem("user", JSON.stringify(response.doc));
          localStorage.setItem("isLoggedIn", response.doc.doc.isLoggedIn);
          navigate.push("/");

          // postLoginIn(Data.user.uid)
        } else {
          setIsError(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="billing-form-item mb-0">
        <div className="billing-title-wrap border-bottom-0 pr-0 pl-0 pb-0 text-center">
          <h3 className="widget-title font-size-28 pb-0">{title}</h3>
          <p className="font-size-16 font-weight-medium">{subtitle}</p>
        </div>
        <div className="billing-content">
          <div className="contact-form-action">
            <div className="row">
              <SignInOptions check="Login" />
            </div>
            <div className="col-lg-12">
              <div className="account-assist mt-4 mb-4 text-center">
                <p className="account__desc">or</p>
              </div>
            </div>
            {isError ? (
              <Alert
                className="mb-3 mr-2 ml-2"
                variant="outlined"
                severity="error"
                onClose={() => {
                  setIsError(false);
                }}
              >
                User not found
              </Alert>
            ) : null}

            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Username, or email</label>
                    <div className="form-group">
                      {/* <span className="form-icon">
                        <AiOutlineUser />
                      </span> */}
                      <TextField
                        fullWidth
                        autoComplete="email"
                        type="text"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AiOutlineUser />
                            </InputAdornment>
                          ),
                        }}
                        // label="Spouse"
                        {...getFieldProps("email")}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </div>
                  </div>
                </div>
                {/* {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null} */}
                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Password</label>
                    <div className="form-group">
                      {/* <span className="form-icon">
                        <FiLock />
                      </span> */}
                      <TextField
                        fullWidth
                        autoComplete="password"
                        type="password"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FiLock />
                            </InputAdornment>
                          ),
                        }}
                        // label="Spouse"
                        {...getFieldProps("password")}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="custom-checkbox mr-2 ml-2 d-flex align-items-center justify-content-between">
                        <div>
                          <input type="checkbox" id="chb1" />
                          <label htmlFor="chb1">Remember Me</label>
                        </div>
                        <div>
                          <Link
                            to="/recover"
                            className="color-text font-weight-medium"
                          >
                            Forgot password?
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="btn-box margin-top-20px ml-2 margin-bottom-20px">
                      <button className="theme-btn border-0" type="submit">
                        Login now
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <p className="font-weight-medium ml-2">
                      Not a member?{" "}
                      <Link to="/sign-up" className="color-text">
                        {" "}
                        Register
                      </Link>
                    </p>
                  </div>
                </div>
              </Form>
            </FormikProvider>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginBox;
