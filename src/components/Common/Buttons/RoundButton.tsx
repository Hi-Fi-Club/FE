import { TChildren } from "@/util/types";
import { Button, PropTypes } from "@material-ui/core";
import styled from "styled-components";

interface IRoundButton {
  variant?: "text" | "outlined" | "contained";
  color?: PropTypes.Color,
  disableRipple?: boolean;
  onClick?: (e: React.MouseEvent | MouseEvent) => void;
  children?: TChildren;
}

const RoundButton = ({ variant, color, disableRipple, onClick, children, ...props }: IRoundButton) => (
  <RoundButtonLayout
    variant={variant || "contained"}
    color={color || "default"}
    disableRipple={disableRipple}
    onClick={onClick}
    {...props}
  >
    {children || {}}
  </RoundButtonLayout>
);

export default RoundButton;

const RoundButtonLayout = styled(Button)<IRoundButton>`
  padding: 5px 20px;
  border-radius: 24px;
  text-transform: none;
`;
