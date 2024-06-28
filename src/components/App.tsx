import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../logo.svg";
import "./App.css";
import { Article } from "./Article";

export default function App(): React.JSX.Element {
    return (
        <Router>
            <nav>
                <img src={logo} className="App-logo" alt="logo" />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route
                    path="/"
                    element={<Article title={"Home"} content={"Welcome to React App!"} />}
                />
                <Route
                    path="/about"
                    element={<Article title={"About"} content={"I am super awesome!"} />}
                />
                <Route
                    path="/users"
                    element={<Article title={"Users"} content={"How many folks came to visit?"} />}
                />
            </Routes>
        </Router>
    );
}
