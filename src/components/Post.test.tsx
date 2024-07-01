import React from "react";
import { render, screen } from "@testing-library/react"; // , waitFor, act
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Post from "./Post";

jest.useFakeTimers();

// Mock the Spinner component
// eslint-disable-next-line react/display-name
jest.mock("./Spinner", () => () => <div>Loading...</div>);

describe("Post Component", () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("renders loading spinner initially", () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            status: 200,
            json: async () => ({ id: 1, title: "Test Title", body: "Test Body" })
        });

        render(
            <MemoryRouter initialEntries={["/post/1"]}>
                <Routes>
                    <Route path="/post/:id" element={<Post />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    /*
    test("renders post data when fetch is successful", async () => {
        (global.fetch as jest.Mock).mockResolvedValueOnce(
            Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve({ id: 1, title: "Test Title", body: "Test Body" })
            })
        );

        render(
            <MemoryRouter initialEntries={["/post/1"]}>
                <Routes>
                    <Route path="/post/:id" element={<Post />} />
                </Routes>
            </MemoryRouter>
        );

        // Fast-forward the timer to simulate the 1 second delay
        act(() => {
            jest.advanceTimersByTime(2000);
        });

        await waitFor(() => {
            expect(screen.getByText("Test Title")).toBeInTheDocument();
        });

        expect(screen.getByText("Test Body")).toBeInTheDocument();
    });

    test("renders error message when fetch fails", async () => {
        (global.fetch as jest.Mock).mockRejectedValueOnce(new Error("Network response was not ok"));

        render(
            <MemoryRouter initialEntries={["/post/1"]}>
                <Routes>
                    <Route path="/post/:id" element={<Post />} />
                </Routes>
            </MemoryRouter>
        );

        // Fast-forward the timer to simulate the 1 second delay
        act(() => {
            jest.advanceTimersByTime(1000);
        });

        await waitFor(() => {
            expect(screen.getByText("Network response was not ok")).toBeInTheDocument();
        });
    });
    */
});
