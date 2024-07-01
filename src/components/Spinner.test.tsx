import React from "react";
import { render } from "@testing-library/react";
import Spinner from "./Spinner";
import logo from "../logo.svg";

describe("Spinner Component", () => {
    test("renders spinner image", () => {
        const { getByAltText } = render(<Spinner />);
        const spinnerImage = getByAltText("spinner");
        expect(spinnerImage).toBeInTheDocument();
        expect(spinnerImage).toHaveAttribute("src", logo);
        expect(spinnerImage).toHaveClass("spinner");
    });
});
