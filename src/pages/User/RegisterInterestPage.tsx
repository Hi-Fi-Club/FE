// 개인정보등록 : 관심사
import styled from "styled-components";
import { useState } from "react";
import { SelectInterest, SelectInterestResult } from "components/User/RegisterInterest";
import { INIT_INDEX } from "@/util/constants";
import { TSelectedInfo } from "@/util/types";

const RegisterInterestPage = () => {
  const [selectedInfo, setSelectedInfo] = useState<TSelectedInfo>({
    selectedMainIdx: INIT_INDEX,
    isMax: false,
    items: [],
  });

  return (
    <InterestLayout>
      <div className="interest__inner">
        <InterestRow>
          <SelectInterest {...{ selectedInfo, setSelectedInfo }} />
        </InterestRow>

        {selectedInfo.items.length > 0 && (
          <InterestRow>
            <SelectInterestResult {...{ selectedInfo, setSelectedInfo }} />
          </InterestRow>
        )}
      </div>
    </InterestLayout>
  );
};

export default RegisterInterestPage;

const InterestLayout = styled.div`
  position: relative;
  min-height: 100vh;
  ${({ theme }) => theme.flexSet()}

  .interest__inner {
    height: calc(100vh / 2);

    ${({ theme: { media } }) => media.desktop} {
      font-size: 1.2rem;
    }
  }
`;

const InterestRow = styled.div`
  position: relative;
  height: fit-content;
  padding: 3vh 0;
`;
