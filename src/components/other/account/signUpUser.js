import React from "react";
import SignInOptions from "./SignInOptions";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FacebookAuthProvider } from "firebase/auth";
import { BiUser } from "react-icons/bi";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { url } from "../../../environment";
import { Formik, useFormik, Form, Field, FormikProvider } from "formik";
import * as Yup from "yup";

import Select from "react-select";
import { FaRegEnvelope } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const state = {
  selectedCatOp: null,
  categories: [
    {
      value: 0,
      label: "Select a category",
    },
    {
      value: 1,
      label: "All Category",
    },
    {
      value: 2,
      label: "Shops",
    },
    {
      value: 3,
      label: "Hotels",
    },
    {
      value: 4,
      label: "Foods & Restaurants",
    },
    {
      value: 5,
      label: "Fitness",
    },
    {
      value: 6,
      label: "Travel",
    },
    {
      value: 7,
      label: "Salons",
    },
    {
      value: 8,
      label: "Event",
    },
    {
      value: 9,
      label: "Business",
    },
    {
      value: 10,
      label: "Jobs",
    },
  ],
  countries: [
    {
      value: "s",
      label: "Select a Location",
    },
    {
      value: "AF",
      label: "Afghanistan",
    },
    {
      value: "AX",
      label: "Åland Islands",
    },
    {
      value: "AL",
      label: "Albania",
    },
    {
      value: "DZ",
      label: "Algeria",
    },
    {
      prefix: "AD",
      label: "Andorra",
    },
    {
      prefix: "AO",
      label: "Angola",
    },
    {
      prefix: "AI",
      label: "Anguilla",
    },
    {
      prefix: "AQ",
      label: "Antarctica",
    },
    {
      prefix: "AG",
      label: "Antigua & Barbuda",
    },
    {
      prefix: "AR",
      label: "Argentina",
    },
    {
      prefix: "AM",
      label: "Armenia",
    },
    {
      prefix: "AW",
      label: "Aruba",
    },
    {
      prefix: "AC",
      label: "Ascension Island",
    },
    {
      prefix: "AU",
      label: "Australia",
    },
    {
      prefix: "AT",
      label: "Austria",
    },
    {
      prefix: "AZ",
      label: "Azerbaijan",
    },
    {
      prefix: "BS",
      label: "Bahamas",
    },
    {
      prefix: "BH",
      label: "Bahrain",
    },
    {
      prefix: "BD",
      label: "Bangladesh",
    },
    {
      prefix: "BB",
      label: "Barbados",
    },
    {
      prefix: "BY",
      label: "Belarus",
    },
    {
      prefix: "BE",
      label: "Belgium",
    },
    {
      prefix: "BZ",
      label: "Belize",
    },
    {
      prefix: "BJ",
      label: "Benin",
    },
    {
      prefix: "BM",
      label: "Bermuda",
    },
    {
      prefix: "BT",
      label: "Bhutan",
    },
    {
      prefix: "BO",
      label: "Bolivia",
    },
    {
      prefix: "BA",
      label: "Bosnia & Herzegovina",
    },
    {
      prefix: "BW",
      label: "Botswana",
    },
    {
      prefix: "BV",
      label: "Bouvet Island",
    },
    {
      prefix: "BR",
      label: "Brazil",
    },
    {
      prefix: "IO",
      label: "British Indian Ocean Territory",
    },
    {
      prefix: "VG",
      label: "British Virgin Islands",
    },
    {
      prefix: "BN",
      label: "Brunei",
    },
    {
      prefix: "BG",
      label: "Bulgaria",
    },
    {
      prefix: "BF",
      label: "Burkina Faso",
    },
    {
      prefix: "BI",
      label: "Burundi",
    },
    {
      prefix: "KH",
      label: "Cambodia",
    },
    {
      prefix: "CH",
      label: "Cameroon",
    },
    {
      prefix: "CA",
      label: "Canada",
    },
    {
      prefix: "CV",
      label: "Cape Verde",
    },
    {
      prefix: "BQ",
      label: "Caribbean Netherlands",
    },
    {
      prefix: "KY",
      label: "Cayman Islands",
    },
    {
      prefix: "CF",
      label: "Central African Republic",
    },
    {
      prefix: "TD",
      label: "Chad",
    },
    {
      prefix: "CL",
      label: "Chile",
    },
    {
      prefix: "CN",
      label: "China",
    },
    {
      prefix: "CO",
      label: "Colombia",
    },
    {
      prefix: "KM",
      label: "Comoros",
    },
    {
      prefix: "CG",
      label: "Congo - Brazzaville",
    },
    {
      prefix: "CD",
      label: "Congo - Kinshasa",
    },
    {
      prefix: "CK",
      label: "Cook Islands",
    },
    {
      prefix: "CR",
      label: "Costa Rica",
    },
    {
      prefix: "CI",
      label: "Côte d’Ivoire",
    },
    {
      prefix: "HR",
      label: "Croatia",
    },
    {
      prefix: "CW",
      label: "Curaçao",
    },
    {
      prefix: "CY",
      label: "Cyprus",
    },
    {
      prefix: "CZ",
      label: "Czechia",
    },
    {
      prefix: "DK",
      label: "Denmark",
    },
    {
      prefix: "DJ",
      label: "Djibouti",
    },
    {
      prefix: "DM",
      label: "Dominica",
    },
    {
      prefix: "DO",
      label: "Dominican Republic",
    },
    {
      prefix: "EC",
      label: "Ecuador",
    },
    {
      prefix: "EG",
      label: "Egypt",
    },
    {
      prefix: "SV",
      label: "El Salvador",
    },
    {
      prefix: "GQ",
      label: "Equatorial Guinea",
    },
    {
      prefix: "ER",
      label: "Eritrea",
    },
    {
      prefix: "EE",
      label: "Estonia",
    },
    {
      prefix: "SZ",
      label: "Eswatini",
    },
    {
      prefix: "ET",
      label: "Ethiopia",
    },
    {
      prefix: "FK",
      label: "Falkland Islands",
    },
    {
      prefix: "FO",
      label: "Faroe Islands",
    },
    {
      prefix: "FJ",
      label: "Fiji",
    },
    {
      prefix: "FI",
      label: "Finland",
    },
    {
      prefix: "FR",
      label: "France",
    },
    {
      prefix: "GF",
      label: "French Guiana",
    },
    {
      prefix: "PF",
      label: "French Polynesia",
    },
    {
      prefix: "TF",
      label: "French Southern Territories",
    },
    {
      prefix: "GA",
      label: "Gabon",
    },
    {
      prefix: "GM",
      label: "Gambia",
    },
    {
      prefix: "GE",
      label: "Georgia",
    },
    {
      prefix: "DE",
      label: "Germany",
    },
    {
      prefix: "GH",
      label: "Ghana",
    },
    {
      prefix: "GI",
      label: "Gibraltar",
    },
    {
      prefix: "GR",
      label: "Greece",
    },
    {
      prefix: "GL",
      label: "Greenland",
    },
    {
      prefix: "GD",
      label: "Grenada",
    },
    {
      prefix: "GP",
      label: "Guadeloupe",
    },
    {
      prefix: "GU",
      label: "Guam",
    },
    {
      prefix: "GT",
      label: "Guatemala",
    },
    {
      prefix: "GG",
      label: "Guernsey",
    },
    {
      prefix: "GN",
      label: "Guinea",
    },
    {
      prefix: "GW",
      label: "Guinea-Bissau",
    },
    {
      prefix: "GY",
      label: "Guyana",
    },
    {
      prefix: "HT",
      label: "Haiti",
    },
    {
      prefix: "HN",
      label: "Honduras",
    },
    {
      prefix: "HK",
      label: "Hong Kong SAR China",
    },
    {
      prefix: "HU",
      label: "Hungary",
    },
    {
      prefix: "IS",
      label: "Iceland",
    },
    {
      prefix: "IN",
      label: "India",
    },
    {
      prefix: "ID",
      label: "Indonesia",
    },
    {
      prefix: "IR",
      label: "Iran",
    },
    {
      prefix: "IQ",
      label: "Iraq",
    },
    {
      prefix: "IE",
      label: "Ireland",
    },
    {
      prefix: "IM",
      label: "Isle of Man",
    },
    {
      prefix: "IL",
      label: "Israel",
    },
    {
      prefix: "IT",
      label: "Italy",
    },
    {
      prefix: "JM",
      label: "Jamaica",
    },
    {
      prefix: "JP",
      label: "Japan",
    },
    {
      prefix: "JE",
      label: "Jersey",
    },
    {
      prefix: "JO",
      label: "Jordan",
    },
    {
      prefix: "KZ",
      label: "Kazakhstan",
    },
    {
      prefix: "KE",
      label: "Kenya",
    },
    {
      prefix: "KI",
      label: "Kiribati",
    },
    {
      prefix: "XK",
      label: "Kosovo",
    },
    {
      prefix: "KW",
      label: "Kuwait",
    },
    {
      prefix: "KG",
      label: "Kyrgyzstan",
    },
    {
      prefix: "LA",
      label: "Laos",
    },
    {
      prefix: "LV",
      label: "Latvia",
    },
    {
      prefix: "LB",
      label: "Lebanon",
    },
    {
      prefix: "LS",
      label: "Lesotho",
    },
    {
      prefix: "LR",
      label: "Liberia",
    },
    {
      prefix: "LY",
      label: "Libya",
    },
    {
      prefix: "LI",
      label: "Liechtenstein",
    },
    {
      prefix: "LT",
      label: "Lithuania",
    },
    {
      prefix: "LU",
      label: "Luxembourg",
    },
    {
      prefix: "MO",
      label: "Macao SAR China",
    },
    {
      prefix: "MG",
      label: "Madagascar",
    },
    {
      prefix: "MW",
      label: "Malawi",
    },
    {
      prefix: "MY",
      label: "Malaysia",
    },
    {
      prefix: "MV",
      label: "Maldives",
    },
    {
      prefix: "ML",
      label: "Mali",
    },
    {
      prefix: "MT",
      label: "Malta",
    },
    {
      prefix: "MQ",
      label: "Martinique",
    },
    {
      prefix: "MR",
      label: "Mauritania",
    },
    {
      prefix: "MU",
      label: "Mauritius",
    },
    {
      prefix: "YT",
      label: "Mayotte",
    },
    {
      prefix: "MX",
      label: "Mexico",
    },
    {
      prefix: "MD",
      label: "Moldova",
    },
    {
      prefix: "MC",
      label: "Monaco",
    },
    {
      prefix: "MN",
      label: "Mongolia",
    },
    {
      prefix: "ME",
      label: "Montenegro",
    },
    {
      prefix: "MS",
      label: "Montserrat",
    },
    {
      prefix: "MA",
      label: "Morocco",
    },
    {
      prefix: "MZ",
      label: "Mozambique",
    },
    {
      prefix: "MM",
      label: "Myanmar (Burma)",
    },
    {
      prefix: "NA",
      label: "Namibia",
    },
    {
      prefix: "NR",
      label: "Nauru",
    },
    {
      prefix: "NP",
      label: "Nepal",
    },
    {
      prefix: "NL",
      label: "Netherlands",
    },
    {
      prefix: "NC",
      label: "New Caledonia",
    },
    {
      prefix: "NZ",
      label: "New Zealand",
    },
    {
      prefix: "NI",
      label: "Nicaragua",
    },
    {
      prefix: "NE",
      label: "Niger",
    },
    {
      prefix: "NG",
      label: "Nigeria",
    },
    {
      prefix: "NU",
      label: "Niue",
    },
    {
      prefix: "MK",
      label: "North Macedonia",
    },
    {
      prefix: "NO",
      label: "Norway",
    },
    {
      prefix: "OM",
      label: "Oman",
    },
    {
      prefix: "PK",
      label: "Pakistan",
    },
    {
      prefix: "PS",
      label: "Palestinian Territories",
    },
    {
      prefix: "PA",
      label: "Panama",
    },
    {
      prefix: "PG",
      label: "Papua New Guinea",
    },
    {
      prefix: "PY",
      label: "Paraguay",
    },
    {
      prefix: "PE",
      label: "Peru",
    },
    {
      prefix: "PH",
      label: "Philippines",
    },
    {
      prefix: "PN",
      label: "Pitcairn Islands",
    },
    {
      prefix: "PL",
      label: "Poland",
    },
    {
      prefix: "PT",
      label: "Portugal",
    },
    {
      prefix: "PR",
      label: "Puerto Rico",
    },
    {
      prefix: "QA",
      label: "Qatar",
    },
    {
      prefix: "RE",
      label: "Réunion",
    },
    {
      prefix: "RO",
      label: "Romania",
    },
    {
      prefix: "RU",
      label: "Russia",
    },
    {
      prefix: "RW",
      label: "Rwanda",
    },
    {
      prefix: "WS",
      label: "Samoa",
    },
    {
      prefix: "SM",
      label: "San Marino",
    },
    {
      prefix: "ST",
      label: "São Tomé & Príncipe",
    },
    {
      prefix: "SA",
      label: "Saudi Arabia",
    },
    {
      prefix: "SN",
      label: "Senegal",
    },
    {
      prefix: "RS",
      label: "Serbia",
    },
    {
      prefix: "SC",
      label: "Seychelles",
    },
    {
      prefix: "SL",
      label: "Sierra Leone",
    },
    {
      prefix: "SG",
      label: "Singapore",
    },
    {
      prefix: "SX",
      label: "Sint Maarten",
    },
    {
      prefix: "SK",
      label: "Slovakia",
    },
    {
      prefix: "SI",
      label: "Slovenia",
    },
    {
      prefix: "SB",
      label: "Solomon Islands",
    },
    {
      prefix: "SO",
      label: "Somalia",
    },
    {
      prefix: "ZA",
      label: "South Africa",
    },
    {
      prefix: "GS",
      label: "South Georgia & South Sandwich Islands",
    },
    {
      prefix: "KR",
      label: "South Korea",
    },
    {
      prefix: "SS",
      label: "South Sudan",
    },
    {
      prefix: "ES",
      label: "Spain",
    },
    {
      prefix: "LK",
      label: "Sri Lanka",
    },
    {
      prefix: "BL",
      label: "St. Barthélemy",
    },
    {
      prefix: "SH",
      label: "St. Helena",
    },
    {
      prefix: "KN",
      label: "St. Kitts & Nevis",
    },
    {
      prefix: "LC",
      label: "St. Lucia",
    },
    {
      prefix: "MF",
      label: "St. Martin",
    },
    {
      prefix: "PM",
      label: "St. Pierre & Miquelon",
    },
    {
      prefix: "VC",
      label: "St. Vincent & Grenadines",
    },
    {
      prefix: "SR",
      label: "Suriname",
    },
    {
      prefix: "SJ",
      label: "Svalbard & Jan Mayen",
    },
    {
      prefix: "SE",
      label: "Sweden",
    },
    {
      prefix: "CH",
      label: "Switzerland",
    },
    {
      prefix: "TW",
      label: "Taiwan",
    },
    {
      prefix: "TJ",
      label: "Tajikistan",
    },
    {
      prefix: "TZ",
      label: "Tanzania",
    },
    {
      prefix: "TH",
      label: "Thailand",
    },
    {
      prefix: "TL",
      label: "Timor-Leste",
    },
    {
      prefix: "TG",
      label: "Togo",
    },
    {
      prefix: "TK",
      label: "Tokelau",
    },
    {
      prefix: "TO",
      label: "Tonga",
    },
    {
      prefix: "TT",
      label: "Trinidad & Tobago",
    },
    {
      prefix: "TA",
      label: "Tristan da Cunha",
    },
    {
      prefix: "TN",
      label: "Tunisia",
    },
    {
      prefix: "TR",
      label: "Turkey",
    },
    {
      prefix: "TM",
      label: "Turkmenistan",
    },
    {
      prefix: "TC",
      label: "Turks & Caicos Islands",
    },
    {
      prefix: "TV",
      label: "Tuvalu",
    },
    {
      prefix: "UG",
      label: "Uganda",
    },
    {
      prefix: "UA",
      label: "Ukraine",
    },
    {
      prefix: "AE",
      label: "United Arab Emirates",
    },
    {
      prefix: "UK",
      label: "United Kingdom",
    },
    {
      prefix: "US",
      label: "United States",
    },
    {
      prefix: "UY",
      label: "Uruguay",
    },
    {
      prefix: "UZ",
      label: "Uzbekistan",
    },
    {
      prefix: "VU",
      label: "Vanuatu",
    },
    {
      prefix: "VA",
      label: "Vatican City",
    },
    {
      prefix: "VE",
      label: "Venezuela",
    },
    {
      prefix: "VN",
      label: "Vietnam",
    },
    {
      prefix: "WF",
      label: "Wallis & Futuna",
    },
    {
      prefix: "EH",
      label: "Western Sahara",
    },
    {
      prefix: "YE",
      label: "Yemen",
    },
    {
      prefix: "ZM",
      label: "Zambia",
    },
    {
      prefix: "ZW",
      label: "Zimbabwe",
    },
  ],
};
function SignUpUserBox({ title, subtitle }) {
  const navigate = useHistory();
  const [userValue, setUserValue] = React.useState({});
  const [ComValue, setComValue] = React.useState({});

  

    const SignUpUserSchema = Yup.object().shape({
      email: Yup.string()
        .email("Email must be a valid email address")
        .required("Email is required"),
        password: Yup.string()
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
        confirmPassword: Yup
        .string() 
        .required('Confirm password is required')
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      username: Yup.string().required("Username is required"),
      // country: Yup.string().min(6, "Too Short!").required("Country is required"),
  
      // password: Yup.string().required('Password is required'),
    });
    const formikUser = useFormik({
      initialValues: {
        email: "",
        password: "",
        username: "",
        confirmPassword : '' ,
        // country: "",
        phone: "",
  
        // remember: true,
      },
      validationSchema: SignUpUserSchema,
      onSubmit: () => {
        console.log(formikUser.values)
        // postSignUpCompany();
        postSignUpUser()
      },
    });
  
    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formikUser;
  
  const getAllform = (e) => {
    let obj = userValue;
    obj[e.target.name] = e.target.value;
    console.log(obj);
    setUserValue(obj);
  };
 
  const getAllselectform = (e) => {
    console.log(e);
    let obj = userValue;
    obj["country"] = e.value;
    console.log(obj);
    setUserValue(obj);
  };


  const postSignUpUser = () => {
    fetch(`${url}/user/userSignupForm`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        username: formikUser.values.username,
        email: formikUser.values.email,
        password: formikUser.values.password,
        country: userValue.country,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("UserSignUp ----->>>", response);
        if (response.message === "Success") {
          navigate.push("/login");
          // postLoginIn(Data.user.uid)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <>
     
              <div className="billing-content">
                <div className="contact-form-action">
                  {/* <form> */}

                  <div className="">
                    <div className="row">
                    <SignInOptions check="signUpUser" />
</div>
                    <div className="col-lg-12">
                      <div className="account-assist mt-4 mb-4 text-center">
                        <p className="account__desc">or</p>
                      </div>
                    </div>
                    <FormikProvider value={formikUser}>
                    <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <div className="col-lg-12">
                      <div className="input-box">
                        <label className="label-text">Username</label>
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
                                {...getFieldProps("username")}
                                error={Boolean(
                                  touched.username && errors.username
                                )}
                                helperText={touched.username && errors.username}
                              />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="input-box">
                        <label className="label-text">Email</label>
                        <div className="form-group">
                        
                          <TextField
                                fullWidth
                                autoComplete="email"
                                type="text"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <FaRegEnvelope />
                                    </InputAdornment>
                                  ),
                                }}
                                {...getFieldProps("email")}
                                error={Boolean(
                                  touched.email && errors.email
                                )}
                                helperText={touched.email && errors.email}
                              />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-box">
                        <label className="label-text">Password</label>
                        <div className="form-group">
                       
                          <TextField
                                fullWidth
                                autoComplete="email"
                                type="password"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <FiLock />
                                    </InputAdornment>
                                  ),
                                }}
                                {...getFieldProps("password")}
                                error={Boolean(
                                  touched.password && errors.password
                                )}
                                helperText={touched.password && errors.password}
                              />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                          <div className="input-box">
                            <label className="label-text">Confirm Password</label>
                            <div className="form-group">
                              <TextField
                                fullWidth
                                autoComplete="email"
                                type="password"
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <FiLock />
                                    </InputAdornment>
                                  ),
                                }}
                                {...getFieldProps("confirmPassword")}
                                error={Boolean(
                                  touched.confirmPassword && errors.confirmPassword
                                )}
                                helperText={touched.confirmPassword && errors.confirmPassword}
                              />
                            </div>
                          </div>
                        </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="main-search-input-item select">
                          <label style={{ color: "black" }}>Country</label>

                          <Select
                            onChange={(e) => getAllselectform(e)}
                            placeholder="Select a Location"
                            name="country"
                            options={state.countries}
                          />
                        </div>
                      </div>
                    </div>
                    
              
                    <div className="col-lg-12">
                      <div className="btn-box margin-top-20px margin-bottom-20px">
                        <button
                        //   onClick={() => postSignUpUser()}
                          className="theme-btn border-0"
                        >
                          Register account
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <p className="font-weight-medium">
                        Already have an account?{" "}
                        <Link to="/login" className="color-text">
                          Login
                        </Link>
                      </p>
                    </div>
                    </Form>
                    </FormikProvider>
                  </div>
                  {/* </form> */}
                </div>
              </div>
         
    </>
  );
}

export default SignUpUserBox;
