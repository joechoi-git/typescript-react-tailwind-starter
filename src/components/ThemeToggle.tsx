import React from "react";
import { useTheme } from "../context/ThemeContext";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

export function ThemeToggle(): React.JSX.Element {
    const { theme, toggleTheme } = useTheme();
    const handleToggle = () => {
        toggleTheme();
    };
    return (
        <button
            onClick={handleToggle}
            className="w-[40px] h-[40px] flex items-center justify-center rounded-md border-2 border-black dark:border-white"
        >
            {theme ? <BsFillMoonStarsFill size={20} /> : <MdLightMode size={20} />}
        </button>
    );
}
