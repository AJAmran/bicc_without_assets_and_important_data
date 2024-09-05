/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Variant 1
      colors: {
        primary: "#1E293B", // Dark Blue
        secondary: "#991B1B", // Light Blue
        accent: "#2563EB", // Red
        background: "#F1F5F9", // Light Gray
        text: "#1F2937", // Dark Gray
        muted: "#F3F4F6", // Very Light Gray
        highlight: "#E5E7EB", // Lighter Gray
      },
      // Variant 2
      // colors: {
      //   primary: "#991B1B", // Dark Red
      //   secondary: "#64748B", // Cool Gray
      //   accent: "#67E8F9", // Bright Yellow
      //   background: "#F3F4F6", // Light Gray
      //   text: "#28303D", // Dark Blue-Gray
      //   muted: "#DCE2E8", // Very Light Blue-Gray
      //   highlight: "#CBD6E2", // Light Blue-Gray
      // },
      // Variant 3
      // colors: {
      //   primary: "#1E40AF", // Deep Blue
      //   secondary: "#1E293B", // Soft Blue
      //   accent: "#D97706", // Warm Yellow
      //   background: "#ECEFF4", // Very Light Gray-Blue
      //   text: "#4C566A", // Medium Gray
      //   muted: "#E5E9F0", // Light Gray-Blue
      //   highlight: "#D8DEE9", // Very Light Gray-Blue
      // },
      // Variant 4
      // colors: {
      //   primary: "#155E75", // Dark Teal
      //   secondary: "#BE123C", // Sky Blue
      //   accent: "#ED8936", // Orange
      //   background: "#F7FAFC", // White
      //   text: "#2D3748", // Dark Gray-Blue
      //   muted: "#EDF2F7", // Very Light Gray-Blue
      //   highlight: "#E2E8F0", // Light Gray-Blue
      // },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
        body: ["Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
