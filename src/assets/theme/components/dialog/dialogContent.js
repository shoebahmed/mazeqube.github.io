// Material Kit 2 React base styles
import typography from "../../base/typography";
import borders from "../../base/borders";
import colors from "../../base/colors";

// Material Kit 2 React helper functions
import pxToRem from "../../functions/pxToRem";

const { size } = typography;
const { text } = colors;
const { borderWidth, borderColor } = borders;

export default {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.md,
      color: text.main,
    },

    dividers: {
      borderTop: `${borderWidth[1]} solid ${borderColor}`,
      borderBottom: `${borderWidth[1]} solid ${borderColor}`,
    },
  },
};
