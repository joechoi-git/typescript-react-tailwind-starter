import React from "react";
import logo from "../logo.svg";
import "./Spinner.css";

export function Spinner(): React.JSX.Element {
    return <img src={logo} className="spinner" alt="spinner" />;
}

export default Spinner;
