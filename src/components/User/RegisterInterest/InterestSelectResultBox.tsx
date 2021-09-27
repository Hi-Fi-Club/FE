import { useHistory } from "react-router-dom";
import { ROUTE } from "util/constants";
import RegisterButton from "../RegisterButton";
import { TargetButton } from "components/Common";

import { TInterestSelectProps } from "./type";
import * as S from "./style";
import { MAX_SELECT_NUM } from "./const";

const InterestSelectResultBox = ({ selectedInfo, setSelectedInfo, ...props }: TInterestSelectProps) => {
  const history = useHistory();

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

  return (
    <S.InterestBox>
      <S.SeparatedLine />
      <S.ButtonBox>
        {selectedInfo.items.map(({ mainIdx, subIdx, value }) => (
          <TargetButton
            key={`${mainIdx}|${subIdx}`}
            displayName={value || ""}
            onDeleteItemClick={handleSelectedItemBtnClick(`${mainIdx}|${subIdx}`)}
          />
        ))}
      </S.ButtonBox>
      <RegisterButton
        mode="next"
        variant="outlined"
        onClick={handleNextButtonClick}
        disableRipple={!selectedInfo.isMax}
        selected={selectedInfo.isMax}
      >
        다음 {`(${selectedInfo.items.length} / ${MAX_SELECT_NUM})`}
      </RegisterButton>
    </S.InterestBox>
  );
};

export default InterestSelectResultBox;