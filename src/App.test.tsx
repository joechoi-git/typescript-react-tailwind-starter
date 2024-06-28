import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
    test("renders navigation links", () => {
        render(<App />);

        // Get the navigation element
        const nav = screen.getByRole("navigation");
        console.log("nav", nav.outerHTML);

        // Check if navigation links are rendered
        expect(within(nav).getByText(/home/i)).toBeInTheDocument();
        expect(within(nav).getByText(/about/i)).toBeInTheDocument();
        expect(within(nav).getByText(/users/i)).toBeInTheDocument();
    });

    test("renders correct content for each route", async () => {
        render(<App />);

        // Get the navigation element
        const nav = screen.getByRole("navigation");

        // Click on the Home link and check if the Home component is displayed
        const homeLink = within(nav).getByText(/home/i);
        userEvent.click(homeLink);
        await new Promise((r) => setTimeout(r, 100));
        console.log("home clicked");
        screen.debug();
        expect(screen.getByRole("heading", { name: /home/i })).toBeInTheDocument();

        // Click on the About link and check if the About component is displayed
        const aboutLink = within(nav).getByText(/about/i);
        userEvent.click(aboutLink);
        await new Promise((r) => setTimeout(r, 100));
        console.log("about clicked");
        screen.debug();
        expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();

        // Click on the Users link and check if the Users component is displayed
        const usersLink = within(nav).getByText(/users/i);
        userEvent.click(usersLink);
        await new Promise((r) => setTimeout(r, 100));
        console.log("users clicked");
        screen.debug();
        expect(screen.getByRole("heading", { name: /users/i })).toBeInTheDocument();
    });

    test("matches snapshot", () => {
        const { asFragment } = render(<App />);

        // Use toMatchSnapshot to compare the rendered output with a stored snapshot
        expect(asFragment()).toMatchSnapshot();
    });
});
