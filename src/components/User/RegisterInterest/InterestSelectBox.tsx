import { useMemo, useCallback } from "react";

import * as S from "./style";
import { INIT_INDEX, MAX_SELECT_NUM } from "./const";
import RegisterButton from "../RegisterButton";
import { intersetData } from "util/mockData";
import { TInterestSelectProps } from "./type";

const InterestSelectBox = ({ selectedInfo, setSelectedInfo, ...props }: TInterestSelectProps) => {
  // 대분류 선택
  const handleInterestMainBtnClick = useCallback(
    (idx: number) => (e: React.MouseEvent | MouseEvent) =>
      setSelectedInfo((state) => {
        const { selectedMainIdx } = state;
        return {
          ...state,
          selectedMainIdx: idx === selectedMainIdx ? INIT_INDEX : idx,
        };
      }),
    [setSelectedInfo],
  );

  // 대분류 아이템
  const mainCategoryBtns = useMemo(
    () =>
      intersetData.map(({ value, id }) => (
        <RegisterButton
          key={id}
          selected={selectedInfo.selectedMainIdx === id}
          onClick={handleInterestMainBtnClick(id)}
        >
          {value}
        </RegisterButton>
      )),
    [selectedInfo.selectedMainIdx, handleInterestMainBtnClick],
  );

  // 소분류 선택 (관심사 추가)
  const handleInterestSubBtnClick = useCallback(
    (idx: number) => (e: React.MouseEvent | MouseEvent) => {
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
    },
    [setSelectedInfo],
  );

  // 소분류 아이템
  const subCategoryBtns = useMemo(() => {
    const { selectedMainIdx, items } = selectedInfo;
    const mainCategoryData = intersetData.find(({ id: mainId }) => mainId === selectedInfo.selectedMainIdx);

    if (!mainCategoryData) return [];

    return mainCategoryData.subCategories.map(({ value, id }) => {
      const selectedSubItem = items.find(({ mainIdx, subIdx }) => mainIdx === selectedMainIdx && subIdx === id);
      const currColor = selectedSubItem ? "primary" : "default";
      return (
        <RegisterButton key={id} variant="outlined" color={currColor} onClick={handleInterestSubBtnClick(id)}>
          {value}
        </RegisterButton>
      );
    });
  }, [selectedInfo, handleInterestSubBtnClick]);

  return (
    <S.InterestBox {...props}>
      {/* ㅇㅇ에 추후 현재 로그인 계정의 이름 넣기 */}
      <span>ㅇㅇ님의 관심분야를 선택해주세요</span>
      {mainCategoryBtns.length > 0 && <S.ButtonBox>{mainCategoryBtns}</S.ButtonBox>}
      {selectedInfo.selectedMainIdx > INIT_INDEX && subCategoryBtns && (
        <>
          <S.SeparatedLine />
          <S.ButtonBox>{subCategoryBtns}</S.ButtonBox>
        </>
      )}
    </S.InterestBox>
  );
};

export default InterestSelectBox;