import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ThemeContextProvider from "../context/ThemeContext";
import { ThemeToggle } from "./ThemeToggle";
import { Article } from "./Article";
import { Post } from "./Post";

export default function App(): React.JSX.Element {
    return (
        <ThemeContextProvider>
            <Router>
                <div className="text-black dark:text-white">
                    <nav>
                        <ThemeToggle />

                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/post">Post</Link>
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
                        <Route path="/post" element={<Post id={"1"} />} />
                    </Routes>
                </div>
            </Router>
        </ThemeContextProvider>
    );
}
