import styled from "styled-components";

import { TChildren, TFont } from "util/types";

interface button {
  width: number;
  height: number;
  font: TFont;
  fontSize: number;
  children?: TChildren;
}

const BlueButton = ({ width, height, fontSize, font, children }: button) => {
  return (
    <ButtonLayout width={width} height={height} fontSize={fontSize} font={font}>
      {children}
    </ButtonLayout>
  );
};

export default BlueButton;

const ButtonLayout = styled.button<button>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  font-family: ${({ font }) => font};
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.grayScaleColors.offWhite};
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`;
