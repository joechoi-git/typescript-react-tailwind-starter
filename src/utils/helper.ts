export function getCurrentDate(): string {
    const currentDate = new Date();

    // Options for formatting the date
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long", // Full name of the day (e.g., "Monday")
        year: "numeric", // Full numeric representation of the year (e.g., "2024")
        month: "long", // Full name of the month (e.g., "June")
        day: "numeric" // Numeric representation of the day (e.g., "28")
    };

    // Format the date according to the options
    const formattedDate: string = currentDate.toLocaleDateString("en-US", options);

    return formattedDate;
}
