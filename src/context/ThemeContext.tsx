import React, { ReactNode, createContext, useCallback, useContext, useState } from "react";

interface ThemeContextType {
    theme: boolean;
    toggleTheme: () => void;
}
interface IProps {
    children: ReactNode;
}
export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: IProps) => {
    const [theme, setTheme] = useState(false);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => !prev);
        document.body.classList.toggle("dark");
    }, [theme]);
    const value = {
        theme,
        toggleTheme
    };
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
export default ThemeContextProvider;

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("Context must be used within a context provider");
    }
    return context;
};
