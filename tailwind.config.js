/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: {
          "100": "#735ea6",
          "200": "#575283",
          "300": "#4d387f",
          "400": "#312c5a",
        },
        snow: "#fffcfc",
        lightcoral: "#ff8383",
        gainsboro: "#e6e6e6",
        steelblue: "#635e8c",
        goldenrod: "#ffca37",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        kalam: "Kalam",
        "croissant-one": "'Croissant One'",
      },
    },
    fontSize: {
      xs: "12px",
      lgi: "19px",
      base: "16px",
      "11xl": "30px",
      "smi-4": "12.4px",
      "20xl-6": "39.6px",
      "13xl": "32px",
      "5xl": "24px",
      xl: "20px",
      lg: "18px",
      "55xl": "74px",
      "40xl": "59px",
      "25xl": "44px",
      "6xl": "25px",
      "41xl": "60px",
      "29xl": "48px",
      "17xl": "36px",
      "13xl-4": "32.4px",
      "7xl": "26px",
      "54xl": "73px",
      "39xl": "58px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
