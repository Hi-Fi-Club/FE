import { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import RoundButton from "components/Common/Buttons/RoundButton";
import { intersetData } from "util/mockData";

type TCategoryType = "main" | "sub";
interface IInterestButton {
  selected?: boolean;
  category?: TCategoryType;
}
interface ISelectedBtnInfo {
  mainIdx: number;
  subIdxs: number[];
}

const INIT_INDEX = -1;

const RegisterInterest = () => {
  const [selectedBtnInfo, setSelectedBtnInfo] = useState<ISelectedBtnInfo>({
    mainIdx: INIT_INDEX,
    subIdxs: [],
  });

  const handleInterestMainBtnClick = (e: React.MouseEvent | MouseEvent, idx: number) => 
    setSelectedBtnInfo((state) => {
      const { mainIdx }  = state;
      return {
        ...state,
        mainIdx: (idx === mainIdx ? INIT_INDEX : idx),
      }
    });
 
  const handleInterestSubBtnClick = (e: React.MouseEvent | MouseEvent, idx: number) => {
    setSelectedBtnInfo((state) => {
      const { subIdxs } = state;
      const newSubIdxs = subIdxs.includes(idx) ? subIdxs.filter((subIdx:number) => subIdx !== idx) : subIdxs.concat(idx);
      return {
        ...state,
        subIdxs: newSubIdxs,
      }
    });
  }

  const mainCategoryBtns = intersetData.map(({ value, id }) => (
    <InterestButton
      key={id}
      selected={selectedBtnInfo.mainIdx === id}
      onClick={(e) => handleInterestMainBtnClick(e, id)}
    >
      {value}
    </InterestButton>
  ));

  const subCategoryBtns = intersetData
    .find(({ id: mainId }) => mainId === selectedBtnInfo.mainIdx)
    ?.subCategories.map(({ value, id }) => (
      <InterestButton
        key={id}
        variant="outlined"
        color={selectedBtnInfo.subIdxs.includes(id) ? "primary" : "default"}
        onClick={(e) => handleInterestSubBtnClick(e, id)}
      >
        {value}
      </InterestButton>
    ));

  return (
    <RegisterInterestLayout>
      <InterestRow>
        <InterestBox>
          <span>ㅇㅇ님의 관심분야를 선택해주세요</span>
          {mainCategoryBtns.length > 0 && <ButtonBox>{mainCategoryBtns}</ButtonBox>}
          {selectedBtnInfo.mainIdx > INIT_INDEX && subCategoryBtns && (
            <>
              <SeparatedLine />
              <ButtonBox>{subCategoryBtns}</ButtonBox>
            </>
          )}
        </InterestBox>
      </InterestRow>

      {selectedBtnInfo.subIdxs.length > 0 && (
        <InterestResultRow>
          <InterestBox>
            <SeparatedLine />
            <ButtonBox>
              {/* state.mainIdx에 선택된 mockData -> mainId의 subCategories에서 state.subIdxs에 들어있는 subId를 가져와서 렌더링 (find)  */}
              {selectedBtnInfo.subIdxs.map((el, idx)=><SelectedItemButton key={el} disableRipple={true}>{el}</SelectedItemButton>)}
            </ButtonBox>

            <Link to="/location">
              <NextButton variant="outlined">다음 (1/2)</NextButton>
            </Link>
          </InterestBox>
        </InterestResultRow>
      )}
    </RegisterInterestLayout>
  );
};

export default RegisterInterest;

const RegisterInterestLayout = styled(Container)`
  padding-top: 64px;
  position: relative;
  height: calc(90vh - 64px);

  display: grid;
  grid-template-rows: 40%;
`;

const InterestRow = styled.div`
  position: relative;
  height: fit-content;
  top: 25%;
`;

const InterestResultRow = styled(InterestRow)`
  flex-direction: row;
  top: 20%;
`;

const InterestBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 4px;
`;
// ---

const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const InterestButton = styled(RoundButton)<IInterestButton>`
  ${({ selected }) =>
    selected &&
    css`
      background-color: #5cbdfa;
      color: ${({ theme }) => theme.grayScaleColors.offWhite};
      &:hover {
        background-color: #79c6f6;
      }
    `};
`;

const SelectedItemButton = styled(RoundButton)`
  background-color: ${({ theme }) => theme.grayScaleColors.titleActive};
  color: ${({ theme }) => theme.grayScaleColors.offWhite};
  &:hover {
    background-color: ${({ theme }) => theme.grayScaleColors.titleActive};
  }
`;

const NextButton = styled(RoundButton)`
  border-radius: 12px;
  margin: 8px 0;
`;

const SeparatedLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 4px 0;
  box-shadow: 0 0.4px 0.4px ${({ theme }) => theme.grayScaleColors.placeHolder};
`;
