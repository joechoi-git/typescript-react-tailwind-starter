import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

// Mock the useTheme hook
jest.mock("../context/ThemeContext", () => ({
    useTheme: jest.fn()
}));

describe("ThemeToggle Component", () => {
    const mockToggleTheme = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("renders light mode icon when theme is light", () => {
        (useTheme as jest.Mock).mockReturnValue({ theme: false, toggleTheme: mockToggleTheme });

        render(<ThemeToggle />);

        expect(screen.getByRole("button")).toBeInTheDocument();
        expect(screen.getByTestId("light-mode-icon")).toBeInTheDocument();
    });

    test("renders dark mode icon when theme is dark", () => {
        (useTheme as jest.Mock).mockReturnValue({ theme: true, toggleTheme: mockToggleTheme });

        render(<ThemeToggle />);

        expect(screen.getByRole("button")).toBeInTheDocument();
        expect(screen.getByTestId("dark-mode-icon")).toBeInTheDocument();
    });

    test("calls toggleTheme when button is clicked", () => {
        (useTheme as jest.Mock).mockReturnValue({ theme: false, toggleTheme: mockToggleTheme });

        render(<ThemeToggle />);

        fireEvent.click(screen.getByRole("button"));
        expect(mockToggleTheme).toHaveBeenCalledTimes(1);
    });
});
