import React, { useState } from "react";
import styled from "styled-components";
import RoundButton from "./RoundButton";

type TTargetButtonProps = {
  displayName: string;
  onDeleteItemClick: (e : React.MouseEvent | MouseEvent) => void,
  // items: string[];
  // setItems: Dispatch<SetStateAction<string[]>>;
};

const TargetButton = ({ displayName, onDeleteItemClick }: TTargetButtonProps) => {
  const [isHoverState, setHoverState] = useState(false);

  const handleHover = () => setHoverState((prev) => !prev);

  return (
    <HoverActive onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <SelectedItemButton disableRipple={true}>{displayName}</SelectedItemButton>
      <DeleteButton isHoverState={isHoverState} onClick={onDeleteItemClick}>
        ×
      </DeleteButton>
    </HoverActive>
  );
};

interface Delete {
  isHoverState: boolean;
}

const HoverActive = styled.div``;
const DeleteButton = styled.button<Delete>`
  display: ${({ isHoverState }) => (isHoverState ? "block" : "none")};
  position: relative;
  top: -11px;
  left: -8px;
`;
const SelectedItemButton = styled(RoundButton)`
  background-color: ${({ theme }) => theme.grayScaleColors.titleActive};
  color: ${({ theme }) => theme.grayScaleColors.offWhite};
  &:hover {
    background-color: ${({ theme }) => theme.grayScaleColors.titleActive};
  }
`;
export default TargetButton;
