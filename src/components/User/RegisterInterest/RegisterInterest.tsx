import { useMemo, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router";

import { RoundButton, TargetButton } from "components/Common/Buttons";
import { intersetData } from "util/mockData";
import { ROUTE } from "util/constants";
import { getMainInterests } from 'util/dataFetching/userInfo'
type TSelectItem = {
  mainIdx: number;
  subIdx: number;
  value?: string;
};
type TSelectedInfo = {
  selectedMainIdx: number;
  isMax: boolean;
  items: TSelectItem[];
};

const INIT_INDEX = -1;
const MAX_SELECT_NUM = 5;

const RegisterInterest = () => {
  
  const history = useHistory();
  const [selectedInfo, setSelectedInfo] = useState<TSelectedInfo>({
    selectedMainIdx: INIT_INDEX,
    isMax: false,
    items: [],
  });

  // 대분류 선택
  const handleInterestMainBtnClick = (idx: number) => (e: React.MouseEvent | MouseEvent) =>
    setSelectedInfo((state) => {
      const { selectedMainIdx } = state;
      return {
        ...state,
        selectedMainIdx: idx === selectedMainIdx ? INIT_INDEX : idx,
      };
    });

  // 소분류 선택 (관심사 추가)
  const handleInterestSubBtnClick = (idx: number) => (e: React.MouseEvent | MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    setSelectedInfo((state) => {
      const { selectedMainIdx, items } = state;

      const isDupItem = items.find(({ mainIdx, subIdx }) => mainIdx === selectedMainIdx && subIdx === idx);
      const appliedItems =
        items.length < MAX_SELECT_NUM
          ? items.concat({ mainIdx: selectedMainIdx, subIdx: idx, value: target.innerText })
          : items;
      const nextItems = isDupItem
        ? items.filter(({ mainIdx, subIdx }) => !(mainIdx === selectedMainIdx && subIdx === idx))
        : appliedItems;

      return {
        ...state,
        items: nextItems,
        isMax: nextItems.length >= MAX_SELECT_NUM,
      };
    });
  };

  // 현재 선택한 관심사들에서 클릭한 관심사 제거
  const handleSelectedItemBtnClick = (selectItemId: string) => (e: React.MouseEvent | MouseEvent) => {
    const [mainIdx, subIdx] = selectItemId.split("|").map((v) => +v);
    if (mainIdx <= 0 || subIdx <= 0) return;
    setSelectedInfo((state) => {
      const { items: currItems } = state;
      const items = currItems.filter((item) => mainIdx !== item.mainIdx || subIdx !== item.subIdx);
      return {
        ...state,
        items,
        isMax: items.length >= MAX_SELECT_NUM,
      };
    });
  };

  // 관심사 5개 선택한 후 주변 장소 설정 페이지로 이동
  const handleNextButtonClick = (e: React.MouseEvent | MouseEvent) => {
    const { isMax } = selectedInfo;
    isMax && history.push(ROUTE.USER.LOCATION);
  };

  useEffect(() => {}, []);
  const interestsMain = getMainInterests()
  console.log(interestsMain)
  const mainCategoryBtns = useMemo(
    () =>
      intersetData.map(({ value, id }) => (
        <InterestButton
          key={id}
          selected={selectedInfo.selectedMainIdx === id}
          onClick={handleInterestMainBtnClick(id)}
        >
          {value}
        </InterestButton>
      )),
    [selectedInfo.selectedMainIdx],
  );

  const subCategoryBtns = useMemo(() => {
    const { selectedMainIdx, items } = selectedInfo;
    const mainCategoryData = intersetData.find(({ id: mainId }) => mainId === selectedInfo.selectedMainIdx);

    if (!mainCategoryData) return [];

    return mainCategoryData.subCategories.map(({ value, id }) => {
      const selectedSubItem = items.find(({ mainIdx, subIdx }) => mainIdx === selectedMainIdx && subIdx === id);
      const currColor = selectedSubItem ? "primary" : "default";
      return (
        <InterestButton key={id} variant="outlined" color={currColor} onClick={handleInterestSubBtnClick(id)}>
          {value}
        </InterestButton>
      );
    });
  }, [selectedInfo]);

  return (
    <RegisterInterestLayout>
      <InterestRow>
        <InterestBox>
          <span>ㅇㅇ님의 관심분야를 선택해주세요</span>
          {mainCategoryBtns.length > 0 && <ButtonBox>{mainCategoryBtns}</ButtonBox>}
          {selectedInfo.selectedMainIdx > INIT_INDEX && subCategoryBtns && (
            <>
              <SeparatedLine />
              <ButtonBox>{subCategoryBtns}</ButtonBox>
            </>
          )}
        </InterestBox>
      </InterestRow>

      {selectedInfo.items.length > 0 && (
        <InterestResultRow>
          <InterestBox>
            <SeparatedLine />
            <ButtonBox>
              {selectedInfo.items.map(({ mainIdx, subIdx, value }) => (
                <TargetButton
                  key={`${mainIdx}|${subIdx}`}
                  displayName={value || ""}
                  onDeleteItemClick={handleSelectedItemBtnClick(`${mainIdx}|${subIdx}`)}
                />
              ))}
            </ButtonBox>
            <NextButton
              variant="outlined"
              onClick={handleNextButtonClick}
              disableRipple={!selectedInfo.isMax}
              selected={selectedInfo.isMax}
            >
              다음 {`(${selectedInfo.items.length} / ${MAX_SELECT_NUM})`}
            </NextButton>
          </InterestBox>
        </InterestResultRow>
      )}
    </RegisterInterestLayout>
  );
};

export default RegisterInterest;

type TCategoryType = "main" | "sub";
type TInterestButton = {
  selected?: boolean;
  category?: TCategoryType;
};
type TNextButton = Pick<TInterestButton, "selected">;

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

const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const InterestButton = styled(RoundButton)<TInterestButton>`
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

const NextButton = styled(RoundButton)<TNextButton>`
  border-radius: 12px;
  margin: 8px 0;
  background-color: ${({ selected }) => (selected ? `transparent` : `rgba(0, 0, 0, 0.04)`)};
  user-select: ${({ selected }) => (selected ? `auto` : `none`)};
  pointer-events: ${({ selected }) => (selected ? `auto` : `none`)}; ;
`;

const SeparatedLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 4px 0;
  box-shadow: 0 0.4px 0.4px ${({ theme }) => theme.grayScaleColors.placeHolder};
`;
