import { getCurrentDate } from "./helper";

describe("getCurrentDate function", () => {
    test("returns the current date in the expected format", () => {
        // Mocking the current date to ensure consistent test results
        const mockDate = new Date("2024-06-28T12:00:00Z");
        const originalDate = Date;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        global.Date = jest.fn(() => mockDate) as any;

        // Expected formatted date
        const expectedDate = "Friday, June 28, 2024";

        // Call the function and assert the result
        const currentDate = getCurrentDate();
        expect(currentDate).toBe(expectedDate);

        // Restore the original Date object
        global.Date = originalDate;
    });
});
