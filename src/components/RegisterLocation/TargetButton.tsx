import { useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import RoundButton from "components/Common/Buttons/RoundButton";
interface ResultProp {
  location: string;
  targetLocations: string[];
  setTargetLocations: Dispatch<SetStateAction<string[]>>;
}

const TargetButton = ({ location, targetLocations, setTargetLocations }: ResultProp) => {
  const [isHoverState, setHoverState] = useState(false);
  const handleHover = () => {
    setHoverState((prev) => !prev);
  };

  const handleDelete = (location: string) => {
    setTargetLocations(targetLocations.filter((target) => target !== location));
  };
  return (
    <HoverActive onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <SelectedItemButton disableRipple={true}>{location}</SelectedItemButton>
      <DeleteButton isHoverState={isHoverState} onClick={() => handleDelete(location)}>
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
  // 중복 (관심사 페이지)
  background-color: ${({ theme }) => theme.grayScaleColors.titleActive};
  color: ${({ theme }) => theme.grayScaleColors.offWhite};
  &:hover {
    background-color: ${({ theme }) => theme.grayScaleColors.titleActive};
  }
`;
export default TargetButton;
