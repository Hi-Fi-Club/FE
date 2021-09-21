import { useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { Container } from "@material-ui/core";
import RoundButton from "components/Common/Buttons/RoundButton";
import { intersetData } from "util/mockData";
import { useHistory } from "react-router";

type TCategoryType = "main" | "sub";
interface IInterestButton {
  selected?: boolean;
  category?: TCategoryType;
}

type TSelectItem = {
  mainIdx: number;
  subIdx: number;
  value?: string;
};
interface ISelectedInfo {
  selectedMainIdx: number;
  items: TSelectItem[];
}

const INIT_INDEX = -1;
const MAX_SELECT_NUM = 5;

const RegisterInterest = () => {
  const history = useHistory();
  const [selectedBtnInfo, setSelectedBtnInfo] = useState<ISelectedInfo>({
    selectedMainIdx: INIT_INDEX,
    items: [],
  });

  // 대분류 선택
  const handleInterestMainBtnClick = (e: React.MouseEvent | MouseEvent, idx: number) =>
    setSelectedBtnInfo((state) => {
      const { selectedMainIdx } = state;
      return {
        ...state,
        selectedMainIdx: idx === selectedMainIdx ? INIT_INDEX : idx,
      };
    });

  // 소분류 선택 (관심사 추가)
  const handleInterestSubBtnClick = (e: React.MouseEvent | MouseEvent, idx: number) => {
    const target = e.target as HTMLButtonElement;
    setSelectedBtnInfo((state) => {
      const { selectedMainIdx, items } = state;

      const isDupItem = items.find(({ mainIdx, subIdx }) => mainIdx === selectedMainIdx && subIdx === idx);
      const nextItems = isDupItem
        ? items.filter(({ mainIdx, subIdx }) => !(mainIdx === selectedMainIdx && subIdx === idx))
        : items.concat({ mainIdx: selectedMainIdx, subIdx: idx, value: target.innerText });

      return {
        ...state,
        items: nextItems,
      };
    });
  };

  // 현재 선택한 관심사들에서 클릭한 관심사 제거
  const handleSelectedItemBtnClick = (e: React.MouseEvent | MouseEvent, selectItemId: string) => {
    const [mainIdx, subIdx] = selectItemId.split("|").map((v) => +v);
    if (mainIdx <= 0 || subIdx <= 0) return;
    setSelectedBtnInfo((state) => {
      const { items } = state;
      return {
        ...state,
        items: items.filter((item) => mainIdx !== item.mainIdx || subIdx !== item.subIdx),
      };
    });
  };

  // 관심사 5개 선택한 후 주변 장소 설정 페이지로 이동
  const handleNextButtonClick = (e: React.MouseEvent | MouseEvent) => {
    const { items } = selectedBtnInfo;
    items.length === 5 && history.push('/location');
  };

  const mainCategoryBtns = useMemo(
    () =>
      intersetData.map(({ value, id }) => (
        <InterestButton
          key={id}
          selected={selectedBtnInfo.selectedMainIdx === id}
          onClick={(e) => handleInterestMainBtnClick(e, id)}
        >
          {value}
        </InterestButton>
      )),
    [selectedBtnInfo.selectedMainIdx],
  );

  const subCategoryBtns = useMemo(() => {
    const { selectedMainIdx, items } = selectedBtnInfo;
    const mainCategoryData = intersetData.find(({ id: mainId }) => mainId === selectedBtnInfo.selectedMainIdx);

    if (!mainCategoryData) return [];

    return mainCategoryData.subCategories.map(({ value, id }) => {
      const selectedSubItem = items.find(({ mainIdx, subIdx }) => mainIdx === selectedMainIdx && subIdx === id);
      const currColor = selectedSubItem ? "primary" : "default";
      return (
        <InterestButton key={id} variant="outlined" color={currColor} onClick={(e) => handleInterestSubBtnClick(e, id)}>
          {value}
        </InterestButton>
      );
    });
  }, [selectedBtnInfo]);

  return (
    <RegisterInterestLayout>
      <InterestRow>
        <InterestBox>
          <span>ㅇㅇ님의 관심분야를 선택해주세요</span>
          {mainCategoryBtns.length > 0 && <ButtonBox>{mainCategoryBtns}</ButtonBox>}
          {selectedBtnInfo.selectedMainIdx > INIT_INDEX && subCategoryBtns && (
            <>
              <SeparatedLine />
              <ButtonBox>{subCategoryBtns}</ButtonBox>
            </>
          )}
        </InterestBox>
      </InterestRow>

      {selectedBtnInfo.items.length > 0 && (
        <InterestResultRow>
          <InterestBox>
            <SeparatedLine />
            <ButtonBox>
              {selectedBtnInfo.items.map(({ mainIdx, subIdx, value }) => (
                <SelectedItemButton
                  key={`${mainIdx}|${subIdx}`}
                  disableRipple={true}
                  onClick={(e) => handleSelectedItemBtnClick(e, `${mainIdx}|${subIdx}`)}
                >
                  {value}
                </SelectedItemButton>
              ))}
            </ButtonBox>
            {selectedBtnInfo.items.length === MAX_SELECT_NUM && (
              <NextButton variant="outlined" onClick={handleNextButtonClick}>
                다음 (1/2)
              </NextButton>
            )}
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
