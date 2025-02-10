/** @type {import('tailwindcss').Config} */
const sharedConfig = require("@repo/tailwind-config/tailwindConfig");

module.exports = {
  ...sharedConfig,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
};
