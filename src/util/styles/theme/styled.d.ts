import "styled-components";
import Mixin from "../CommonStyledCSS";

declare module "styled-components" {
  type TGrayScaleColors =
    | "titleActive"
    | "font"
    | "lightFont"
    | "placeHolder"
    | "line"
    | "inputBackground"
    | "background"
    | "offWhite";
  type TColors =
    | "basicBlue"
    | "lightBlue"
    | "darkBlue"
    | "basicGreen"
    | "lightGreen"
    | "darkGreen"
    | "error"
    | "lightRed"
    | "darkRed";
  type TOptions = "horizon" | "vertical" | "direction";
  type TWidth = "desktop" | "mobile";

  export interface DefaultTheme {
    grayScaleColors: {
      [color in TGrayScaleColors]: string;
    };
    colors: {
      [color in TColors]: string;
    };
    widthByDevice: {
      [width in TWidth]: string;
    };
    flexSet: (horizon?: string, vertical?: string, direction?: string) => any;
  }
}
