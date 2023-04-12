import React from "react";
import { FiSearch } from "react-icons/fi";
import SelectCountry from "../../common/SelectCountry";
import Select, { components } from "react-select";
import { FcSalesPerformance } from "react-icons/fc";
import { FaRegDotCircle } from "react-icons/fa";
import { FaRegFlushed } from "react-icons/fa";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from "@mui/material/Chip";
import ButtonGroupCheckbox from "../../common/buttonCheckboxes";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
const { Option } = components;
const CustomSelectOption = (props) => (
  <Option {...props}>
    {/* <i className={`icon icon-${props.data.icon}`} /> */}
    {props.data.icon}
    {props.data.label}
  </Option>
);

const CustomSelectValue = (props) => (
  <div>
    {/* <i className={`icon icon-${props.data.icon}`} /> */}
    {props.data.icon}
    {props.data.label}
  </div>
);

const options = [
  { value: "item1", label: "Item 1", icon: <FaRegDotCircle /> },
  { value: "item2", label: "Item 2", icon: <FaRegFlushed /> },
];

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
export default function BannerOneSearchInput() {
  const options = [
    { value: "chocolate", label: "Villas" , icon: <FcSalesPerformance />},
    { value: "strawberry", label: "Terraced house" , icon: <FcSalesPerformance />},
    { value: "vanilla", label: "Apartments", icon: <FcSalesPerformance /> },
    { value: "sd", label: "Farms/Forest" , icon: <FcSalesPerformance />},

    { value: "vaassanilla", label: "Leisure accommodation", icon: <FcSalesPerformance /> },
    { value: "sas", label: "plots" , icon: <FcSalesPerformance />},
    { value: "A", label: "Others" , icon: <FcSalesPerformance />},
 
  ];

  const [selected, setSelected] = React.useState([]);
  return (
    <>
      <div
        className="main-search-input"
        style={{ display: "block", borderRadius: "20px", padding: "40px 40px" }}
      >
        <div className="row mb-4" style={{ justifyContent: "start" }}>
          {/* <div className="main-search-input-item location"> */}
          <Button
            variant="contained"
            className="mb-2"
            startIcon={<FcSalesPerformance />}
          >
            For sales
          </Button>
          {/* <h3 style={{color:'black',fontWeight:'600'}}><b>For Sales</b></h3> */}
          {/* </div> */}
        </div>
        {/* <h3>For Sale</h3> */}
        <div className="row mb-4">
          <div className="main-search-input-item category">
            {/* <label style={{color:'black',fontWeight:'600'}}>City</label> */}

            <Select
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              placeholder="Select city"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "grey" : "green",
                }),
              }}
              options={state.countries}
            />
          </div>

          {/* */}

          <div className="main-search-input-item location">
            {/* <label style={{color:'black',fontWeight:'600'}}>Expand Area</label> */}
            <Select
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              placeholder="Expand Area with"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "grey" : "green",
                }),
              }}
              name="colors"
              options={[
                { value: "chocolate", label: "+ 20km" },
                { value: "strawberry", label: "+ 30km" },
                { value: "vanilla", label: "+ 40km" },
                { value: "vaassanilla", label: "+ 50km" },
                { value: "sas", label: "+ 60km" },
                { value: "sd", label: "+ 70km" },
                { value: "A", label: "+ 80km" },
              ]}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          {/* <div className="main-search-input-btn">
                    <button className="button theme-btn" type="submit">Search</button>
                </div> */}
        </div>
        <div className="row mt-2 mb-4">
        <Button
        size="large"
        className='mr-2 mb-2'
          // key={option.value}
          variant={selected === []? 'contained' : 'outlined'}
          color={selected ? 'primary' : 'default'}
          onClick={() =>  setSelected([])}
          startIcon={<FcSalesPerformance />}
        >
        All
        </Button>
        <ButtonGroupCheckbox
          options={options}
          selected={selected}
          onChange={(value) =>{
            setSelected(
              selected.includes(value)
                ? selected.filter((v) => v !== value)
                : [...selected, value]
            );
            console.log(selected.includes(value)
            ? selected.filter((v) => v !== value)
            : [...selected, value])
            
          }
          }
        />
        </div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> ------------------------------------</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="row mt-2 mb-4 ml-2 mr-2">
          <div className="main-search-input-item category">
            {/* <label style={{color:'black',fontWeight:'600',fontWeight:600}}>Types</label> */}

            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "grey" : "green",
                }),
              }}
              isMulti
              placeholder="Select Types"
              options={[
                { value: "chocolate", label: "Villas" },
                { value: "strawberry", label: "Terraced house" },
                { value: "vanilla", label: "Apartments" },
                { value: "sd", label: "Farms/Forest" },

                { value: "vaassanilla", label: "Leisure accommodation" },
                { value: "sas", label: "plots" },
                { value: "sd", label: "Farms/Forest" },
                { value: "A", label: "Others" },
              ]}
            />
          </div>
          <div className="main-search-input-item location">
            {/* <label style={{color:'black',fontWeight:'600'}}>Minimum Number of rooms</label> */}

            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "grey" : "green",
                }),
              }}
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              placeholder="Minimum number of rooms"
              name="colors"
              options={[
                { value: "chocolate", label: "at least 1 room" },
                { value: "strawberry", label: "at least 2 room" },
                { value: "vanilla", label: "at least 3 room" },
                { value: "vaassanilla", label: "at least 4 room" },
                { value: "sas", label: "at least 5 room" },
                { value: "sd", label: "at least  6 room" },
                { value: "A", label: "at least 7 room" },
              ]}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          {/* <div className="main-search-input-btn">
                    <button className="button theme-btn" type="submit">Search</button>
                </div> */}
        </div>
        <div className="row mt-2 mb-4 ml-2 mr-2">
          <div className="main-search-input-item select">
            {/* <label style={{color:'black',fontWeight:'600'}}>Living Area</label> */}

            <Select
              placeholder="Living Area"
              options={[
                { value: "chocolate", label: "at least 20m" },
                { value: "strawberry", label: "at least 30m" },
                { value: "vanilla", label: "at least 40m" },
                { value: "vaassanilla", label: "at least 50m" },
                { value: "sas", label: "at least 60m" },
                { value: "sd", label: "at least 70m" },
                { value: "A", label: "at least 80m" },
              ]}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "grey" : "green",
                }),
              }}
            />
          </div>
          <div className="main-search-input-item select">
            {/* <label style={{color:'black',fontWeight:'600'}}>Highest price</label> */}

            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "grey" : "green",
                }),
              }}
              placeholder="Highest Price"
              options={[
                { value: "chocolate", label: "1 million" },
                { value: "strawberry", label: "2 million" },
                { value: "vanilla", label: "3 million" },
                { value: "vaassanilla", label: "4 million" },
                { value: "sas", label: "5 million" },
                { value: "sd", label: "6 million" },
                { value: "A", label: "7 million" },
              ]}
            />
          </div>
          <div className="main-search-input-item location">
            {/* <label style={{color:'black',fontWeight:'600'}}>New Production</label> */}

            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "grey" : "green",
                }),
              }}
              // defaultValue={[colourOptions[2], colourOptions[3]]}
              placeholder="New Production"
              name="colors"
              options={[
                { value: "chocolate", label: "Show only new production" },
                { value: "strawberry", label: "Show new production" },
                { value: "strawberry", label: "Hide new production" },
              ]}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>

          {/* <div className="main-search-input-btn">
                    <button className="button theme-btn" type="submit">Search</button>
                </div> */}
        </div>
        <div className="row mt-2 mb-4 ml-2 mr-2">
          <div className="main-search-input-item">
            {/* <label style={{color:'black',fontWeight:'600'}}>Keywords</label> */}

            <div className="contact-form-action">
              <form action="#">
                <div className="form-group mb-0">
                  <span className="form-icon">
                    <FiSearch />
                  </span>
                  <input
                    styles={{
                      height: "40px !important",
                      border: "1px solid green !important",
                    }}
                    className="form-control"
                    type="text"
                    placeholder="Keywords"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* <div className="main-search-input-btn">
                    <button className="button theme-btn" type="submit">Search</button>
                </div> */}
        </div>
        <div className="row mt-3" style={{ justifyContent: "center" }}>
          <div className="main-search-input-btn">
            <button
              style={{
                maxWidth: "330px",
                maxHeight: "30px",
                minWidth: "230px",
                minHeight: "50px",
              }}
              className="button theme-btn"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
        </AccordionDetails>
      </Accordion>
     
      </div>
    </>
  );
}
