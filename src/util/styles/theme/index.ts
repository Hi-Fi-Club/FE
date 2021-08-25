import { DefaultTheme, css } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    basicBlue: "#1DA1F2",
    lightBlue: "#B7E4FF",
    darkBlue: "#086FAA",
    basicGreen: "#34C759",
    lightGreen: "#DDFFE6",
    darkGreen: "#00A028",
    error: "#FF3B30",
    lightRed: "#FFD1CF",
    darkRed: "#C60B00",
  },
  grayScaleColors: {
    titleActive: "#14142B",
    font: "#484653",
    lightFont: "#909096",
    placeHolder: "#A0A3BD",
    line: "#D9DBE9",
    inputBackground: "#EFF0F6",
    background: "#F7F7FC",
    offWhite: "#FEFEFE",
  },
  widthByDevice: {
    desktop: "1920px",
    mobile: "100vw",
  },
  flexSet: (horizon?: string, vertical?: string, direction?: string) => css`
    display: flex;
    justify-content: ${horizon || "center"};
    align-items: ${vertical || "center"};
    flex-direction: ${direction || "row"};
  `,
};

export default theme;
