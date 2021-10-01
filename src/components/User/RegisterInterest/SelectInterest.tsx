import { useMemo, useCallback, useState, useEffect } from "react";

import * as S from "./style";

import { getMainInterests, getDetailInterests } from "util/dataFetching/userInfo";
import { MAX_SELECT_NUM, INIT_INDEX } from "util/constants";
import { TInterestDetailProp, TInterestInfo, TInterestSelectProps } from "@/util/types";

const InterestSelect = ({ selectedInfo, setSelectedInfo, ...props }: TInterestSelectProps) => {
  const [interestInfo, setInterestInfo] = useState<TInterestInfo>({ main: [], detail: [] });

  // 데이터 요청
  const fetchInterests = async () => {
    const interestsMain = await getMainInterests();
    setInterestInfo({ main: interestsMain, detail: [] });
  };
  const fetchDetailInterests = async (mainId: number) => {
    const detailInterests = await getDetailInterests(mainId);
    setInterestInfo((info) => ({ ...info, detail: detailInterests }));
  };

  useEffect(() => {
    if (selectedInfo.selectedMainIdx < 0) return;
    fetchDetailInterests(selectedInfo.selectedMainIdx);
  }, [selectedInfo.selectedMainIdx]);

  useEffect(() => {
    fetchInterests();
  }, []);

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
      interestInfo.main?.map(({ name, id }) => (
        <S.InterestButton
          key={id}
          selected={selectedInfo.selectedMainIdx === id}
          onClick={handleInterestMainBtnClick(id)}
        >
          {name}
        </S.InterestButton>
      )),
    [interestInfo.main, handleInterestMainBtnClick, selectedInfo.selectedMainIdx],
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
    if (!interestInfo.detail || interestInfo.detail <= 0) return;
    return interestInfo.detail?.map(({ detailId, name }: TInterestDetailProp) => {
      const { selectedMainIdx, items } = selectedInfo;
      const selectedSubItem = items.find(({ mainIdx, subIdx }) => mainIdx === selectedMainIdx && subIdx === detailId);
      const currColor = selectedSubItem ? "primary" : "default";
      return (
        <S.InterestButton
          key={detailId}
          variant="outlined"
          color={currColor}
          onClick={handleInterestSubBtnClick(detailId)}
        >
          {name}
        </S.InterestButton>
      );
    });
  }, [handleInterestSubBtnClick, interestInfo.detail, selectedInfo]);

  return (
    <S.InterestBox {...props}>
      {/* ㅇㅇ에 추후 현재 로그인 계정의 이름 넣기 */}
      <span>ㅇㅇ님의 관심분야를 선택해주세요</span>
      {mainCategoryBtns.length > 0 && <S.InteresButtonBox>{mainCategoryBtns}</S.InteresButtonBox>}
      {selectedInfo.selectedMainIdx > INIT_INDEX && subCategoryBtns && (
        <S.InteresButtonBox>{subCategoryBtns}</S.InteresButtonBox>
      )}
    </S.InterestBox>
  );
};

export default InterestSelect;
