module.exports = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0078ff",
        transparent: "transparent",
        white: "#FFFFFF",
        gray: {
          10: "#101828",
          9: "#1D2939",
          8: "#344054",
          7: "#475467",
          6: "#667085",
          5: "#98A2B3",
          4: "#D0D5DD",
          3: "#E4E7EC",
          2: "#F2F4F7",
          1: "#F9FAFB",
        },
      },
      fontSize: {
        header1: ["128px", "179px"],
        header2: ["96px", "134px"],
        header3: ["64px", "90px"],
        header4: ["48px", "67px"],
        header5: ["40px", "56px"],
        header6: ["36px", "50px"],
        body1: ["24px", "34px"],
        body2: ["20px", "28px"],
        body3: ["18px", "25px"],
        body4: ["16px", "22px"],
        body5: ["14px", "20px"],
        body6: ["13px", "18px"],
        body7: ["12px", "17px"],
      },
    },
  },
  plugins: [],
};
