import styled from "styled-components";

import { TChildren } from "@/util/types";

type TBlueButton = {
  children?: TChildren;
};

const BlueButton = ({ children, ...props }: TBlueButton) => {
  return <ButtonLayout {...props}>{children}</ButtonLayout>;
};

export default BlueButton;

const ButtonLayout = styled.button`
  color: ${({ theme }) => theme.grayScaleColors.offWhite};
  background-color: ${({ theme }) => theme.colors.basicBlue};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`;
