/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle, rgba(114, 201, 232, 0.25) 0%, rgba(255, 255, 255, 1) 50%, rgba(174, 226, 244, 0.25) 100%)",
      },
    },
  },
  plugins: [],
};
