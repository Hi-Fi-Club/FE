import 'styled-components';

declare module 'styled-components' {
  type TGrayScaleColors =
    | 'titleActive' | 'font' | 'lightFont'
    | 'placeHolder' | 'line' | 'inputBackground'
    | 'background' | 'offWhite';
  type TColors =
    | 'secondary' | 'lightBlue' | 'darkBlue'
    | 'success' | 'lightGreen' | 'darkGreen'
    | 'error' | 'lightRed' | 'darkRed';

  export interface DefaultTheme {
    grayScaleColors: {
      [color in TGrayScaleColors]: string;
    };
    colors: {
      [color in TColors]: string;
    };
  }
}
