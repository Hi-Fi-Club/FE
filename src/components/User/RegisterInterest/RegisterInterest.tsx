import { useState } from "react";

import InterestSelectBox from "./InterestSelectBox";
import InterestSelectResultBox from "./InterestSelectResultBox";
import { TSelectedInfo } from "./type";
import * as S from "./style";
import { INIT_INDEX } from "./const";

const RegisterInterest = () => {
  const [selectedInfo, setSelectedInfo] = useState<TSelectedInfo>({
    selectedMainIdx: INIT_INDEX,
    isMax: false,
    items: [],
  });

  return (
    <S.InterestLayout>
      <S.InterestRow>
        <InterestSelectBox {...{ selectedInfo, setSelectedInfo }} />
      </S.InterestRow>

      {selectedInfo.items.length > 0 && (
        <S.InterestResultRow>
          <InterestSelectResultBox {...{ selectedInfo, setSelectedInfo }} />
        </S.InterestResultRow>
      )}
    </S.InterestLayout>
  );
};

export default RegisterInterest;
