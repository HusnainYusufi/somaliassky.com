import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./App.css";
import { createStore } from "redux";
import allReducers from "./Redux/Reducer";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import common_en from "./assets/Locales/en/translation.json";
import common_ar from "./assets/Locales/ar/translation.json";
import common_so from "./assets/Locales/so/translation.json";
i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: ["en", "so", "ar"],
    // Options for language detector
    resources: {
      en: {
        common: common_en, // 'common' is our custom namespace
      },
      ar: {
        common: common_ar,
      },
      so: {
        common: common_so,
      },
    },
    // direction: "rtl",
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    // react: { useSuspense: false },
    // backend: {
    //   loadPath: "/assets/Locales/{{lng}}/translation.json",
    // },
  });
//The created store
const store = createStore(allReducers);

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
