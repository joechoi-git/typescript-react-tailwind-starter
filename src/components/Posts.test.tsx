import React from "react";
import { render, waitFor, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Posts from "./Posts";

// Mock the fetch function
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe("Posts component", () => {
    test("renders loading spinner while fetching data", async () => {
        // Mock the response for loading spinner test
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => [] // Mock empty array for posts
        });

        render(
            <MemoryRouter>
                <Posts />
            </MemoryRouter>
        );

        expect(screen.getByTestId("spinner")).toBeInTheDocument();

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
        });

        await waitFor(() => {
            expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
        });
    });

    test("renders posts after loading", async () => {
        // Mock the response for posts data test
        const mockPosts = [
            { id: 1, title: "Post 1", body: "Body 1" },
            { id: 2, title: "Post 2", body: "Body 2" }
        ];
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockPosts
        });

        render(
            <MemoryRouter>
                <Posts />
            </MemoryRouter>
        );

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
        });

        await waitFor(() => {
            mockPosts.forEach((post) => {
                expect(screen.getByText(post.title)).toBeInTheDocument();
            });
        });
    });

    test("handles error state when fetch fails", async () => {
        // Mock the response for error state test
        const errorMessage = "Network error";
        mockFetch.mockRejectedValueOnce(new Error(errorMessage));

        render(
            <MemoryRouter>
                <Posts />
            </MemoryRouter>
        );

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
        });

        await waitFor(() => {
            expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
            expect(screen.getByText(errorMessage)).toBeInTheDocument();
        });
    });
});
