import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";


const base_ip = window.location.href.replace("http://", "").split(":")[0];
axios.defaults.baseURL = "http://192.168.1.215:5002";
// axios.defaults.baseURL = "http://" + base_ip + ":5001";
// axios.defaults.baseURL = "http://" + "192.168.2.40" + ":5001";


ReactDOM.render(
    <React.StrictMode>

            <App />

    </React.StrictMode>,
    document.getElementById("root")
);
reportWebVitals();
