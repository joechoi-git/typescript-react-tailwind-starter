import "@testing-library/jest-dom";
import "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom/jest-globals";

import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

/*
jest.mock("@mui/x-charts", () => ({
    BarChart: jest.fn().mockImplementation(({ children }) => children)
}));

jest.mock("./Chart", () => {
    return jest.fn(() => <div>Mock Chart</div>);
});
*/
