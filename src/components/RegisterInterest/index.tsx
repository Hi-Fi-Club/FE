import { useState } from "react";
import styled, { css } from "styled-components";
import { Container } from "@material-ui/core";
import RoundButton from "../Common/Buttons/RoundButton";
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

const RegisterInterest = () => {
  const [selectedBtnInfo, setSelectedBtnInfo] = useState<ISelectedBtnInfo>({
    mainIdx: -1,
    subIdxs: [],
  });

  const handleInterestBtnClick = (e: React.MouseEvent | MouseEvent, idx: number, category: TCategoryType) => {
    setSelectedBtnInfo((state) => {
      const mainIdx = category === "main" ? (idx === state.mainIdx ? -1 : idx) : state.mainIdx;
      const subIdxs =
        category === "sub"
          ? state.subIdxs.includes(idx)
            ? state.subIdxs.filter((subIdx: number) => subIdx !== idx)
            : state.subIdxs.concat(idx)
          : state.subIdxs;

      const isClearSubIdxs = state.mainIdx === -1 || (category === "main" && state.mainIdx !== idx);

      return {
        ...state,
        mainIdx,
        subIdxs: isClearSubIdxs ? [] : subIdxs,
      };
    });
  };

  const mainCategoryBtns = intersetData.map(({ value }, idx) => (
    <InterestButton
      key={idx}
      selected={selectedBtnInfo.mainIdx === idx}
      onClick={(e) => handleInterestBtnClick(e, idx, "main")}
    >
      {value}
    </InterestButton>
  ));

  const subCategoryBtns = intersetData
    .find((_, i) => i === selectedBtnInfo.mainIdx)
    ?.subCategories.map(({ value }, idx) => (
      <InterestButton
        key={idx}
        variant="outlined"
        color={selectedBtnInfo.subIdxs.includes(idx) ? "primary" : "default"}
        onClick={(e) => handleInterestBtnClick(e, idx, "sub")}
      >
        {value}
      </InterestButton>
    ));

  return (
    <RegisterInterestLayout>
      <InterestRow>
        <InterestBox>
          <NoticeSpan>ㅇㅇ님의 관심분야를 선택해주세요</NoticeSpan>
          {mainCategoryBtns.length > 0 && <ButtonBox>{mainCategoryBtns}</ButtonBox>}
        </InterestBox>

        {selectedBtnInfo.mainIdx > -1 && subCategoryBtns && subCategoryBtns.length > 0 && (
          <InterestBox>
            <SeparatedLine />
            <ButtonBox>{subCategoryBtns}</ButtonBox>
          </InterestBox>
        )}
      </InterestRow>

      {selectedBtnInfo.subIdxs.length > 0 && (
        <InterestResultRow>
          <SeparatedLine />
          <InterestResultBox>
            <ButtonBox>
              {/* 추후 기능 생성 */}
              <SelectedItemButton disableRipple={true}>React</SelectedItemButton>
              <SelectedItemButton disableRipple={true}>Java</SelectedItemButton>
              <SelectedItemButton disableRipple={true}>프랑스어</SelectedItemButton>
              <SelectedItemButton disableRipple={true}>Flutter</SelectedItemButton>
              <SelectedItemButton disableRipple={true}>영어</SelectedItemButton>
            </ButtonBox>
            <NextButton variant="outlined">다음 (1/2)</NextButton>
          </InterestResultBox>
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
  grid-template-rows: 40% 40%;
`;

const InterestRow = styled.div`
  position: relative;
  height: fit-content;
  top: 30%;
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
`;

const InterestResultBox = styled(InterestBox)`
  flex-direction: row;
`;

// ---

const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const NoticeSpan = styled.div`
  margin-bottom: 8px;
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
  &:hover{
    background-color: ${({ theme }) => theme.grayScaleColors.titleActive};
  }
`;

const NextButton = styled(RoundButton)`
  border-radius: 12px;
  margin: 0 8px;
`;

const SeparatedLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 8px 0;
  box-shadow: 0 0.4px 0.4px ${({ theme }) => theme.grayScaleColors.placeHolder};
`;
