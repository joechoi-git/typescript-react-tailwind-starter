import React from "react";
import logo from "../logo.svg";
import "./Spinner.css";

export default function Spinner(): React.JSX.Element {
    return <img src={logo} className="spinner" alt="spinner" data-testid="spinner" />;
}
