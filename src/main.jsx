import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  SelectedIndexContextProvider,
  CampaignIdsContextProvider,
  CountryContextProvider,
  TemplateContextProvider,
  DataContextProvider,
} from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SelectedIndexContextProvider>
      <CampaignIdsContextProvider>
        <DataContextProvider>
          <CountryContextProvider>
            <TemplateContextProvider>
              <App />
            </TemplateContextProvider>
          </CountryContextProvider>
        </DataContextProvider>
      </CampaignIdsContextProvider>
    </SelectedIndexContextProvider>
  </React.StrictMode>
);
