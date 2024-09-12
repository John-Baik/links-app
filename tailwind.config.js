/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "inter-bold": ["Inter-Bold", "sans-serif"],
        "inter-semi-bold": ["Inter-SemiBold", "sans-serif"],
        "inter-regular": ["Inter-Regular", "sans-serif"],
        "inter-variable": ["Inter-VariableFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
