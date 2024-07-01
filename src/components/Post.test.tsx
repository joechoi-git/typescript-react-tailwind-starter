import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Post from "./Post";

// Mock the fetch function
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe("Post component", () => {
    test("renders loading spinner while fetching data", async () => {
        // Mock the response for loading spinner test
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ id: 1, title: "Mock Post Title", body: "Mock Post Body" })
        });

        render(
            <MemoryRouter initialEntries={["/posts/1"]}>
                <Routes>
                    <Route path="/posts/:id" element={<Post />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByTestId("spinner")).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
        });
    });

    test("renders post data after loading", async () => {
        // Mock the response for post data test
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ id: 1, title: "Mock Post Title", body: "Mock Post Body" })
        });

        render(
            <MemoryRouter initialEntries={["/posts/1"]}>
                <Routes>
                    <Route path="/posts/:id" element={<Post />} />
                </Routes>
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText("Mock Post Title")).toBeInTheDocument();
            expect(screen.getByText("Mock Post Body")).toBeInTheDocument();
        });
    });

    // Add more tests as needed
});
