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
      <div className="interest__inner">
        <S.InterestRow>
          <InterestSelect {...{ selectedInfo, setSelectedInfo }} />
        </S.InterestRow>

        {selectedInfo.items.length > 0 && (
          <S.InterestRow>
            <InterestSelectResult {...{ selectedInfo, setSelectedInfo }} />
          </S.InterestRow>
        )}
      </div>
    </S.InterestLayout>
  );
};

export default RegisterInterestPage;
