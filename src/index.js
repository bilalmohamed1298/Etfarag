import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { MediaProvider } from "./Components/MediaContext";
import { SearchContextProvider } from "./Components/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchContextProvider>
        <MediaProvider>
          <App />
        </MediaProvider>
      </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
