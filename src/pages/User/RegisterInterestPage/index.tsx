// 개인정보등록 : 관심사
import { useState } from "react";
import { SelectInterest, SelectInterestResult, TSelectedInfo } from "components/User/RegisterInterest";
import { USER } from "@/util/constants";
import * as S from './style';

const {
  RegisterInterest: { INIT_INDEX },
} = USER;

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
          <SelectInterest {...{ selectedInfo, setSelectedInfo }} />
        </S.InterestRow>

        {selectedInfo.items.length > 0 && (
          <S.InterestRow>
            <SelectInterestResult {...{ selectedInfo, setSelectedInfo }} />
          </S.InterestRow>
        )}
      </div>
    </S.InterestLayout>
  );
};

export default RegisterInterestPage;
