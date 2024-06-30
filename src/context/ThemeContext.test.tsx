import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeContextProvider, { useTheme } from "./ThemeContext";

describe("ThemeContextProvider", () => {
    const TestComponent = () => {
        const { theme, toggleTheme } = useTheme();
        return (
            <div>
                <span data-testid="theme-value">{theme ? "dark" : "light"}</span>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        );
    };

    const renderWithProvider = (ui: React.ReactElement) => {
        return render(<ThemeContextProvider>{ui}</ThemeContextProvider>);
    };

    test("provides the default theme value", () => {
        renderWithProvider(<TestComponent />);
        expect(screen.getByTestId("theme-value")).toHaveTextContent("light");
    });

    test("toggles the theme value", () => {
        renderWithProvider(<TestComponent />);

        const button = screen.getByRole("button", { name: /toggle theme/i });
        fireEvent.click(button);
        expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");

        fireEvent.click(button);
        expect(screen.getByTestId("theme-value")).toHaveTextContent("light");
    });

    test('adds/removes "dark" class on the document body', () => {
        renderWithProvider(<TestComponent />);

        const button = screen.getByRole("button", { name: /toggle theme/i });
        fireEvent.click(button);
        expect(document.body.classList.contains("dark")).toBe(true);

        fireEvent.click(button);
        expect(document.body.classList.contains("dark")).toBe(false);
    });
});
