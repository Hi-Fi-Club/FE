import React, { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import RoundButton from "./RoundButton";

type TTargetButtonProps = {
  displayName: string;
  onDeleteItemClick: (e: React.MouseEvent | MouseEvent) => void;
  // items: string[];
  // setItems: Dispatch<SetStateAction<string[]>>;
};

const TargetButton = ({ displayName, onDeleteItemClick }: TTargetButtonProps) => {
  const [isHoverState, setHoverState] = useState(false);

  // const handleHover = () => setHoverState((prev) => !prev);
  const handleMouseEnter = () => isHoverState || setHoverState((prev) => !prev);
  const handleMouseLeave = () => isHoverState && setHoverState((prev) => !prev);

  return (
    <TargetButtonLayout onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <SelectedItemButton disableRipple={true}>{displayName}</SelectedItemButton>
      {isHoverState && (
        <DeleteButton onClick={onDeleteItemClick}>
          <IoClose />
        </DeleteButton>
      )}
    </TargetButtonLayout>
  );
};

export default TargetButton;

const TargetButtonLayout = styled.div`
  position: relative;
`;

const SelectedItemButton = styled(RoundButton)`
  background-color: ${({ theme }) => theme.grayScaleColors.titleActive};
  color: ${({ theme }) => theme.grayScaleColors.offWhite};
  &:hover {
    background-color: ${({ theme }) => theme.grayScaleColors.titleActive};
    cursor: default;
  }
`;

const DeleteButton = styled.button`
  ${({ theme }) => theme.flexSet()};
  padding: 0;
  margin: 0;

  position: absolute;
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.8em;
  right: 3px;
  top: 2.5px;
`;
