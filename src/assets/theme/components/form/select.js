// Material Kit 2 React base styles
import colors from "../../base/colors";

// Material Kit 2 React helper functions
import pxToRem from "../../functions/pxToRem";

const { transparent } = colors;

export default {
  styleOverrides: {
    select: {
      display: "grid",
      alignItems: "center",
      padding: `0 ${pxToRem(12)} !important`,

      "& .Mui-selected": {
        backgroundColor: transparent.main,
      },
    },

    selectMenu: {
      background: "none",
      height: "none",
      minHeight: "none",
      overflow: "unset",
    },

    icon: {
      display: "none",
    },
  },
};
