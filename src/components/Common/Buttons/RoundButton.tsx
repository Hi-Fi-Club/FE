import { TChildren } from "@/util/types";
import { Button, PropTypes } from "@material-ui/core";
import styled from "styled-components";

type TRoundButton = {
  variant?: "text" | "outlined" | "contained";
  color?: PropTypes.Color;
  disableRipple?: boolean;
  onClick?: (e: React.MouseEvent | MouseEvent) => void;
  children?: TChildren;
};

const RoundButton = ({ variant, color, disableRipple, onClick, children, ...props }: TRoundButton) => (
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
export type { TRoundButton };

const RoundButtonLayout = styled(Button)<TRoundButton>`
  padding: 5px 20px;
  border-radius: 24px;
  text-transform: none;
`;
