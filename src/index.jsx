import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GA4React from "ga-4-react";

const ga4react = new GA4React(import.meta.env.REACT_APP_GOOGLE_ANALYTICS_ID);

(async () => {
  await ga4react.initialize();
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
})();