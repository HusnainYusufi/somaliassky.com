import React from "react";
import {
  RiBuilding4Line,
  RiHotelBedLine,
  RiPlaneLine,
  RiReplyLine,
} from "react-icons/ri";
import {
  GiChickenOven,
  GiPineTree,
  GiPositionMarker,
  GiWineGlass,
} from "react-icons/gi";
import {
  BsBookmark,
  BsBriefcase,
  BsCheckCircle,
  BsEye,
  BsGear,
  BsHouseDoor,
  BsListCheck,
  BsMap,
  BsMusicNoteBeamed,
  BsPencil,
} from "react-icons/bs";
import {
  MdClose,
  MdFitnessCenter,
  MdStar,
  MdStarBorder,
  MdStarHalf,
} from "react-icons/md";
import bannerbg1 from "../assets/images/hero-bg.jpg";
import img1 from "../assets/images/img1.jpg"; // 263*175
import img2 from "../assets/images/img7.jpg"; // 362*242
import authorimg from "../assets/images/small-team1.jpg"; // 67*60
import symble1 from "../assets/images/symble1.png";
import symble2 from "../assets/images/symble2.png";
import symble3 from "../assets/images/symble3.png";
import symble4 from "../assets/images/symble4.png";
import { TiArrowUnsorted, TiBrush, TiPlane } from "react-icons/ti";
import {
  IoIosCheckmarkCircle,
  IoIosFitness,
  IoIosRocket,
  IoMdCut,
  IoMdFitness,
  IoMdMusicalNotes,
  IoMdPaperPlane,
  IoMdStar,
  IoMdStarHalf,
} from "react-icons/io";
import {
  FiBookOpen,
  FiCheck,
  FiCheckCircle,
  FiExternalLink,
  FiFilter,
  FiHeadphones,
  FiHeart,
  FiMail,
  FiMap,
  FiMusic,
  FiPlus,
  FiShoppingCart,
  FiThumbsUp,
  FiUsers,
} from "react-icons/fi";
import {
  AiOutlineCar,
  AiOutlineEllipsis,
  AiOutlineHome,
  AiOutlineQuestionCircle,
  AiOutlineUser,
} from "react-icons/ai";
import team1 from "../assets/images/team2.jpg"; // 111*100
import team2 from "../assets/images/testi-img1.jpg"; // 106*95
import team3 from "../assets/images/testi-img2.jpg"; // 95*85
import team4 from "../assets/images/testi-img3.jpg"; // 83*75
import team6 from "../assets/images/testi-img4.jpg"; // 78*70
import { GoFile } from "react-icons/go";
import cta2mobileimg from "../assets/images/mobile.png";
import logo1 from "../assets/images/client-logo.png";
import darklogo from "../assets/images/logo2.png";
import {
  FaBehance,
  FaCogs,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMinus,
  FaPlus,
  FaQuoteRight,
  FaRegComment,
  FaRegEdit,
  FaRegEnvelope,
  FaRegHeart,
  FaRegHospital,
  FaRegMap,
  FaRegMoneyBillAlt,
  FaRegTrashAlt,
  FaSearchDollar,
  FaSearchPlus,
  FaSort,
  FaStethoscope,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../assets/images/Logo.jpeg";
import destinationimg1 from "../assets/images/img5.jpg";
import flag1 from "../assets/images/flag14.png";
import flag2 from "../assets/images/flag1.jpg";
import flag3 from "../assets/images/somal.png";
import flag4 from "../assets/images/flag13.jpg";
import flag5 from "../assets/images/flag18.jpg";
import destinationimg6 from "../assets/images/img7.jpg";
import flag6 from "../assets/images/flag3.jpg";
import flag7 from "../assets/images/flag7.jpg";
import flag8 from "../assets/images/flag5.png";
import flag9 from "../assets/images/flag19.png";
import hiw3videoimg from "../assets/images/video-img2.jpg";
import { FcLineChart } from "react-icons/fc";
import dreamimg from "../assets/images/img6.jpg"; // 263*165
import hiw5videoimg from "../assets/images/video-img3.jpg";
import slicevideo from "../assets/video/slice-video.m4v";
import flag10 from "../assets/images/flag10.png";
import flag11 from "../assets/images/flag11.png";
import flag12 from "../assets/images/flag12.jpg";
import flag13 from "../assets/images/flag13.jpg";
import flag14 from "../assets/images/flag14.png";
import flag15 from "../assets/images/flag15.jpg";
import flag16 from "../assets/images/flag16.jpg";
import flag17 from "../assets/images/flag17.jpg";
import flag18 from "../assets/images/flag18.jpg";
import flag19 from "../assets/images/flag19.png";
import flag20 from "../assets/images/flag20.png";
import listingdetailsvideoimg from "../assets/images/img4.jpg";
import similarimg from "../assets/images/img8.jpg"; // 90*90
import breadcrumbimg from "../assets/images/bread-bg.jpg"; //1920*838
import userimage from "../assets/images/team1.jpg"; // 368*331
import ABDimage from "../assets/images/abdullahj.jpg"; // 368*331
import imgboximg from "../assets/images/img10.jpg"; // 570*345
import about2img1 from "../assets/images/1.png"; //389*259
import about2img2 from "../assets/images/2.png"
import about2img3 from "../assets/images/About-us.jpg"
import about2img4 from "../assets/images/4.jpg"
import mainimage from "../assets/images/video-img.jpg"; // 750*500

const sectiondata = {

  
    countries: [
        {
            value: 'select..',
            label: 'Select a Location'
        },
        {
            value: 'AF',
            label: 'Afghanistan'
        },
        {
            value: 'AX',
            label: 'Åland Islands'
        },
        {
            value: 'AL',
            label: 'Albania'
        },
        {
            value: 'DZ',
            label: 'Algeria'
        },
        {
            prefix: 'AD',
            label: 'Andorra'
        },
        {
            prefix: 'AO',
            label: 'Angola'
        },
        {
            prefix: 'AI',
            label: 'Anguilla'
        },
        {
            prefix: 'AQ',
            label: 'Antarctica'
        },
        {
            prefix: 'AG',
            label: 'Antigua & Barbuda'
        },
        {
            prefix: 'AR',
            label: 'Argentina'
        },
        {
            prefix: 'AM',
            label: 'Armenia'
        },
        {
            prefix: 'AW',
            label: 'Aruba'
        },
        {
            prefix: 'AC',
            label: 'Ascension Island'
        },
        {
            prefix: 'AU',
            label: 'Australia'
        },
        {
            prefix: 'AT',
            label: 'Austria'
        },
        {
            prefix: 'AZ',
            label: 'Azerbaijan'
        },
        {
            prefix: 'BS',
            label: 'Bahamas'
        },
        {
            prefix: 'BH',
            label: 'Bahrain'
        },
        {
            prefix: 'BD',
            label: 'Bangladesh'
        },
        {
            prefix: 'BB',
            label: 'Barbados'
        },
        {
            prefix: 'BY',
            label: 'Belarus'
        },
        {
            prefix: 'BE',
            label: 'Belgium'
        },
        {
            prefix: 'BZ',
            label: 'Belize'
        },
        {
            prefix: 'BJ',
            label: 'Benin'
        },
        {
            prefix: 'BM',
            label: 'Bermuda'
        },
        {
            prefix: 'BT',
            label: 'Bhutan'
        },
        {
            prefix: 'BO',
            label: 'Bolivia'
        },
        {
            prefix: 'BA',
            label: 'Bosnia & Herzegovina'
        },
        {
            prefix: 'BW',
            label: 'Botswana'
        },
        {
            prefix: 'BV',
            label: 'Bouvet Island'
        },
        {
            prefix: 'BR',
            label: 'Brazil'
        },
        {
            prefix: 'IO',
            label: 'British Indian Ocean Territory'
        },
        {
            prefix: 'VG',
            label: 'British Virgin Islands'
        },
        {
            prefix: 'BN',
            label: 'Brunei'
        },
        {
            prefix: 'BG',
            label: 'Bulgaria'
        },
        {
            prefix: 'BF',
            label: 'Burkina Faso'
        },
        {
            prefix: 'BI',
            label: 'Burundi'
        },
        {
            prefix: 'KH',
            label: 'Cambodia'
        },
        {
            prefix: 'CH',
            label: 'Cameroon'
        },
        {
            prefix: 'CA',
            label: 'Canada'
        },
        {
            prefix: 'CV',
            label: 'Cape Verde'
        },
        {
            prefix: 'BQ',
            label: 'Caribbean Netherlands'
        },
        {
            prefix: 'KY',
            label: 'Cayman Islands'
        },
        {
            prefix: 'CF',
            label: 'Central African Republic'
        },
        {
            prefix: 'TD',
            label: 'Chad'
        },
        {
            prefix: 'CL',
            label: 'Chile'
        },
        {
            prefix: 'CN',
            label: 'China'
        },
        {
            prefix: 'CO',
            label: 'Colombia'
        },
        {
            prefix: 'KM',
            label: 'Comoros'
        },
        {
            prefix: 'CG',
            label: 'Congo - Brazzaville'
        },
        {
            prefix: 'CD',
            label: 'Congo - Kinshasa'
        },
        {
            prefix: 'CK',
            label: 'Cook Islands'
        },
        {
            prefix: 'CR',
            label: 'Costa Rica'
        },
        {
            prefix: 'CI',
            label: 'Côte d’Ivoire'
        },
        {
            prefix: 'HR',
            label: 'Croatia'
        },
        {
            prefix: 'CW',
            label: 'Curaçao'
        },
        {
            prefix: 'CY',
            label: 'Cyprus'
        },
        {
            prefix: 'CZ',
            label: 'Czechia'
        },
        {
            prefix: 'DK',
            label: 'Denmark'
        },
        {
            prefix: 'DJ',
            label: 'Djibouti'
        },
        {
            prefix: 'DM',
            label: 'Dominica'
        },
        {
            prefix: 'DO',
            label: 'Dominican Republic'
        },
        {
            prefix: 'EC',
            label: 'Ecuador'
        },
        {
            prefix: 'EG',
            label: 'Egypt'
        },
        {
            prefix: 'SV',
            label: 'El Salvador'
        },
        {
            prefix: 'GQ',
            label: 'Equatorial Guinea'
        },
        {
            prefix: 'ER',
            label: 'Eritrea'
        },
        {
            prefix: 'EE',
            label: 'Estonia'
        },
        {
            prefix: 'SZ',
            label: 'Eswatini'
        },
        {
            prefix: 'ET',
            label: 'Ethiopia'
        },
        {
            prefix: 'FK',
            label: 'Falkland Islands'
        },
        {
            prefix: 'FO',
            label: 'Faroe Islands'
        },
        {
            prefix: 'FJ',
            label: 'Fiji'
        },
        {
            prefix: 'FI',
            label: 'Finland'
        },
        {
            prefix: 'FR',
            label: 'France'
        },
        {
            prefix: 'GF',
            label: 'French Guiana'
        },
        {
            prefix: 'PF',
            label: 'French Polynesia'
        },
        {
            prefix: 'TF',
            label: 'French Southern Territories'
        },
        {
            prefix: 'GA',
            label: 'Gabon'
        },
        {
            prefix: 'GM',
            label: 'Gambia'
        },
        {
            prefix: 'GE',
            label: 'Georgia'
        },
        {
            prefix: 'DE',
            label: 'Germany'
        },
        {
            prefix: 'GH',
            label: 'Ghana'
        },
        {
            prefix: 'GI',
            label: 'Gibraltar'
        },
        {
            prefix: 'GR',
            label: 'Greece'
        },
        {
            prefix: 'GL',
            label: 'Greenland'
        },
        {
            prefix: 'GD',
            label: 'Grenada'
        },
        {
            prefix: 'GP',
            label: 'Guadeloupe'
        },
        {
            prefix: 'GU',
            label: 'Guam'
        },
        {
            prefix: 'GT',
            label: 'Guatemala'
        },
        {
            prefix: 'GG',
            label: 'Guernsey'
        },
        {
            prefix: 'GN',
            label: 'Guinea'
        },
        {
            prefix: 'GW',
            label: 'Guinea-Bissau'
        },
        {
            prefix: 'GY',
            label: 'Guyana'
        },
        {
            prefix: 'HT',
            label: 'Haiti'
        },
        {
            prefix: 'HN',
            label: 'Honduras'
        },
        {
            prefix: 'HK',
            label: 'Hong Kong SAR China'
        },
        {
            prefix: 'HU',
            label: 'Hungary'
        },
        {
            prefix: 'IS',
            label: 'Iceland'
        },
        {
            prefix: 'IN',
            label: 'India'
        },
        {
            prefix: 'ID',
            label: 'Indonesia'
        },
        {
            prefix: 'IR',
            label: 'Iran'
        },
        {
            prefix: 'IQ',
            label: 'Iraq'
        },
        {
            prefix: 'IE',
            label: 'Ireland'
        },
        {
            prefix: 'IM',
            label: 'Isle of Man'
        },
        {
            prefix: 'IL',
            label: 'Israel'
        },
        {
            prefix: 'IT',
            label: 'Italy'
        },
        {
            prefix: 'JM',
            label: 'Jamaica'
        },
        {
            prefix: 'JP',
            label: 'Japan'
        },
        {
            prefix: 'JE',
            label: 'Jersey'
        },
        {
            prefix: 'JO',
            label: 'Jordan'
        },
        {
            prefix: 'KZ',
            label: 'Kazakhstan'
        },
        {
            prefix: 'KE',
            label: 'Kenya'
        },
        {
            prefix: 'KI',
            label: 'Kiribati'
        },
        {
            prefix: 'XK',
            label: 'Kosovo'
        },
        {
            prefix: 'KW',
            label: 'Kuwait'
        },
        {
            prefix: 'KG',
            label: 'Kyrgyzstan'
        },
        {
            prefix: 'LA',
            label: 'Laos'
        },
        {
            prefix: 'LV',
            label: 'Latvia'
        },
        {
            prefix: 'LB',
            label: 'Lebanon'
        },
        {
            prefix: 'LS',
            label: 'Lesotho'
        },
        {
            prefix: 'LR',
            label: 'Liberia'
        },
        {
            prefix: 'LY',
            label: 'Libya'
        },
        {
            prefix: 'LI',
            label: 'Liechtenstein'
        },
        {
            prefix: 'LT',
            label: 'Lithuania'
        },
        {
            prefix: 'LU',
            label: 'Luxembourg'
        },
        {
            prefix: 'MO',
            label: 'Macao SAR China'
        },
        {
            prefix: 'MG',
            label: 'Madagascar'
        },
        {
            prefix: 'MW',
            label: 'Malawi'
        },
        {
            prefix: 'MY',
            label: 'Malaysia'
        },
        {
            prefix: 'MV',
            label: 'Maldives'
        },
        {
            prefix: 'ML',
            label: 'Mali'
        },
        {
            prefix: 'MT',
            label: 'Malta'
        },
        {
            prefix: 'MQ',
            label: 'Martinique'
        },
        {
            prefix: 'MR',
            label: 'Mauritania'
        },
        {
            prefix: 'MU',
            label: 'Mauritius'
        },
        {
            prefix: 'YT',
            label: 'Mayotte'
        },
        {
            prefix: 'MX',
            label: 'Mexico'
        },
        {
            prefix: 'MD',
            label: 'Moldova'
        },
        {
            prefix: 'MC',
            label: 'Monaco'
        },
        {
            prefix: 'MN',
            label: 'Mongolia'
        },
        {
            prefix: 'ME',
            label: 'Montenegro'
        },
        {
            prefix: 'MS',
            label: 'Montserrat'
        },
        {
            prefix: 'MA',
            label: 'Morocco'
        },
        {
            prefix: 'MZ',
            label: 'Mozambique'
        },
        {
            prefix: 'MM',
            label: 'Myanmar (Burma)'
        },
        {
            prefix: 'NA',
            label: 'Namibia'
        },
        {
            prefix: 'NR',
            label: 'Nauru'
        },
        {
            prefix: 'NP',
            label: 'Nepal'
        },
        {
            prefix: 'NL',
            label: 'Netherlands'
        },
        {
            prefix: 'NC',
            label: 'New Caledonia'
        },
        {
            prefix: 'NZ',
            label: 'New Zealand'
        },
        {
            prefix: 'NI',
            label: 'Nicaragua'
        },
        {
            prefix: 'NE',
            label: 'Niger'
        },
        {
            prefix: 'NG',
            label: 'Nigeria'
        },
        {
            prefix: 'NU',
            label: 'Niue'
        },
        {
            prefix: 'MK',
            label: 'North Macedonia'
        },
        {
            prefix: 'NO',
            label: 'Norway'
        },
        {
            prefix: 'OM',
            label: 'Oman'
        },
        {
            prefix: 'PK',
            label: 'Pakistan'
        },
        {
            prefix: 'PS',
            label: 'Palestinian Territories'
        },
        {
            prefix: 'PA',
            label: 'Panama'
        },
        {
            prefix: 'PG',
            label: 'Papua New Guinea'
        },
        {
            prefix: 'PY',
            label: 'Paraguay'
        },
        {
            prefix: 'PE',
            label: 'Peru'
        },
        {
            prefix: 'PH',
            label: 'Philippines'
        },
        {
            prefix: 'PN',
            label: 'Pitcairn Islands'
        },
        {
            prefix: 'PL',
            label: 'Poland'
        },
        {
            prefix: 'PT',
            label: 'Portugal'
        },
        {
            prefix: 'PR',
            label: 'Puerto Rico'
        },
        {
            prefix: 'QA',
            label: 'Qatar'
        },
        {
            prefix: 'RE',
            label: 'Réunion'
        },
        {
            prefix: 'RO',
            label: 'Romania'
        },
        {
            prefix: 'RU',
            label: 'Russia'
        },
        {
            prefix: 'RW',
            label: 'Rwanda'
        },
        {
            prefix: 'WS',
            label: 'Samoa'
        },
        {
            prefix: 'SM',
            label: 'San Marino'
        },
        {
            prefix: 'ST',
            label: 'São Tomé & Príncipe'
        },
        {
            prefix: 'SA',
            label: 'Saudi Arabia'
        },
        {
            prefix: 'SN',
            label: 'Senegal'
        },
        {
            prefix: 'RS',
            label: 'Serbia'
        },
        {
            prefix: 'SC',
            label: 'Seychelles'
        },
        {
            prefix: 'SL',
            label: 'Sierra Leone'
        },
        {
            prefix: 'SG',
            label: 'Singapore'
        },
        {
            prefix: 'SX',
            label: 'Sint Maarten'
        },
        {
            prefix: 'SK',
            label: 'Slovakia'
        },
        {
            prefix: 'SI',
            label: 'Slovenia'
        },
        {
            prefix: 'SB',
            label: 'Solomon Islands'
        },
        {
            prefix: 'SO',
            label: 'Somalia'
        },
        {
            prefix: 'ZA',
            label: 'South Africa'
        },
        {
            prefix: 'GS',
            label: 'South Georgia & South Sandwich Islands'
        },
        {
            prefix: 'KR',
            label: 'South Korea'
        },
        {
            prefix: 'SS',
            label: 'South Sudan'
        },
        {
            prefix: 'ES',
            label: 'Spain'
        },
        {
            prefix: 'LK',
            label: 'Sri Lanka'
        },
        {
            prefix: 'BL',
            label: 'St. Barthélemy'
        },
        {
            prefix: 'SH',
            label: 'St. Helena'
        },
        {
            prefix: 'KN',
            label: 'St. Kitts & Nevis'
        },
        {
            prefix: 'LC',
            label: 'St. Lucia'
        },
        {
            prefix: 'MF',
            label: 'St. Martin'
        },
        {
            prefix: 'PM',
            label: 'St. Pierre & Miquelon'
        },
        {
            prefix: 'VC',
            label: 'St. Vincent & Grenadines'
        },
        {
            prefix: 'SR',
            label: 'Suriname'
        },
        {
            prefix: 'SJ',
            label: 'Svalbard & Jan Mayen'
        },
        {
            prefix: 'SE',
            label: 'Sweden'
        },
        {
            prefix: 'CH',
            label: 'Switzerland'
        },
        {
            prefix: 'TW',
            label: 'Taiwan'
        },
        {
            prefix: 'TJ',
            label: 'Tajikistan'
        },
        {
            prefix: 'TZ',
            label: 'Tanzania'
        },
        {
            prefix: 'TH',
            label: 'Thailand'
        },
        {
            prefix: 'TL',
            label: 'Timor-Leste'
        },
        {
            prefix: 'TG',
            label: 'Togo'
        },
        {
            prefix: 'TK',
            label: 'Tokelau'
        },
        {
            prefix: 'TO',
            label: 'Tonga'
        },
        {
            prefix: 'TT',
            label: 'Trinidad & Tobago'
        },
        {
            prefix: 'TA',
            label: 'Tristan da Cunha'
        },
        {
            prefix: 'TN',
            label: 'Tunisia'
        },
        {
            prefix: 'TR',
            label: 'Turkey'
        },
        {
            prefix: 'TM',
            label: 'Turkmenistan'
        },
        {
            prefix: 'TC',
            label: 'Turks & Caicos Islands'
        },
        {
            prefix: 'TV',
            label: 'Tuvalu'
        },
        {
            prefix: 'UG',
            label: 'Uganda'
        },
        {
            prefix: 'UA',
            label: 'Ukraine'
        },
        {
            prefix: 'AE',
            label: 'United Arab Emirates'
        },
        {
            prefix: 'UK',
            label: 'United Kingdom'
        },
        {
            prefix: 'US',
            label: 'United States'
        },
        {
            prefix: 'UY',
            label: 'Uruguay'
        },
        {
            prefix: 'UZ',
            label: 'Uzbekistan'
        },
        {
            prefix: 'VU',
            label: 'Vanuatu'
        },
        {
            prefix: 'VA',
            label: 'Vatican City'
        },
        {
            prefix: 'VE',
            label: 'Venezuela'
        },
        {
            prefix: 'VN',
            label: 'Vietnam'
        },
        {
            prefix: 'WF',
            label: 'Wallis & Futuna'
        },
        {
            prefix: 'EH',
            label: 'Western Sahara'
        },
        {
            prefix: 'YE',
            label: 'Yemen'
        },
        {
            prefix: 'ZM',
            label: 'Zambia'
        },
        {
            prefix: 'ZW',
            label: 'Zimbabwe'
        },
    ]
,
  realState: [
    { name: "CountrySide" },
    { name: "Lake" },
    { name: "Amazing View" },
    { name: "National Park" },
    { name: "Tropical" },
    { name: "Private rooms" },
    { name: "A-Frames" },
    { name: "Design" },
    { name: "OMG!" },
  ],

  Somalia: [
    {
      value: 0,
      label: "Select a category",
    },
    {
      value: 1,
      label: "Mogadishu",
    },
    {
      value: 2,
      label: "Borama",
    },
    {
      value: 3,
      label: "Merca",
    },
    {
      value: 4,
      label: "Jamame",
    },
    {
      value: 5,
      label: "Baiboa",
    },
    {
      value: 6,
      label: "Burao",
    },
    {
      value: 7,
      label: "Afgooye",
    },
    {
      value: 8,
      label: "Galkayo",
    },
    {
      value: 9,
      label: "Las Anod",
    },
    {
      value: 10,
      label: "Jilib",
    },
  ],
  headermenu: [
    {
      title: "Home",
      path: "/",
      dropdown: [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "Gate of Somalia",
          path: "/index2",
        },
        {
          title: "Restaurant",
          path: "/index3",
        },
        {
          title: "Jobs",
          path: "/index4",
        },
        {
          title: "Real Estate",
          path: "/",
          dropdown: [
            {
              title: "Rent",
              path: "/index5",
            },
            {
              title: "Sale",
              path: "/index6",
            },
          ],
        },
      ],
    },

    {
      title: "categories",
      path: "/all-categories",
      dropdown: [
        // {
        //     title: 'all categories',
        //     path: '/all-categories'
        // },
        {
          title: "all locations",
          path: "/all-locations",
        },
        {
          title: "top places",
          path: "/top-place",
        },
      ],
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Pricing",
      path: "/pricing",
    },
    // {
    //     title: 'listings',
    //     path: '/listing-grid',
    //     dropdown: [
    //         {
    //             title: 'listing grid',
    //             path: '/listing-grid'
    //         },
    //         {
    //             title: 'map view',
    //             path: '/list-map-view'
    //         },
    //         {
    //             title: 'map view 2',
    //             path: '/list-map-view2'
    //         },
    //         {
    //             title: 'listing list',
    //             path: '/listing-list'
    //         },
    //         {
    //             title: 'left sidebar',
    //             path: '/list-left-sidebar'
    //         },
    //         {
    //             title: 'right sidebar',
    //             path: '/list-right-sidebar'
    //         },
    //         {
    //             title: 'listing details',
    //             path: '/listing-details'
    //         },
    //         {
    //             title: 'add listing',
    //             path: '/add-listing/new'
    //         }
    //     ]
    // },
    {
            title: 'Profile',
            path: '#',
            dropdown: [
                {
                    title: 'user profile',
                    path: '/user-profile'
                },
             
                {
                    title: 'dashboard',
                    path: '/dashboard'
                },
             
             
            ]
        },
    // {
    //     title: 'pages',
    //     path: '/user-profile',
    //     dropdown: [
    //         {
    //             title: 'user profile',
    //             path: '/user-profile'
    //         },
    //         {
    //             title: 'top authors',
    //             path: '/top-author'
    //         },
    //         {
    //             title: 'dashboard',
    //             path: '/dashboard'
    //         },
    //         {
    //             title: 'booking',
    //             path: '/booking'
    //         },
    //         {
    //             title: 'booking confirmation',
    //             path: '/booking-confirmation'
    //         },
    //         {
    //             title: 'invoice',
    //             path: '/invoice'
    //         },
    //         {
    //             title: 'pricing',
    //             path: '/pricing'
    //         },
    //         {
    //             title: 'about',
    //             path: '/about'
    //         },
    //         {
    //             title: 'faq',
    //             path: '/faq'
    //         },
    //         {
    //             title: 'contact',
    //             path: '/contact'
    //         },
    //         {
    //             title: '404 page',
    //             path: '/page-404'
    //         },
    //         {
    //             title: 'recover pass',
    //             path: '/recover'
    //         }
    //     ]
    // },
    {
      title: "blog",
      path: "/blog-full-width",
      dropdown: [
        {
          title: "All blogs",
          path: "/blog-grid",
        },
        // {
        //     title: 'left sidebar',
        //     path: '/blog-left-sidebar'
        // },
        // {
        //     title: 'right sidebar',
        //     path: '/blog-right-sidebar'
        // },
        // {
        //     title: 'blog detail',
        //     path: '/blog-single'
        // }
      ],
    },
    
  ],
  herobanners: {
    banner1: {
      title: "What are you interested in ",
      titleHighlight: [
        {
          active: true,
          text: "Hotels",
        },
        {
          active: false,
          text: "Restaurants",
        },
        {
          active: false,
          text: "Shops",
        },
        {
          active: false,
          text: "Salons",
        },
        {
          active: false,
          text: "Apartments",
        },
        {
          active: false,
          text: "Travels",
        },
        {
          active: false,
          text: "Business",
        },
        {
          active: false,
          text: "Fitness",
        },
      ],
      content:
        "Discover the best places to stay, eat, shop & visit the city nearest to you.",
      bgimage: bannerbg1,
    },
    banner2: {
      title: "Find The Best Place in your city",
      content:
        "Dirto helps you find out whats happening in your city, Let's explore.",
      categories: [
        {
          path: "#",
          text: "apartments",
          icon: <RiBuilding4Line />,
        },
        {
          path: "#",
          text: "Restaurants",
          icon: <GiChickenOven />,
        },
        {
          path: "#",
          text: "travel",
          icon: <RiPlaneLine />,
        },
        {
          path: "#",
          text: "Events",
          icon: <BsMusicNoteBeamed />,
        },
        {
          path: "#",
          text: "Fitness",
          icon: <IoMdFitness />,
        },
        {
          path: "#",
          text: "Hotels",
          icon: <RiHotelBedLine />,
        },
      ],
      bgimage: bannerbg1,
    },
    banner3: {
      title: "What's Your Plan Today?",
      content:
        "All the top locations – from restaurants and clubs, to galleries, famous places and more...",
      bgimage: bannerbg1,
    },
    banner4: {
      sectitle: "Find The Best Places To Be",
      seccontent:
        "Discover the best places to stay, eat, shop & visit the city nearest to you.",
      videobgsrc: slicevideo,
    },
  },
  categories: {
    featuredcategories: {
      connector: "or",
      title: "Categories:",
      items: [
        {
          path: "#",
          title: "Vehicles",
          icon: <RiBuilding4Line />,
        },
        {
          path: "#",
          title: "Jobs",
          icon: <GiChickenOven />,
        },
        {
          path: "#",
          title: "Houses for Rent",
          icon: <RiPlaneLine />,
        },
        {
          path: "#",
          title: "Hotels",
          icon: <BsMusicNoteBeamed />,
        },
        {
          path: "#",
          title: "Restaurants",
          icon: <MdFitnessCenter />,
        },
        {
          path: "#",
          title: "Animals",
          icon: <RiHotelBedLine />,
        },
      ],
    },
    browsecategories: {
      sectitle: "  Categories",
      seccontent:
        "Somalia sky is the one stop for all the businesses ",
      items: [
        {
          id: 1,
          icon: <GiChickenOven />,
          title: "Fast food",
          listingsNum: 42,
          cardLink: "#",
        },
        {
          id: 2,
          icon: <RiHotelBedLine />,
          title: "continental ",
          listingsNum: 22,
          cardLink: "#",
        },
        {
          id: 3,
          icon: <FiShoppingCart />,
          title: "chinese",
          listingsNum: 7,
          cardLink: "#",
        },
        {
          id: 4,
          icon: <IoMdCut />,
          title: "italian ",
          listingsNum: 31,
          cardLink: "#",
        },
        {
          id: 5,
          icon: <FaRegHospital />,
          title: "arabic ",
          listingsNum: 33,
          cardLink: "#",
        },
        {
          id: 6,
          icon: <BsGear />,
          title: "somalian",
          listingsNum: 33,
          cardLink: "#",
        },
        {
          id: 7,
          icon: <TiBrush />,
          title: "ethiopian",
          listingsNum: 31,
          cardLink: "#",
        },
        {
          id: 8,
          icon: <BsHouseDoor />,
          title: "Real State",
          listingsNum: 36,
          cardLink: "#",
        },
        {
          id: 9,
          icon: <FaStethoscope />,
          title: "Health",
          listingsNum: 22,
          cardLink: "#",
        },
        {
          id: 10,
          icon: <FaSearchDollar />,
          title: "Jobs",
          listingsNum: 40,
          cardLink: "#",
        },
        {
          id: 11,
          icon: <TiPlane />,
          title: "Travels",
          listingsNum: 13,
          cardLink: "#",
        },
        {
          id: 12,
          icon: <FiMusic />,
          title: "Events",
          listingsNum: 10,
          cardLink: "#",
        },
      ],
    },
    browsecategories2: {
      sectitle: "Browse by Categories",
      seccontent:
        "Somalia sky is the one stop for all the businesses ",
      categories: [
        {
          img: img1,
          icon: <GiChickenOven />,
          title: "Restaurants",
          cardLink: "#",
        },
        {
          img: img1,
          icon: <TiPlane />,
          title: "Travels",
          cardLink: "#",
        },
        {
          img: img1,
          icon: <RiHotelBedLine />,
          title: "Hotels",
          cardLink: "#",
        },
      ],
    },
    browsecategories4: {
      sectitle: "Browse by Categories",
      seccontent:
        "Somalia sky is the one stop for all the businesses ",
      categories: [
        {
          img: img1,
          icon: <GiChickenOven />,
          title: "Restaurants",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <TiPlane />,
          title: "Travels",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <RiHotelBedLine />,
          title: "Hotels",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <GiChickenOven />,
          title: "Restaurants",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <TiPlane />,
          title: "Travels",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <RiHotelBedLine />,
          title: "Hotels",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <GiChickenOven />,
          title: "Restaurants",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <TiPlane />,
          title: "Travels",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <RiHotelBedLine />,
          title: "Hotels",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <GiChickenOven />,
          title: "Restaurants",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <TiPlane />,
          title: "Travels",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <RiHotelBedLine />,
          title: "Hotels",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <GiChickenOven />,
          title: "Restaurants",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <TiPlane />,
          title: "Travels",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <RiHotelBedLine />,
          title: "Hotels",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <GiChickenOven />,
          title: "Restaurants",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <TiPlane />,
          title: "Travels",
          cardLink: "/list-map-view2",
        },
        {
          img: img1,
          icon: <RiHotelBedLine />,
          title: "Hotels",
          cardLink: "/list-map-view2",
        },
      ],
    },
    browsecategories3: {
      sectitle: "Categories",
      seccontent:
        "Somalia sky is the one stop for all the businesses ",
      categories: [
        {
          img: img1,
          icon: <TiPlane />,
          title: "Freelancer",
          cardLink: "#",
        },
        {
          img: img1,
          icon: <RiHotelBedLine />,
          title: "Seeking work Cv",
          cardLink: "#",
        },
        {
          img: img1,
          icon: <RiHotelBedLine />,
          title: "Search For Job",
          cardLink: "#",
        },
      ],
    },
    popularcategories: {
      title: "Popular:",
      lists: [
        {
          url: "#",
          title: "Travel",
        },
        {
          url: "#",
          title: "Food",
        },
        {
          url: "#",
          title: "Business",
        },
        {
          url: "#",
          title: "Salon",
        },
        {
          url: "#",
          title: "Cleaning",
        },
      ],
    },
  },
  popularcategories: {
    sectitle: "Categories",
    seccontent:
      "Discover the best that you want, Vehicles, Mobile Phones & Tablets, Real Estate, Beauty Health & Hair, and Electronics, in your city.",
    categories: [
      {
        icon: <GiChickenOven />,
        title: "Restaurants",
        stitle: "12 Listings",
        url: "/list-right-sidebar",
        img: img1,
      },
      {
        icon: <TiPlane />,
        title: "Travels",
        stitle: "22 Listings",
        url: "/list-right-sidebar",
        img: img1,
      },
      {
        icon: <RiHotelBedLine />,
        title: "Hotels",
        stitle: "33 Listings",
        url: "/list-right-sidebar",
        img: img1,
      },
      {
        icon: <IoMdMusicalNotes />,
        title: "Events",
        stitle: "44 Listings",
        url: "/list-right-sidebar",
        img: img1,
      },
      {
        icon: <FiShoppingCart />,
        title: "Shops",
        stitle: "48 Listings",
        url: "/list-right-sidebar",
        img: img1,
      },
      {
        icon: <IoIosFitness />,
        title: "Fitness",
        stitle: "50 Listings",
        url: "/list-right-sidebar",
        img: img1,
      },
      {
        icon: <GiWineGlass />,
        title: "Food & Drink",
        stitle: "14 Listings",
        url: "/list-right-sidebar",
        img: img1,
      },
      {
        icon: <TiBrush />,
        title: "Art & Design",
        stitle: "20 Listings",
        url: "/list-right-sidebar",
        img: img1,
      },
    ],
    morecats: [
      {
        icon: <TiBrush />,
        title: "outdo0rs",
        stitle: "20 Listings",
        url: "#",
        img: img1,
      },
      {
        icon: <TiBrush />,
        title: "nightlife",
        stitle: "20 Listings",
        url: "#",
        img: img1,
      },
      {
        icon: <FaRegHospital />,
        title: "hospitals",
        stitle: "20 Listings",
        url: "#",
        img: img1,
      },
      {
        icon: <GiPineTree />,
        title: "adventure",
        stitle: "23 Listings",
        url: "#",
        img: img1,
      },
      {
        icon: <FiBookOpen />,
        title: "educations",
        stitle: "40 Listings",
        url: "#",
        img: img1,
      },
      {
        icon: <AiOutlineCar />,
        title: "cars",
        stitle: "33 Listings",
        url: "#",
        img: img1,
      },
      {
        icon: <BsBriefcase />,
        title: "jobs",
        stitle: "20 Listings",
        url: "#",
        img: img1,
      },
      {
        icon: <FaRegMoneyBillAlt />,
        title: "business",
        stitle: "20 Listings",
        url: "#",
        img: img1,
      },
    ],
  },
  populardestination: {
    sectitle: "Categories",
    seccontent:
      "Explore most popular destination and places, Morbi convallis bibendum urna ut viverra. Maecenas,",
    destinations: [
      {
        img: destinationimg1,
        cityFlag: flag3,
        cityName: "Galkayo",
        listingTxt: "12 listings",
        boxCol: "4",
        cardUrl: "/list-right-sidebar",
      },
      {
        img: img1,
        cityFlag: flag3,
        cityName: "Afgooye",
        listingTxt: "22 listings",
        boxCol: "4",
        cardUrl: "/list-right-sidebar",
      },
      {
        img: img1,
        cityFlag: flag3,
        cityName: "Burao",
        listingTxt: "32 listings",
        boxCol: "4",
        cardUrl: "/list-right-sidebar",
      },
      {
        img: destinationimg1,
        cityFlag: flag3,
        cityName: "Baiboa",
        listingTxt: "12 listings",
        boxCol: "4",
        cardUrl: "/list-right-sidebar",
      },
      {
        img: img1,
        cityFlag: flag3,
        cityName: "Las Anod",
        listingTxt: "22 listings",
        boxCol: "4",
        cardUrl: "/list-right-sidebar",
      },
      {
        img: img1,
        cityFlag: flag3,
        cityName: "Jilib",
        listingTxt: "32 listings",
        boxCol: "4",
        cardUrl: "/list-right-sidebar",
      },
    ],
    viewmorebtn: "View All Destination",
    viewmorebtnurl: "/all-locations",
  },
  locations: [
    {
      img: flag1,
      title: "United states (2)",
      titleUrl: "#",
    },
    {
      img: flag2,
      title: "London (4)",
      titleUrl: "#",
    },
    {
      img: flag3,
      title: "Australia (7)",
      titleUrl: "#",
    },
    {
      img: flag4,
      title: "Japan (9)",
      titleUrl: "#",
    },
    {
      img: flag5,
      title: "France (12)",
      titleUrl: "#",
    },
    {
      img: flag6,
      title: "Russia (14)",
      titleUrl: "#",
    },
    {
      img: flag7,
      title: "New Zealand (17)",
      titleUrl: "#",
    },
    {
      img: flag8,
      title: "India (19)",
      titleUrl: "#",
    },
    {
      img: flag9,
      title: "Netherlands (15)",
      titleUrl: "#",
    },
    {
      img: flag10,
      title: "Sweden (17)",
      titleUrl: "#",
    },
    {
      img: flag11,
      title: "Saudi Arabia (29)",
      titleUrl: "#",
    },
    {
      img: flag12,
      title: "Scotland (10)",
      titleUrl: "#",
    },
    {
      img: flag13,
      title: "Canada (43)",
      titleUrl: "#",
    },
    {
      img: flag14,
      title: "Mexico (45)",
      titleUrl: "#",
    },
    {
      img: flag15,
      title: "Bangladesh (50)",
      titleUrl: "#",
    },
    {
      img: flag16,
      title: "South Africa (60)",
      titleUrl: "#",
    },
    {
      img: flag17,
      title: "Pakistan (48)",
      titleUrl: "#",
    },
    {
      img: flag18,
      title: "Costa Rica (33)",
      titleUrl: "#",
    },
    {
      img: flag19,
      title: "Italy (44)",
      titleUrl: "#",
    },
    {
      img: flag20,
      title: "Thailand (55)",
      titleUrl: "#",
    },
  ],
  howitworks: {
    hiw1: {
      sectitle: "Plan The Vacation of Your Dreams",
      seccontent:
        "Somalia sky is the one stop for all the businesses ",
      items: [
        {
          id: 1,
          icon: <FiMap />,
          title: "Find Interesting Place",
          description:
            "Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.",
        },
        {
          id: 2,
          icon: <FiMail />,
          title: "Contact a Few authors",
          description:
            "Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.",
        },
        {
          id: 3,
          icon: <AiOutlineUser />,
          title: "Make a Reservation",
          description:
            "Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.",
        },
      ],
    },
    hiw2: {
      sectitle: "What We Offer",
      seccontent:
        "Somalia sky is the one stop for all the businesses ",
      items: [
        {
          active: false,
          icon: <BsMap />,
          title: "Great Places",
          description:
            "There are many variations of passages of Lorem Ipsum available.",
        },
        {
          active: false,
          icon: <GiChickenOven />,
          title: "Great Restaurants",
          description:
            "There are many variations of passages of Lorem Ipsum available.",
        },
        {
          active: false,
          icon: <RiHotelBedLine />,
          title: "Great Hotels",
          description:
            "There are many variations of passages of Lorem Ipsum available.",
        },
        {
          active: true,
          icon: <AiOutlineEllipsis />,
          title: "And More...",
          description:
            "There are many variations of passages of Lorem Ipsum available.",
        },
      ],
    },
    hiw3: {
      sectitle: "How Can I Earn Money with Dirto?",
      seccontent:
        "Dirto provides the various ways that help you can earn money from your site. Morbi convallis bibendum urna ut viverra.",
      videobtn: "watch how it works",
      videoid: "R2kiP9Qu7Pc",
      videoImg: hiw3videoimg,
      items: [
        {
          id: 1,
          icon: <FaRegMoneyBillAlt />,
          title: "Paid Listings",
          desc: "Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.",
        },
        {
          id: 2,
          icon: <FcLineChart />,
          title: "Promoted Listings",
          desc: "Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.",
        },
        {
          id: 3,
          icon: <FaRegHeart />,
          title: "Paid Claim Listings",
          desc: "Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam luctus, finibus tellus ut, convallis eros.",
        },
      ],
    },
    hiw4: {
      sectitle: "Why Choose Us",
      seccontent:
        "Somalia sky is the one stop for all the businesses ",
      items: [
        {
          icon: <FiCheck />,
          title: "We Are Professional",
          desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",
        },
        {
          icon: <FiCheck />,
          title: "Best Service Guarantee",
          desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",
        },
        {
          icon: <FiCheck />,
          title: "We Are Trusted and Secured",
          desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",
        },
        {
          icon: <FiCheck />,
          title: "Online Support 24/7 ",
          desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",
        },
      ],
    },
    hiw5: {
      sectitle: "Get Started With Dirto!",
      seccontent:
        "Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero.",
      items: [
        {
          id: 1,
          icon: <BsPencil />,
          title: "Pick a Keyword",
          desc: "Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam",
        },
        {
          id: 2,
          icon: <GiPositionMarker />,
          title: "Select Location",
          desc: "Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam",
        },
        {
          id: 3,
          icon: <TiArrowUnsorted />,
          title: "Select Category",
          desc: "Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam",
        },
        {
          id: 4,
          icon: <FiCheck />,
          title: "View Results",
          desc: "Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam",
        },
      ],
      videoBg: hiw5videoimg,
      videoBtn: "watch how it works",
      videoid: "R2kiP9Qu7Pc",
    },
    hiw6: {
      sectitle: "How Dirto Works",
      seccontent:
        "Somalia sky is the one stop for all the businesses ",
      items: [
        {
          id: 1,
          icon: <FaSearchPlus />,
          title: "Find a Place",
          description:
            "Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam",
        },
        {
          id: 2,
          icon: <FaRegMap />,
          title: "Select a location",
          description:
            "Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam",
        },
        {
          id: 3,
          icon: <FaSort />,
          title: "Select a Category",
          description:
            "Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam",
        },
        {
          id: 4,
          icon: <FiCheckCircle />,
          title: "See Result",
          description:
            "Proin dapibus nisl ornare diam varius ecos tempus. Aenean a quam",
        },
      ],
    },
    hiw7: {
      sectitle: "Why Choose Us",
      seccontent:
        "It is the biggest free online with a security system. We provide a simple hassle-free solution to sell and buy almost anything.",
      items: [
        {
          icon: <FiHeadphones />,
          title: "24/7 Hours Support",
          desc: "We have a global vision for a bright future. We have a distinguished team that has sufficient experience in managing all challenges. Our goal and purpose are to serve you in the best way.",
        },
        {
          icon: <FaCogs />,
          title: "Admin Panel",
          desc: "You have a control panel that manages your business freely, where you can publish what you want at any time from anywhere in the world                                                     ",
        },
        {
          icon: <FiThumbsUp />,
          title: "Reach more customers",
          desc: "We have enough experience to reach the largest possible segment of your customers                                                                                                          ",
        },
      ],
    },
  },
  placesgrid: [
    {
      bedge: "New Open",
      title: "Favorite Place Food Bank",
      titleIcon: <IoIosCheckmarkCircle />,
      titleUrl: "/listing-details",
      stitle: "Bishop Avenue, New York",
      image: img2,
      cardType: "Restaurant",
      cardTypeIcon: <GiChickenOven />,
      author: authorimg,
      authorUrl: "#",
      number: "(492) 492-4828",
      website: "www.mysitelink.com",
      date: "Posted 1 month ago",
      view: "204",
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
      ratingNum: "4.5",
    },
    {
      bedge: "Closed",
      title: "beach blue boardwalk",
      titleIcon: "",
      titleUrl: "/listing-details",
      stitle: "Bishop Avenue, New York",
      image: img2,
      cardType: "Travel",
      cardTypeIcon: <RiPlaneLine />,
      author: authorimg,
      authorUrl: "#",
      number: "(492) 492-4828",
      website: "www.mysitelink.com",
      date: "Posted 1 month ago",
      view: "248",
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
      ratingNum: "4.6",
    },
    {
      bedge: "New Open",
      title: "Hotel Govendor",
      titleIcon: <IoIosCheckmarkCircle />,
      titleUrl: "/listing-details",
      stitle: "Bishop Avenue, New York",
      image: img2,
      cardType: "Hotel",
      cardTypeIcon: <RiHotelBedLine />,
      author: authorimg,
      authorUrl: "#",
      number: "(492) 492-4828",
      website: "www.mysitelink.com",
      date: "Posted 1 month ago",
      view: "248",
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
      ratingNum: "4.6",
    },
    {
      bedge: "New Open",
      title: "Favorite Place Food Bank",
      titleIcon: <IoIosCheckmarkCircle />,
      titleUrl: "/listing-details",
      stitle: "Bishop Avenue, New York",
      image: img2,
      cardType: "Restaurant",
      cardTypeIcon: <GiChickenOven />,
      author: authorimg,
      authorUrl: "#",
      number: "(492) 492-4828",
      website: "www.mysitelink.com",
      date: "Posted 1 month ago",
      view: "204",
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
      ratingNum: "4.5",
    },
    {
      bedge: "Closed",
      title: "beach blue boardwalk",
      titleIcon: "",
      titleUrl: "/listing-details",
      stitle: "Bishop Avenue, New York",
      image: img2,
      cardType: "Travel",
      cardTypeIcon: <RiPlaneLine />,
      author: authorimg,
      authorUrl: "#",
      number: "(492) 492-4828",
      website: "www.mysitelink.com",
      date: "Posted 1 month ago",
      view: "248",
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
      ratingNum: "4.6",
    },
    {
      bedge: "New Open",
      title: "Hotel Govendor",
      titleIcon: <IoIosCheckmarkCircle />,
      titleUrl: "/listing-details",
      stitle: "Bishop Avenue, New York",
      image: img2,
      cardType: "Hotel",
      cardTypeIcon: <RiHotelBedLine />,
      author: authorimg,
      authorUrl: "#",
      number: "(492) 492-4828",
      website: "www.mysitelink.com",
      date: "Posted 1 month ago",
      view: "248",
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
      ratingNum: "4.6",
    },
  ],
  placesgridmoreitems: [
    {
      bedge: "New Open",
      title: "Favorite Place Food Bank",
      titleIcon: <IoIosCheckmarkCircle />,
      titleUrl: "/listing-details",
      stitle: "Bishop Avenue, New York",
      image: img1,
      cardType: "Restaurant",
      cardTypeIcon: <GiChickenOven />,
      author: authorimg,
      authorUrl: "#",
      number: "(492) 492-4828",
      website: "www.mysitelink.com",
      date: "Posted 1 month ago",
      view: "204",
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
      ratingNum: "4.5",
    },
    {
      bedge: "Closed",
      title: "beach blue boardwalk",
      titleIcon: "",
      titleUrl: "/listing-details",
      stitle: "Bishop Avenue, New York",
      image: img2,
      cardType: "Travel",
      cardTypeIcon: <RiPlaneLine />,
      author: authorimg,
      authorUrl: "#",
      number: "(492) 492-4828",
      website: "www.mysitelink.com",
      date: "Posted 1 month ago",
      view: "248",
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
      ratingNum: "4.6",
    },
    {
      bedge: "New Open",
      title: "Hotel Govendor",
      titleIcon: <IoIosCheckmarkCircle />,
      titleUrl: "/listing-details",
      stitle: "Bishop Avenue, New York",
      image: img2,
      cardType: "Hotel",
      cardTypeIcon: <RiHotelBedLine />,
      author: authorimg,
      authorUrl: "#",
      number: "(492) 492-4828",
      website: "www.mysitelink.com",
      date: "Posted 1 month ago",
      view: "248",
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
      ratingNum: "4.6",
    },
    {
      bedge: "New Open",
      title: "Favorite Place Food Bank",
      titleIcon: <IoIosCheckmarkCircle />,
      titleUrl: "/listing-details",
      stitle: "Bishop Avenue, New York",
      image: img2,
      cardType: "Restaurant",
      cardTypeIcon: <GiChickenOven />,
      author: authorimg,
      authorUrl: "#",
      number: "(492) 492-4828",
      website: "www.mysitelink.com",
      date: "Posted 1 month ago",
      view: "204",
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
      ratingNum: "4.5",
    },
    {
      bedge: "Closed",
      title: "beach blue boardwalk",
      titleIcon: "",
      titleUrl: "/listing-details",
      stitle: "Bishop Avenue, New York",
      image: img2,
      cardType: "Travel",
      cardTypeIcon: <RiPlaneLine />,
      author: authorimg,
      authorUrl: "#",
      number: "(492) 492-4828",
      website: "www.mysitelink.com",
      date: "Posted 1 month ago",
      view: "248",
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
      ratingNum: "4.6",
    },
    {
      bedge: "New Open",
      title: "Hotel Govendor",
      titleIcon: <IoIosCheckmarkCircle />,
      titleUrl: "/listing-details",
      stitle: "Bishop Avenue, New York",
      image: img2,
      cardType: "Hotel",
      cardTypeIcon: <RiHotelBedLine />,
      author: authorimg,
      authorUrl: "#",
      number: "(492) 492-4828",
      website: "www.mysitelink.com",
      date: "Posted 1 month ago",
      view: "248",
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
      ratingNum: "4.6",
    },
    {
      bedge: "Closed",
      title: "beach blue boardwalk",
      titleIcon: "",
      titleUrl: "/listing-details",
      stitle: "Bishop Avenue, New York",
      image: img2,
      cardType: "Travel",
      cardTypeIcon: <RiPlaneLine />,
      author: authorimg,
      authorUrl: "#",
      number: "(492) 492-4828",
      website: "www.mysitelink.com",
      date: "Posted 1 month ago",
      view: "248",
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
      ratingNum: "4.6",
    },
    {
      bedge: "New Open",
      title: "Hotel Govendor",
      titleIcon: <IoIosCheckmarkCircle />,
      titleUrl: "/listing-details",
      stitle: "Bishop Avenue, New York",
      image: img2,
      cardType: "Hotel",
      cardTypeIcon: <RiHotelBedLine />,
      author: authorimg,
      authorUrl: "#",
      number: "(492) 492-4828",
      website: "www.mysitelink.com",
      date: "Posted 1 month ago",
      view: "248",
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
      ratingNum: "4.6",
    },
  ],
  listing: {
    sidebar: {
      widgetFilterCategory: {
        title: "Filter by Category",
        items: [
          {
            id: 1,
            cat: "Travel",
            catNum: 11,
          },
          {
            id: 2,
            cat: "Arts",
            catNum: 22,
          },
          {
            id: 3,
            cat: "Technology",
            catNum: 9,
          },
          {
            id: 4,
            cat: "Fashion",
            catNum: 11,
          },
          {
            id: 5,
            cat: "Technology",
            catNum: 12,
          },
          {
            id: 6,
            cat: "Lifestyle",
            catNum: 48,
          },
          {
            id: 7,
            cat: "Design",
            catNum: 23,
          },
          {
            id: 8,
            cat: "Computer",
            catNum: 28,
          },
          {
            id: 9,
            cat: "Jobs",
            catNum: 24,
          },
          {
            id: 10,
            cat: "Real Estates",
            catNum: 40,
          },
          {
            id: 11,
            cat: "Clothing",
            catNum: 23,
          },
          {
            id: 12,
            cat: "Beauty & Spa",
            catNum: 18,
          },
          {
            id: 13,
            cat: "Event",
            catNum: 65,
          },
          {
            id: 14,
            cat: "Health & Fitness",
            catNum: 34,
          },
          {
            id: 15,
            cat: "Restaurants",
            catNum: 20,
          },
        ],
      },
      widgetFilterTags: {
        title: "Filter by Tags",
        tags: [
          {
            path: "#",
            title: "technology",
          },
          {
            path: "#",
            title: "fashion",
          },
          {
            path: "#",
            title: "art",
          },
          {
            path: "#",
            title: "design",
          },
          {
            path: "#",
            title: "food",
          },
          {
            path: "#",
            title: "development",
          },
          {
            path: "#",
            title: "marketing",
          },
          {
            path: "#",
            title: "video",
          },
          {
            path: "#",
            title: "music",
          },
          {
            path: "#",
            title: "lifestyle",
          },
          {
            path: "#",
            title: "adventure",
          },
        ],
      },
      widgetFilterFeatures: {
        title: "Filter by Features",
        features: [
          {
            id: 1,
            text: "Elevator in building",
          },
          {
            id: 2,
            text: "Friendly Workspace",
          },
          {
            id: 3,
            text: "Instant Book",
          },
          {
            id: 4,
            text: "Wireless Internet",
          },
          {
            id: 5,
            text: "Free Parking On Premises",
          },
          {
            id: 6,
            text: "Free Parking On Street",
          },
          {
            id: 7,
            text: "Smoking Allowed",
          },
          {
            id: 8,
            text: "Events",
          },
          {
            id: 9,
            text: "Wheelchair Accessible",
          },
          {
            id: 10,
            text: "Alarm System",
          },
          {
            id: 11,
            text: "Electricity",
          },
          {
            id: 12,
            text: "Attached Garage",
          },
          {
            id: 13,
            text: "Security Cameras",
          },
        ],
      },
      widgetSortby: {
        title: "Sort by",
        items: [
          {
            id: 1,
            title: "Best sellers",
          },
          {
            id: 2,
            title: "Newest",
          },
          {
            id: 3,
            title: "Best Rated",
          },
          {
            id: 4,
            title: "Oldest",
          },
        ],
      },
      widgetPostedby: {
        title: "Posted by",
        items: [
          {
            title: "Dealer",
          },
          {
            title: "individual",
          },
          {
            title: "Reseller",
          },
        ],
      },
    },
    listinglists: [
      {
        bedge: "New Open",
        title: "Favorite Place Food Bank",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Restaurant",
        cardTypeIcon: <GiChickenOven />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "204",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.5",
      },
      {
        bedge: "Closed",
        title: "beach blue boardwalk",
        titleIcon: "",
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Travel",
        cardTypeIcon: <RiPlaneLine />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "248",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.6",
      },
      {
        bedge: "New Open",
        title: "Hotel Govendor",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Hotel",
        cardTypeIcon: <RiHotelBedLine />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "248",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.6",
      },
      {
        bedge: "New Open",
        title: "Favorite Place Food Bank",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Restaurant",
        cardTypeIcon: <GiChickenOven />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "204",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.5",
      },
      {
        bedge: "Closed",
        title: "beach blue boardwalk",
        titleIcon: "",
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Travel",
        cardTypeIcon: <RiPlaneLine />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "248",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.6",
      },
      {
        bedge: "New Open",
        title: "Hotel Govendor",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Hotel",
        cardTypeIcon: <RiHotelBedLine />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "248",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.6",
      },
    ],
  },
  listingDetails: {
    title: "Tasty Hand-Pulled Noodles",
    description:
      "Nemo ucxqui officia voluptatem accu santium doloremque laudantium, totam rem ape dicta sunt dose explicabo. Nemo enim ipsam voluptatem quia voluptas. Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium dolorem que laudantium, totam rem aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    descriptiontitle: "Description",
    featurestitle: "Features",
    featureslists: [
      {
        icon: <BsCheckCircle />,
        title: "Instant Noodles",
      },
      {
        icon: <BsCheckCircle />,
        title: "Smoking Allowed",
      },
      {
        icon: <BsCheckCircle />,
        title: "Bike Parking",
      },
      {
        icon: <BsCheckCircle />,
        title: "Wireless Internet",
      },
      {
        icon: <BsCheckCircle />,
        title: "Street Parking",
      },
      {
        icon: <BsCheckCircle />,
        title: "Accepts Credit Cards",
      },
    ],
    videotitle: "Video",
    videoImg: listingdetailsvideoimg,
    videoid: "R2kiP9Qu7Pc",
    videobtn: "Watch Video",
    contactinfos: {
      title: "Contact Information",
      address: "101 East Parkview Road, New York",
      email: "example@gmail.com",
      number: "+7(111)123456789",
      website: "www.techydevs.com",
      websiteUrl: "https://techydevs.com",
      socials: [
        {
          icon: <FaFacebookF />,
          title: "facebook",
          url: "https://facebook.com",
        },
        {
          icon: <FaTwitter />,
          title: "twitter",
          url: "https://twitter.com",
        },
        {
          icon: <FaInstagram />,
          title: "instagram",
          url: "https://instagram.com",
        },
        {
          icon: <FaLinkedinIn />,
          title: "linkedinIn",
          url: "https://linkedin.com",
        },
        {
          icon: <FaYoutube />,
          title: "youtube",
          url: "https://youtube.com",
        },
      ],
    },
    comments: [
      {
        img: team1,
        name: "Adam Smith",
        date: "Reviewed 2 Days ago",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus",
        stars: [<MdStar />, <MdStar />, <MdStar />, <MdStar />, <MdStarHalf />],
        replyBtn: "Reply",
        replyBtnIcon: <RiReplyLine />,
        replyComments: [
          {
            img: team1,
            name: "Julian Smith",
            date: "Reviewed 3 Days ago",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus",
            stars: [
              <MdStar />,
              <MdStar />,
              <MdStar />,
              <MdStar />,
              <MdStarHalf />,
            ],
            replyBtn: "Reply",
            replyBtnIcon: <RiReplyLine />,
          },
        ],
      },
      {
        img: team1,
        name: "Matt Derry",
        date: "Reviewed 4 Days ago",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus",
        stars: [<MdStar />, <MdStar />, <MdStar />, <MdStar />, <MdStar />],
        replyBtn: "Reply",
        replyBtnIcon: <RiReplyLine />,
        replyComments: [],
      },
    ],
    sidebar: {
      widgetAuthor: {
        authorImg: team2,
        authorName: "Mark Williamson",
        date: "Posted 3 Days ago",
        address: "101 Parkview, New York",
        email: "example@gmail.com",
        number: "+7(111)123456789",
        website: "www.techydevs.com",
        websiteUrl: "https://techydevs.com",
        socials: [
          {
            icon: <FaFacebookF />,
            url: "https://facebook.com",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com",
          },
          {
            icon: <FaInstagram />,
            url: "https://instagram.com",
          },
          {
            icon: <FaDribbble />,
            url: "https://dribbble.com",
          },
          {
            icon: <FaBehance />,
            url: "https://behance.be",
          },
        ],
      },
      widgetStaticsInfo: {
        title: "Statics info",
        lists: [
          {
            icon: <BsListCheck />,
            text: "12 Listings",
          },
          {
            icon: <MdStarBorder />,
            text: "4.4 Ratings",
          },
          {
            icon: <BsBookmark />,
            text: "24 Bookmark",
          },
          {
            icon: <BsEye />,
            text: "745 Views",
          },
          {
            icon: <FiExternalLink />,
            text: "120 Share",
          },
          {
            icon: <FaRegComment />,
            text: "20 Comments",
          },
          {
            icon: <FiHeart />,
            text: "120 Likes",
          },
        ],
      },
      widgetOpenHours: {
        title: "Opening Hours",
        stitle: "now open",
        items: [
          {
            day: "Monday",
            time: "9am - 5pm",
            close: false,
          },
          {
            day: "Tuesday",
            time: "9am - 5pm",
            close: false,
          },
          {
            day: "Wednesday",
            time: "9am - 5pm",
            close: false,
          },
          {
            day: "Thursday",
            time: "9am - 5pm",
            close: false,
          },
          {
            day: "Friday",
            time: "9am - 5pm",
            close: false,
          },
          {
            day: "Sat-Sun",
            time: "Closed",
            close: true,
          },
        ],
      },
      widgetCategories: {
        title: "Categories",
        lists: [
          {
            cat: "Restaurant",
            catNum: 11,
            url: "#",
          },
          {
            cat: "Shop",
            catNum: 32,
            url: "#",
          },
          {
            cat: "Fitness",
            catNum: 21,
            url: "#",
          },
          {
            cat: "Event",
            catNum: 24,
            url: "#",
          },
          {
            cat: "Bar",
            catNum: 14,
            url: "#",
          },
          {
            cat: "Salon",
            catNum: 11,
            url: "#",
          },
          {
            cat: "Beauty",
            catNum: 10,
            url: "#",
          },
        ],
      },
      widgetTags: {
        title: "Tags Cloud",
        lists: [
          {
            text: "Travel",
            url: "#",
          },
          {
            text: "Restaurant",
            url: "#",
          },
          {
            text: "Gym",
            url: "#",
          },
          {
            text: "Food",
            url: "#",
          },
          {
            text: "Office",
            url: "#",
          },
          {
            text: "Bar",
            url: "#",
          },
          {
            text: "Health",
            url: "#",
          },
          {
            text: "Car Parking",
            url: "#",
          },
          {
            text: "Nightlife",
            url: "#",
          },
          {
            text: "Doctor",
            url: "#",
          },
          {
            text: "Bike Parking",
            url: "#",
          },
        ],
      },
      widgetSimilarListing: {
        title: "Similar Listings",
        items: [
          {
            img: similarimg,
            title: "The best sale marketer of the next year",
            titleUrl: "/blog-single",
            price: "$19.00",
            cat: "Gym & Fitness",
            catUrl: "#",
            stars: [
              <MdStar />,
              <MdStar />,
              <MdStar />,
              <MdStar />,
              <MdStarHalf />,
            ],
          },
          {
            img: similarimg,
            title: "How to make your ideas became true",
            titleUrl: "/blog-single",
            price: "$20.00",
            cat: "Restaurant",
            catUrl: "#",
            stars: [
              <MdStar />,
              <MdStar />,
              <MdStar />,
              <MdStar />,
              <MdStarHalf />,
            ],
          },
          {
            img: similarimg,
            title: "What gets in the way of strategy",
            titleUrl: "/blog-single",
            price: "$19.00",
            cat: "Art & Design",
            catUrl: "#",
            stars: [
              <MdStar />,
              <MdStar />,
              <MdStar />,
              <MdStar />,
              <MdStarHalf />,
            ],
          },
          {
            img: similarimg,
            title: "What gets in the way of strategy",
            titleUrl: "/blog-single",
            price: "$19.00",
            cat: "Outdoors",
            catUrl: "#",
            stars: [
              <MdStar />,
              <MdStar />,
              <MdStar />,
              <MdStar />,
              <MdStarHalf />,
            ],
          },
        ],
      },
      widgetFollowConnect: {
        title: "Follow & Connect",
        socials: [
          {
            icon: <FaFacebookF />,
            url: "https://facebook.com",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com",
          },
          {
            icon: <FaInstagram />,
            url: "https://instagram.com",
          },
          {
            icon: <FaDribbble />,
            url: "https://dribbble.com",
          },
          {
            icon: <FaBehance />,
            url: "https://behance.be",
          },
        ],
      },
    },
  },
  userprofile: {
    sidebar: {
      img: team2,
      name: "Mark Williamson",
      date: "Joined 4 years ago",
      address: "101 Parkview, New York",
      number: "+7(111)123456789",
      email: "example@gmail.com",
      website: "www.techydevs.com",
      websiteUrl: "https://techydevs.com",
      socials: [
        {
          icon: <FaFacebookF />,
          url: "https://facebook.com",
        },
        {
          icon: <FaTwitter />,
          url: "https://twitter.com",
        },
        {
          icon: <FaInstagram />,
          url: "https://instagram.com",
        },
        {
          icon: <FaDribbble />,
          url: "https://dribbble.com",
        },
        {
          icon: <FaBehance />,
          url: "https://behance.be",
        },
      ],
    },
  },
  dashboard: {
    breadcrumbimg: breadcrumbimg,
    cards: [
      {
        img: img2,
        title: "Favorite Place Food Bank",
        subtitle: "Bishop Avenue, New York",
        editTxt: "Edit",
        editIcon: <FaRegEdit />,
        deleteTxt: "Delete",
        deleteIcon: <FaRegTrashAlt />,
        cardLink: "/listing-details",
      },
      {
        img: img2,
        title: "Beach Blue Boardwalk",
        subtitle: "Bishop Avenue, New York",
        editTxt: "Edit",
        editIcon: <FaRegEdit />,
        deleteTxt: "Delete",
        deleteIcon: <FaRegTrashAlt />,
        cardLink: "/listing-details",
      },
      {
        img: img2,
        title: "Hotel Govendor",
        subtitle: "Bishop Avenue, New York",
        editTxt: "Edit",
        editIcon: <FaRegEdit />,
        deleteTxt: "Delete",
        deleteIcon: <FaRegTrashAlt />,
        cardLink: "/listing-details",
      },
      {
        img: img2,
        title: "Favorite Place Food Bank",
        subtitle: "Bishop Avenue, New York",
        editTxt: "Edit",
        editIcon: <FaRegEdit />,
        deleteTxt: "Delete",
        deleteIcon: <FaRegTrashAlt />,
        cardLink: "/listing-details",
      },
      {
        img: img2,
        title: "Beach Blue Boardwalk",
        subtitle: "Bishop Avenue, New York",
        editTxt: "Edit",
        editIcon: <FaRegEdit />,
        deleteTxt: "Delete",
        deleteIcon: <FaRegTrashAlt />,
        cardLink: "/listing-details",
      },
      {
        img: img2,
        title: "Hotel Govendor",
        subtitle: "Bishop Avenue, New York",
        editTxt: "Edit",
        editIcon: <FaRegEdit />,
        deleteTxt: "Delete",
        deleteIcon: <FaRegTrashAlt />,
        cardLink: "/listing-details",
      },
    ],
    userImg: userimage,
    userName: "Mark Williamson",
    userbio:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    address: "101 Parkview, New York",
    phoneNum: "+7(111)123456789",
    website: "www.techydevs.com",
  },
  teamdata: {
    sectitle: "Our Expert Team Members",
    seccontent:
      "A distinguished team that has sufficient experience in managing all challenges.",
    teams: [
      {
        img: ABDimage,
        title: "Abdullah Mohamed Hashi",
        titleUrl: "#",
        stitle: "CEO & Digital Marketing & SEO Specialist",
        socials: [
          {
            icon: <FaFacebookF />,
            url: "https://www.facebook.com/ab17di",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com/Abdi17yare",
          },
          {
            icon: <FaInstagram />,
            url: "https://www.instagram.com/ab17di/",
          },
          {
            icon: <FaLinkedinIn />,
            url: "https://www.linkedin.com/in/abdulla-hashi/",
          },
        ],
      },
      {
        img: userimage,
        title: "Mohamed Adow Ahmed",
        titleUrl: "#",
        stitle: "Pilot",
        socials: [
          {
            icon: <FaFacebookF />,
            url: "https://facebook.com",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com",
          },
          {
            icon: <FaInstagram />,
            url: "https://instagram.com",
          },
          {
            icon: <FaLinkedinIn />,
            url: "https://linkedin.com",
          },
        ],
      },
      {
        img: userimage,
        title: "Fathia Ibrahim Mumin",
        titleUrl: "#",
        stitle: "Business Development Manager",
        socials: [
          {
            icon: <FaFacebookF />,
            url: "https://facebook.com",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com",
          },
          {
            icon: <FaInstagram />,
            url: "https://instagram.com",
          },
          {
            icon: <FaLinkedinIn />,
            url: "https://linkedin.com",
          },
        ],
      },
     
    ],
  },
  pricingplan: [
    {
      icon: <IoMdPaperPlane />,
      title: "Basic Plan",
      price: "49",
      currency: "$",
      mo: "Per Month",
      features: [
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "One Listing",
        },
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "90 Days Availability",
        },
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "Non-Featured",
        },
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "Limited Support",
        },
        {
          icon: <MdClose />,
          iconClr: "text-danger",
          title: "Average Price Range",
        },
        {
          icon: <MdClose />,
          iconClr: "text-danger",
          title: "Business Hours",
        },
        {
          icon: <MdClose />,
          iconClr: "text-danger",
          title: "Lifetime Availability",
        },
        {
          icon: <MdClose />,
          iconClr: "text-danger",
          title: "Featured In Search Results",
        },
      ],
      buttonTxt: "Continue",
      buttonUrl: "#",
      active: false,
    },
    {
      icon: <RiPlaneLine />,
      title: "Advanced Plan",
      price: "99",
      currency: "$",
      mo: "Per Month",
      features: [
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "One Listing",
        },
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "90 Days Availability",
        },
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "Non-Featured",
        },
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "Limited Support",
        },
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "Average Price Range",
        },
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "Business Hours",
        },
        {
          icon: <MdClose />,
          iconClr: "text-danger",
          title: "Lifetime Availability",
        },
        {
          icon: <MdClose />,
          iconClr: "text-danger",
          title: "Featured In Search Results",
        },
      ],
      buttonTxt: "Continue",
      buttonUrl: "#",
      active: true,
    },
    {
      icon: <IoIosRocket />,
      title: "Enterprise Plan",
      price: "149",
      currency: "$",
      mo: "Per Month",
      features: [
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "One Listing",
        },
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "90 Days Availability",
        },
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "Non-Featured",
        },
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "Limited Support",
        },
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "Average Price Range",
        },
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "Business Hours",
        },
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "Lifetime Availability",
        },
        {
          icon: <FiCheck />,
          iconClr: "text-success",
          title: "Featured In Search Results",
        },
      ],
      buttonTxt: "Continue",
      buttonUrl: "#",
      active: false,
    },
  ],
  aboutdata: {
    imagebox: [
      {
        img: imgboximg,
        title: "Careers",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo",
        cardLink: "#",
      },
      {
        img: imgboximg,
        title: "Newsroom",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo",
        cardLink: "#",
      },
      {
        img: imgboximg,
        title: "Investor Relations",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo",
        cardLink: "#",
      },
    ],
    aboutst2: {
      title:
        "Welcome to Somalia Sky",
      content1:
        "Somaliasky company is a Somalian company founded by three young leaders who live outside Somalia, Because of their inability to get Somali products and services.  ",
      content2:
        "They decided to create a company that contributes to providing time and safety and getting the best services and products from Somalia anywhere in the world.",
      items: [
        {
          img: about2img1,
          boxClass: "mt-4",
        },
        {
          img: about2img2,
          boxClass: "",
        },
        {
          img: about2img3,
          boxClass: "mt-4",
        },
        {
          img: about2img4,
          boxClass: "",
        },
      ],
    },
  },
  mostvisitedplaces: {
    sectitle: "Most Visited Places",
    seccontent:
      "Somalia sky is the one stop for all the businesses ",
    places: [
      {
        bedge: "New Open",
        title: "Hotel Govendor",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img1,
        cardType: "Hotel",
        cardTypeIcon: <RiHotelBedLine />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        websiteUrl: "https://example.com",
        date: "Posted 1 month ago",
        view: "204",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.7",
      },
      {
        bedge: "New Open",
        title: "Favorite Place Food",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Restaurant",
        cardTypeIcon: <GiChickenOven />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "204",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.5",
      },
      {
        bedge: "Closed",
        title: "beach boardwalk",
        titleIcon: "",
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Travel",
        cardTypeIcon: <GiChickenOven />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "248",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.6",
      },
      {
        bedge: "New Open",
        title: "Hotel Govendor",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Hotel",
        cardTypeIcon: <RiHotelBedLine />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "248",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.6",
      },
      {
        bedge: "New Open",
        title: "sticky band party",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Event",
        cardTypeIcon: <IoMdMusicalNotes />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "248",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.4",
      },
      {
        bedge: "Closed",
        title: "Sena Clothing Mall",
        titleIcon: "",
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Shop",
        cardTypeIcon: <GiChickenOven />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "248",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.6",
      },
      {
        bedge: "New Open",
        title: "Hotel Govendor",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Hotel",
        cardTypeIcon: <RiHotelBedLine />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "204",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.7",
      },
      {
        bedge: "New Open",
        title: "Favorite Place Bank",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Restaurant",
        cardTypeIcon: <GiChickenOven />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "204",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.5",
      },
    ],
  },
  mostvisitedplacesRes: {
    sectitle: "Most Visited Places",
    seccontent:
      "Somalia sky is the one stop for all the businesses ",
    places: [
      {
        bedge: "New Open",
        title: "Hotel Govendor",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img1,
        cardType: "Hotel",
        cardTypeIcon: <RiHotelBedLine />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        websiteUrl: "https://example.com",
        date: "Posted 1 month ago",
        view: "204",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.7",
      },
      {
        bedge: "New Open",
        title: "Favorite Place Food",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Restaurant",
        cardTypeIcon: <GiChickenOven />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "204",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.5",
      },
      {
        bedge: "Closed",
        title: "beach boardwalk",
        titleIcon: "",
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Travel",
        cardTypeIcon: <GiChickenOven />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "248",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.6",
      },
      {
        bedge: "New Open",
        title: "Hotel Govendor",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Hotel",
        cardTypeIcon: <RiHotelBedLine />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "248",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.6",
      },
      {
        bedge: "New Open",
        title: "sticky band party",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Event",
        cardTypeIcon: <IoMdMusicalNotes />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "248",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.4",
      },
      {
        bedge: "Closed",
        title: "Sena Clothing Mall",
        titleIcon: "",
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Shop",
        cardTypeIcon: <GiChickenOven />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "248",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.6",
      },
      {
        bedge: "New Open",
        title: "Hotel Govendor",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Hotel",
        cardTypeIcon: <RiHotelBedLine />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "204",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.7",
      },
      {
        bedge: "New Open",
        title: "Favorite Place Bank",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: img2,
        cardType: "Restaurant",
        cardTypeIcon: <GiChickenOven />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "204",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.5",
      },
    ],
  },
  recommendedplaces: {
    sectitle: "Companies we recommend",
    seccontent:
      "Somalia Sky recommended companies",
    items: [
      {
        bedge: "New Open",
        title: "Favorite Place Bank",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: destinationimg6,
        cardType: "Restaurant",
        cardTypeIcon: <GiChickenOven />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "204",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.5",
      },
      {
        bedge: "Closed",
        title: "beach boardwalk",
        titleIcon: "",
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: destinationimg6,
        cardType: "Travel",
        cardTypeIcon: <RiPlaneLine />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "248",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.6",
      },
      {
        bedge: "New Open",
        title: "Hotel Govendor",
        titleIcon: <IoIosCheckmarkCircle />,
        titleUrl: "/listing-details",
        stitle: "Bishop Avenue, New York",
        image: destinationimg6,
        cardType: "Hotel",
        cardTypeIcon: <RiHotelBedLine />,
        author: authorimg,
        authorUrl: "#",
        number: "(492) 492-4828",
        website: "www.mysitelink.com",
        date: "Posted 1 month ago",
        view: "248",
        ratings: [
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStar />,
          <IoMdStarHalf />,
          <IoMdStar className="last-star" />,
        ],
        ratingNum: "4.6",
      },
    ],
  },
  dreamplaces: {
    sectitle: "Explore Your Dream Places",
    seccontent:
      "Explore most popular destination and places, Morbi convallis bibendum urna ut viverra. Maecenas,",
    places: [
      {
        img: dreamimg,
        country: "united states",
        badge: "Explore",
        placeNum: 5,
        listingNum: 250,
        cardColumn: 6,
        cardLink: "#",
      },
      {
        img: dreamimg,
        country: "united kingdom",
        badge: "Explore",
        placeNum: 7,
        listingNum: 220,
        cardColumn: 6,
        cardLink: "#",
      },
      {
        img: dreamimg,
        country: "Australia",
        badge: "Explore",
        placeNum: 8,
        listingNum: 80,
        cardColumn: 4,
        cardLink: "#",
      },
      {
        img: dreamimg,
        country: "New zealand",
        badge: "Explore",
        placeNum: 9,
        listingNum: 190,
        cardColumn: 4,
        cardLink: "#",
      },
      {
        img: dreamimg,
        country: "Russia",
        badge: "Explore",
        placeNum: 11,
        listingNum: 110,
        cardColumn: 4,
        cardLink: "#",
      },
    ],
    loadmoretext: "Load More",
  },
  funfacts: {
    funfact1: {
      sectitle: "Numbers Say Everything",
      seccontent:
        "Somalia sky is the one stop for all the businesses ",
      counteritems: [
        {
          id: "1",
          start: 0,
          end: 150,
          duration: "8",
          separator: "",
          decimal: ",",
          prefix: " ",
          suffix: "+",
          title: "Projects Completed",
        },
        {
          id: "2",
          start: 0,
          end: 3040,
          duration: "8",
          separator: "",
          decimal: ",",
          prefix: " ",
          suffix: "+",
          title: "Happy Clients",
        },
        {
          id: "3",
          start: 0,
          end: 2020,
          duration: "8",
          separator: "",
          decimal: ",",
          prefix: " ",
          suffix: "+",
          title: "Cup of Coffee",
        },
        {
          id: "4",
          start: 0,
          end: 350,
          duration: "8",
          separator: "",
          decimal: ",",
          prefix: " ",
          suffix: "+",
          title: "Awards Winning",
        },
      ],
    },
    funfact2: {
      sectitle: "Numbers Say Everything",
      seccontent:
        "Somalia sky is the one stop for all the businesses ",
      counteritems: [
        {
          id: "1",
          title: "Projects Completed",
          buttonTxt: "join now",
          buttonUrl: "#",
          start: 0,
          end: 1150,
          duration: 8,
          separator: "",
          decimal: ",",
          prefix: " ",
          suffix: "+",
        },
        {
          id: "2",
          title: "Happy Clients",
          buttonTxt: "join now",
          buttonUrl: "#",
          start: 0,
          end: 3040,
          duration: 8,
          separator: "",
          decimal: ",",
          prefix: " ",
          suffix: "+",
        },
        {
          id: "3",
          title: "Cup of Coffee",
          buttonTxt: "join now",
          buttonUrl: "#",
          start: 0,
          end: 2020,
          duration: 8,
          separator: "",
          decimal: ",",
          prefix: " ",
          suffix: "+",
        },
        {
          id: "4",
          title: "Awards Winning",
          buttonTxt: "join now",
          buttonUrl: "#",
          start: 0,
          end: 350,
          duration: 8,
          separator: "",
          decimal: ",",
          prefix: " ",
          suffix: "+",
        },
      ],
    },
    funfact3: [
      {
        id: 1,
        title: "New Visitors Every Week",
        start: 0,
        end: 250,
        duration: 8,
        separator: "",
        decimal: ",",
        prefix: " ",
        suffix: "+",
      },
      {
        id: 2,
        title: "Happy customers every year",
        start: 0,
        end: 3040,
        duration: 8,
        separator: "",
        decimal: ",",
        prefix: " ",
        suffix: "+",
      },
      {
        id: 3,
        title: "Awards Won",
        start: 0,
        end: 172,
        duration: 8,
        separator: "",
        decimal: ",",
        prefix: " ",
        suffix: "",
      },
      {
        id: 4,
        title: "New Listing Every Week",
        start: 0,
        end: 150,
        duration: 8,
        separator: "",
        decimal: ",",
        prefix: " ",
        suffix: "+",
      },
    ],
  },
  accordions: {
    sectitle: "Listing faqs",
    seccontent:
      "Somalia sky is the one stop for all the businesses ",
    items: [
      {
        title: "What is a novel coronavirus?",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
        plus: <FaPlus />,
        minus: <FaMinus />,
        cardClass: "mb-3",
      },
      {
        title: "Can I create a free listing?",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
        plus: <FaPlus />,
        minus: <FaMinus />,
        cardClass: "mb-3",
      },
      {
        title: "How much time does it take to get approval?",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
        plus: <FaPlus />,
        minus: <FaMinus />,
        cardClass: "mb-3",
      },
      {
        title: "Do I have to commit to a yearly subscription?",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
        plus: <FaPlus />,
        minus: <FaMinus />,
        cardClass: "mb-3",
      },
      {
        title: "Is my listing secure?",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
        plus: <FaPlus />,
        minus: <FaMinus />,
        cardClass: "mb-3",
      },
      {
        title: "How can i Delete listing?",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
        plus: <FaPlus />,
        minus: <FaMinus />,
        cardClass: "mb-3",
      },
      {
        title: "What is listing site?",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
        plus: <FaPlus />,
        minus: <FaMinus />,
        cardClass: "mb-3",
      },
      {
        title: "Why people chose this listing?",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text",
        plus: <FaPlus />,
        minus: <FaMinus />,
        cardClass: "",
      },
    ],
  },
  iconboxes: {
    iconlist1: [
      {
        id: 1,
        icon: <FiUsers />,
        title: "Ask Community",
        subtitle: "Get help from 1M+ Revolut users",
      },
      {
        id: 2,
        icon: <FiBookOpen />,
        title: "Read our blog",
        subtitle: "Follow the latest news and stories",
      },
      {
        id: 3,
        icon: <AiOutlineQuestionCircle />,
        title: "Get help in the app",
        subtitle: "Just head to Help in the app",
      },
    ],
  },
  calltoactions: {
    cta1: {
      title: "SomaliaSky is the best way to find & discover the great local businesses",
      content:
        "Somalia sky is the one stop for all the businesses  ",
      btntext: "Create Account",
      btnurl: "/sign-up",
      shapes: [
        {
          img: symble1,
        },
        {
          img: symble2,
        },
        {
          img: symble3,
        },
        {
          img: symble4,
        },
      ],
    },
    cta2: {
      title: "SomaliaSky Android and IOS App are Available!",
      content:
        "Download our official applications and enjoy a unique experience of buying or selling through our website or application.",
      img: cta2mobileimg,
      featurelists: [
        {
          icon: <GoFile />,
          text: "Real Time Listing",
        },
        {
          icon: <FiFilter />,
          text: "Budget Filter For Budget",
        },
        {
          icon: <AiOutlineQuestionCircle />,
          text: "Notification Price Reduction",
        },
      ],
      shapes: [
        {
          img: symble1,
        },
        {
          img: symble2,
        },
        {
          img: symble3,
        },
        {
          img: symble4,
        },
      ],
    },
    cta3: {
      title: "SomaliaSky is the best way to find & discover the great local businesses",
      content:
        "Somalia sky is the one stop for all the businesses  ",
      btntext: "Create Account",
      btnurl: "/sign-up",
    },
    cta4: {
      title: "Want to Join with us?",
      content:
        "Want to get products? Want to increase your sales? Feel free to join us",
      btntext: "Join Now",
      btnurl: "#",
    },
    newsletters: {
      title: "Subscribe to Newsletter!",
      content: "Subscribe to get latest updates and information.",
      btntext: "Subscribe",
      inputplaceholder: "Enter your email",
    },
  },
  contactdata: {
    title: "Our Office",
    img: Logo,
    desc: "Team SomaliaSky pleased to be at your service Get in touch with us and feel free to communicate",
    address: "Mogadishu, Somalia",
    phoneNum: "+962 7 8779 6133",
    email: "info@somaliasky.com",
    opendays: "Saturday To Thursday",
    opendaytime: "09:00 am - 06:00 pm",
    closeday: "Friday Closed",
    mapoverlay: {
      address: "Mogadishu, Somalia",
      city: "Park Avenue",
      number: "+962 7 8779 6133",
      // number2: "666 777 888",
      email1: "info@somaliasky.com",
      // email2: "inquiry@dirto.com",
    },
  },
  testimonialdata: {
    sectitle: "What Our Users Said",
    seccontent:
      "Somalia sky is the one stop for all the businesses ",
    sliders: [
      {
        id: 1,
        img: team1,
        title: "Richard Doe",
        designation: "united states",
        content:
          "Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des culpa officia deserunt mollit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?",
      },
      {
        id: 2,
        img: team1,
        title: "Denwen Evil",
        designation: "united kingdom",
        content:
          "Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des culpa officia deserunt mollit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?",
      },
      {
        id: 3,
        img: team1,
        title: "Collis Pong",
        designation: "melbourne, australia",
        content:
          "Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des culpa officia deserunt mollit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?",
      },
    ],
    tmimage: [
      {
        tmimg: Logo,
      },
      {
        tmimg: Logo,
      },
      {
        tmimg: Logo,
      },
      {
        tmimg: Logo,
      },
      {
        tmimg: Logo,
      },
      {
        tmimg: Logo,
      },
    ],
  },
  blogsidebar: {
    wAuthor: {
      img: team2,
      name: "Mark Williamson",
      designation: "Senior Web Developer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorem illo laborum magni, maxime omnis quam quod totam voluptatem voluptatibus?",
      sociallinks: [
        {
          icon: <FaFacebookF />,
          url: "https://facebook.com",
        },
        {
          icon: <FaTwitter />,
          url: "https://twitter.com",
        },
        {
          icon: <FaLinkedinIn />,
          url: "https://linkedin.com",
        },
        {
          icon: <FaDribbble />,
          url: "https://dribbble.com",
        },
        {
          icon: <FaBehance />,
          url: "https://behance.com",
        },
      ],
    },
    wPopularPosts: {
      title: "Popular Posts",
      items: [
        {
          img: similarimg,
          title: "The best sale marketer of the next year",
          titleLink: "/blog-single",
          date: "20 Jan, 2019",
          author: "TechyDevs",
          authorUrl: "https://techydevs.com",
          cardClass: "mb-3",
        },
        {
          img: similarimg,
          title: "How to make your ideas became true",
          titleLink: "/blog-single",
          date: "20 Jan, 2019",
          author: "TechyDevs",
          authorUrl: "https://techydevs.com",
          cardClass: "mb-3",
        },
        {
          img: similarimg,
          title: "What gets in the way of strategy",
          titleLink: "/blog-single",
          date: "20 Jan, 2019",
          author: "TechyDevs",
          authorUrl: "https://techydevs.com",
          cardClass: "mb-3",
        },
        {
          img: similarimg,
          title: "What gets in the way of strategy",
          titleLink: "/blog-single",
          date: "20 Jan, 2019",
          author: "TechyDevs",
          authorUrl: "https://techydevs.com",
          cardClass: "",
        },
      ],
    },
  },
  blogfullwidth: {
    items: [
      {
        img: img2,
        title: "50 Greatest Event Places in United Kingdom",
        titleLink: "/blog-single",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        date: "25 Dec, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
      {
        img: img2,
        title: "Top 10 Best Clothing Shops In Sydney",
        titleLink: "/blog-single",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        date: "25 Dec, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
      {
        img: img2,
        title: "Top 15 Greatest Hotels In United States",
        titleLink: "/blog-single",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        date: "27 Dec, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "492",
      },
      {
        img: img2,
        title: "50 Greatest Event Places In United Kingdom",
        titleLink: "/blog-single",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        date: "27 Dec, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "589",
      },
      {
        img: img2,
        title: "Top 10 Best Clothing Shops In Sydney",
        titleLink: "/blog-single",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        date: "27 Dec, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "134",
      },
    ],
    blgriditems: [
      {
        img: img2,
        title: "50 Greatest Event Places in United Kingdom",
        titleLink: "/blog-single",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        date: "12 Jan, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
      {
        img: img2,
        title: "Top 10 Best Clothing Shops In Sydney",
        titleLink: "/blog-single",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        date: "12 Jan, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
      {
        img: img2,
        title: "Top 15 Greatest Hotels In United States",
        titleLink: "/blog-single",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        date: "12 Jan, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
      {
        img: img2,
        title: "50 Greatest Event Places in United Kingdom",
        titleLink: "/blog-single",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        date: "12 Jan, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
      {
        img: img2,
        title: "Top 10 Best Clothing Shops In Sydney",
        titleLink: "/blog-single",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        date: "12 Jan, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
      {
        img: img2,
        title: "Top 15 Greatest Hotels In United States",
        titleLink: "/blog-single",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        date: "12 Jan, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
    ],
    bl2colitems: [
      {
        img: img2,
        title: "50 Greatest Event Places in United Kingdom",
        titleLink: "/blog-single",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        date: "12 Jan, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
      {
        img: img2,
        title: "Top 10 Best Clothing Shops In Sydney",
        titleLink: "/blog-single",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        date: "12 Jan, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
      {
        img: img2,
        title: "Top 15 Greatest Hotels In United States",
        titleLink: "/blog-single",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        date: "12 Jan, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
      {
        img: img2,
        title: "50 Greatest Event Places In United Kingdom",
        titleLink: "/blog-single",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        date: "12 Jan, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
      {
        img: img2,
        title: "Top 10 Best Clothing Shops In Sydney",
        titleLink: "/blog-single",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        date: "12 Jan, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
      {
        img: img2,
        title: "Top 15 Greatest Hotels In United States",
        titleLink: "/blog-single",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        date: "12 Jan, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
      {
        img: img2,
        title: "Top 10 Best Clothing Shops In Sydney",
        titleLink: "/blog-single",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        date: "12 Jan, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
      {
        img: img2,
        title: "Top 15 Greatest Hotels In United States",
        titleLink: "/blog-single",
        desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        date: "12 Jan, 2020",
        meta: "Tips & Tricks",
        metaLink: "#",
        author: "David Wise",
        authorImg: authorimg,
        readmore: "Read More",
        readmoreLink: "/blog-single",
        likes: "340",
      },
    ],
  },
  blogDetails: {
    img: mainimage,
    author: "David Wise",
    authorImg: authorimg,
    date: "12 Fab, 2020",
    meta: "Tips & Tricks",
    metaLink: "#",
    likes: "480",
    title: "How to Improve Your Customer Service Experience",
    desc1:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed",
    desc2:
      "Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.",
    desc3:
      "when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed",
    desc4:
      "Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price.",

    /* Blockquote */
    bgimg: mainimage,
    quoteIcon: <FaQuoteRight />,
    quoteDesc:
      "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.",
    name: "- Steve Jobs",
    designation: "Founder of Apple Inc.",

    /* desc Images */
    images: [
      {
        img: img2,
      },
      {
        img: img2,
      },
      {
        img: img2,
      },
    ],
    bltags: {
      title: "Tags: ",
      lists: [
        {
          path: "#",
          title: "Travel",
        },
        {
          path: "#",
          title: "Food",
        },
        {
          path: "#",
          title: "Gym",
        },
      ],
    },
  },
  latestarticles: {
    sectitle: "Latest Tips & Articles",
    seccontent:
      "Somalia sky is the one stop for all the businesses ",
    btntext: "View All Post",
    btnurl: "/blog-grid",
    items: [
      {
        img: img2,
        title: "50 Greatest Event Places in United Kingdom",
        date: "25 Dec,  2020",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        author: "David Wise",
        authorImg: authorimg,
        likeNum: "244",
        cardUrl: "/blog-single",
      },
      {
        img: img2,
        title: "Top 10 Best Clothing Shops In Sydney",
        date: "26 Dec,  2020",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        author: "Mark Wins",
        authorImg: authorimg,
        likeNum: "535",
        cardUrl: "/blog-single",
      },
      {
        img: img2,
        title: "Top 15 Greatest Hotels In United States",
        date: "27 Dec,  2020",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem eaque ipsa quae ab illo inventore incididunt ut labore et dolore magna",
        author: "Matt Derry",
        authorImg: authorimg,
        likeNum: "294",
        cardUrl: "/blog-single",
      },
    ],
  },
  authors: {
    sectitle: "Meet Top Authors",
    seccontent:
      "Top 700+ famous authors on the Dirto. consectetur adipisicing elit Adipisci culpa possimus quis voluptatibus!",
    sliders: [
      {
        authorImg: team2,
        authorName: "Steven Harvey",
        city: "Australia",
        authorStatus: "Power Author",
        powerauthor: true,
        listingNum: "120",
        followers: "49",
        following: "49",
        buttonTxt: "Follow",
        buttonIcon: <FiPlus />,
      },
      {
        authorImg: team2,
        authorName: "Alex Smith",
        city: "United States",
        authorStatus: "Elite Author",
        powerauthor: false,
        listingNum: "130",
        followers: "55",
        following: "24",
        buttonTxt: "Follow",
        buttonIcon: <FiPlus />,
      },
      {
        authorImg: team2,
        authorName: "Sirazz Khan",
        city: "United Kingdom",
        authorStatus: "Elite Author",
        powerauthor: false,
        listingNum: "130",
        followers: "55",
        following: "24",
        buttonTxt: "Follow",
        buttonIcon: <FiPlus />,
      },
      {
        authorImg: team2,
        authorName: "Daniel Wave",
        city: "Italy",
        authorStatus: "Power Author",
        powerauthor: true,
        listingNum: "130",
        followers: "55",
        following: "24",
        buttonTxt: "Follow",
        buttonIcon: <FiPlus />,
      },
      {
        authorImg: team2,
        authorName: "Juhen Villa",
        city: "Bangladesh",
        authorStatus: "Elite Author",
        powerauthor: false,
        listingNum: "130",
        followers: "55",
        following: "24",
        buttonTxt: "Follow",
        buttonIcon: <FiPlus />,
      },
      {
        authorImg: team2,
        authorName: "Daniel Villa",
        city: "Costa Rica",
        authorStatus: "Power Author",
        powerauthor: true,
        listingNum: "130",
        followers: "55",
        following: "24",
        buttonTxt: "Follow",
        buttonIcon: <FiPlus />,
      },
      {
        authorImg: team2,
        authorName: "Jhon Doe",
        city: "France",
        authorStatus: "Power Author",
        powerauthor: true,
        listingNum: "130",
        followers: "55",
        following: "24",
        buttonTxt: "Follow",
        buttonIcon: <FiPlus />,
      },
    ],
  },
  clientlogos: [logo1, logo1, logo1, logo1, logo1, logo1, logo1],
  footerdata: {
    footerlogo: darklogo,
    footerdesc:
      "Team SomaliaSky pleased to be at your service Get in touch with us and feel free to communicate.",
    sociallinks: [
      {
        icon: <FaFacebookF />,
        url: "https://facebook.com",
      },
      {
        icon: <FaTwitter />,
        url: "https://twitter.com",
      },
      {
        icon: <FaLinkedinIn />,
        url: "https://linkedin.com",
      },
      {
        icon: <FaDribbble />,
        url: "https://dribbble.com",
      },
      {
        icon: <FaBehance />,
        url: "https://behance.com",
      },
    ],
    footerquicklinks: {
      title: "Quick Links",
      links: [
        {
          path: "/about",
          text: "about us",
        },
        {
          path: "/sign-up",
          text: "sign up",
        },
        {
          path: "/login",
          text: "log in",
        },
        {
          path: "/add-listing/new",
          text: "add listing",
        },
        {
          path: "/contact",
          text: "contact us",
        },
        {
          path: "/pricing",
          text: "pricing",
        },
      ],
    },
    footercategories: {
      title: "Categories",
      links: [
        {
          path: "/",
          text: "Home",
        },
        {
          path: "/index2",
          text: "Gate of Somalia",
        },
        {
          path: "/index3",
          text: "Restaurants",
        },

        {
          path: "/index4",
          text: "Jobs",
        },
        {
          path: "/index5",
          text: "Sales",
        },
        {
          path: "/index6",
          text: "Rent",
        },
      ],
    },
    footercontact: {
      title: "Contact With Us",
      lists: [
        {
          icon: <AiOutlineHome />,
          text: "Mogadishu, Somalia",
        },
        {
          icon: <FiHeadphones />,
          text: "+962 7 8779 6133",
        },
        {
          icon: <FaRegEnvelope />,
          text: "info@somaliasky.com",
        },
      ],
    },
    copyright: {
      menus: [
        {
          path: "#",
          title: "Terms & Conditions",
        },
        {
          path: "#",
          title: "Privacy Policy",
        },
        {
          path: "#",
          title: "Help Center",
        },
      ],
      languages: [
        "English",
        "Bangladesh",
        "Nepal",
        "America",
        "Arabic",
        "England",
      ],
    },
  },
};
export default sectiondata;
