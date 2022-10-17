// Material Kit 2 React base styles
import typography from "../../base/typography";

// Material Kit 2 React helper functions
import pxToRem from "../../functions/pxToRem";

const { size } = typography;

export default {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};
