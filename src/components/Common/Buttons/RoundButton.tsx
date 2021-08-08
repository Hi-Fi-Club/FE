import { TChildren } from "@/util/types";
import styled from "styled-components";

interface IRoundButton {
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  children?: TChildren;
}

const RoundButton = ({ backgroundColor, borderColor, color, children, ...props }: IRoundButton) => (
  <RoundButtonLayout
    backgroundColor={backgroundColor || "#000"}
    borderColor={borderColor || "#000"}
    color={color || "#FFF"}
    {...props}
  >
    {children || {}}
  </RoundButtonLayout>
);

export default RoundButton;

const RoundButtonLayout = styled.button<IRoundButton>`
  padding: 5px 20px;
  border-radius: 24px;
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  border: ${({ borderColor }) => `1px solid ${borderColor}`};
  color: ${({ color }) => `${color}`};
`;
