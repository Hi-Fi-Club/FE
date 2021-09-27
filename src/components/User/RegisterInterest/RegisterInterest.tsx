import { useState } from "react";

<<<<<<< HEAD
import { RoundButton, TargetButton } from "components/Common/Buttons";
import { ROUTE } from "util/constants";
import { getMainInterests, getDetailInterests } from "util/dataFetching/userInfo";
export type TSelectItem = {
  mainIdx: number;
  subIdx: number;
  value?: string;
};
type TSelectedInfo = {
  selectedMainIdx: number;
  isMax: boolean;
  items: TSelectItem[];
};

interface mainProp {
  id: number;
  name: string;
}
interface interestInfo {
  main: mainProp[];
  detail: any;
}
interface detailsProp {
  detailId: number;
  name: string;
}
const INIT_INDEX = -1;
const MAX_SELECT_NUM = 5;

const RegisterInterest = () => {
  const history = useHistory();
  const [interestInfo, setInterestInfo] = useState<interestInfo>({ main: [], detail: [] });
=======
import InterestSelectBox from "./InterestSelectBox";
import InterestSelectResultBox from "./InterestSelectResultBox";
import { TSelectedInfo } from "./type";
import * as S from "./style";
import { INIT_INDEX } from "./const";

const RegisterInterest = () => {
>>>>>>> 91bebce ([#43] refactor : RegisterInterest 관련 컴포넌트 리팩토링 중)
  const [selectedInfo, setSelectedInfo] = useState<TSelectedInfo>({
    selectedMainIdx: INIT_INDEX,
    isMax: false,
    items: [],
  });

<<<<<<< HEAD
  // 관심사 5개 선택한 후 주변 장소 설정 페이지로 이동
  const handleNextButtonClick = (e: React.MouseEvent | MouseEvent) => {
    const { isMax, items } = selectedInfo;
    isMax && history.push({ pathname: ROUTE.USER.LOCATION, state: items });
  };
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

  const mainCategories = interestInfo.main?.map(({ name, id }) => (
    <InterestButton key={id} selected={selectedInfo.selectedMainIdx === id} onClick={handleInterestMainBtnClick(id)}>
      {name}
    </InterestButton>
  ));

  const subCategories = interestInfo.detail?.map(({ detailId, name }: detailsProp) => {
    const { selectedMainIdx, items } = selectedInfo;
    const selectedSubItem = items.find(({ mainIdx, subIdx }) => mainIdx === selectedMainIdx && subIdx === detailId);
    const currColor = selectedSubItem ? "primary" : "default";
    return (
      <InterestButton key={detailId} variant="outlined" color={currColor} onClick={handleInterestSubBtnClick(detailId)}>
        {name}
      </InterestButton>
    );
  });

  return (
    <RegisterInterestLayout>
      <InterestRow>
        <InterestBox>
          <span>ㅇㅇ님의 관심분야를 선택해주세요</span>
          {interestInfo.main.length > 0 && <ButtonBox>{mainCategories}</ButtonBox>}
          {interestInfo.detail.length > 0 && (
            <>
              <SeparatedLine />
              <ButtonBox>{subCategories}</ButtonBox>
            </>
          )}
        </InterestBox>
      </InterestRow>
=======
  return (
    <S.InterestLayout>
      <S.InterestRow>
        <InterestSelectBox {...{ selectedInfo, setSelectedInfo }} />
      </S.InterestRow>
>>>>>>> 91bebce ([#43] refactor : RegisterInterest 관련 컴포넌트 리팩토링 중)

      {selectedInfo.items.length > 0 && (
        <S.InterestResultRow>
          <InterestSelectResultBox {...{ selectedInfo, setSelectedInfo }} />
        </S.InterestResultRow>
      )}
    </S.InterestLayout>
  );
};

export default RegisterInterest;
