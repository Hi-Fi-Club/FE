// 개인정보등록 : 관심사
import { useState } from "react";
import {
  InterestSelect,
  InterestSelectResult,
  TSelectedInfo,
  style as S,
  consts
} from "components/User/RegisterInterest";

const { INIT_INDEX } = consts;

const RegisterInterestPage = () => {
  const [selectedInfo, setSelectedInfo] = useState<TSelectedInfo>({
    selectedMainIdx: INIT_INDEX,
    isMax: false,
    items: [],
  });

  return (
    <S.InterestLayout>
      <S.InterestRow>
        <InterestSelect {...{ selectedInfo, setSelectedInfo }} />
      </S.InterestRow>

      {selectedInfo.items.length > 0 && (
        <S.InterestResultRow>
          <InterestSelectResult {...{ selectedInfo, setSelectedInfo }} />
        </S.InterestResultRow>
      )}
    </S.InterestLayout>
  );
};

export default RegisterInterestPage;
