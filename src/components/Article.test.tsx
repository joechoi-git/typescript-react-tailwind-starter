import React from "react";
import { render, screen } from "@testing-library/react";
import Article, { ArticleProps } from "./Article";

describe("Article Component", () => {
    const articleProps: ArticleProps = {
        title: "Example Article Title",
        content: "Example content of the article."
    };

    test("renders article with props correctly", () => {
        render(<Article {...articleProps} />);

        // Assert that the article title and content are rendered correctly
        expect(screen.getByText(articleProps.title)).toBeInTheDocument();
        expect(screen.getByText(articleProps.content)).toBeInTheDocument();
    });

    test("matches snapshot", () => {
        const { asFragment } = render(<Article {...articleProps} />);

        // Use toMatchSnapshot to compare the rendered output with a stored snapshot
        expect(asFragment()).toMatchSnapshot();
    });
});
