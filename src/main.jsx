import { BrowserRouter, Route } from "react-router";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter basename="/my-space-tourism">
    <App />
  </BrowserRouter>,
);
