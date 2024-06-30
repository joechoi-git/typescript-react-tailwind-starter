import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: "selector",
    theme: {
        extend: {
            colors: {
                primary: "#0E2439",
                darkmode: "#242424"
            }
        }
    },
    plugins: []
    // plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
