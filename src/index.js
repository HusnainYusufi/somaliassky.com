import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./App.css";
import { createStore } from "redux";
import allReducers from "./Redux/Reducer";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18next
  .use(HttpApi)

  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    lng: "en",
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["localStorage"],
    },
    react: { useSuspense: false },
    backend: {
      loadPath: "https://api.somaliasky.com/api/{{lng}}",
      cache: {
        enabled: true,
        prefix: "i18next:",
      },
    },
  });
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

serviceWorker.unregister();
