import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const COLORS = {
  primary: "#e16c14",
  secondary: "#444262",
  tertiary: "#0f8ec9",
  red: "#f23b57",
  blue: "#10adff",
  white: "#ffffff",
  green: "green",
  blackOpacity10: "rgba(0,0,0,0.1)",
  blackOpacity20: "rgba(0,0,0,0.2)",
  blackOpacity30: "rgba(0,0,0,0.3)",
  blackOpacity40: "rgba(0,0,0,0.4)",
  blackOpacity50: "rgba(0,0,0,0.5)",
  gray: "#83829A",
  secondaryGray: "rgba(84, 76, 76, 0.14)",
  gray2: "#C1C0C8",
  black: "#000000",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 24,
  padding2: 12,
  padding3: 16,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, SHADOWS };
