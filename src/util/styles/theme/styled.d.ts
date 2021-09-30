import "styled-components";

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
  type TDevices = "desktop" | "mobile";

  export interface DefaultTheme {
    grayScaleColors: {
      [color in TGrayScaleColors]: string;
    };
    colors: {
      [color in TColors]: string;
    };
    widthByDevice: {
      [device in TDevices]: string;
    };
    paddingByDevice: {
      [device in TDevices]: string;
    };
    flexSet: (horizon?: string, vertical?: string, direction?: string) => FlattenSimpleInterpolation;

    createResponse: ({ maxWidth: number, minWidth: number }) => string | null;
    media: {
      [device in TDevices]: string | null;
    };
  }
}
