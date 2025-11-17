import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Productpage2 from "./components/Productpage2";
import HomePage from "./components/Homepage";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page1" element={<HomePage />} />
        <Route path="/product" element={<Productpage2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
