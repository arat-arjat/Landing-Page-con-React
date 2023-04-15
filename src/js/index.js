//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/LandingPage.jsx";

//render your react application
import LandingPage from "./component/LandingPage.jsx";

ReactDOM.render(<LandingPage />, document.querySelector("#app")); 
