import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { RoundButton } from "components/Common/Buttons";
import { TSelectItem } from "components/User/RegisterInterest/RegisterInterest";
import { ROUTE, TARGET_COUNT } from "util/constants";

interface submitProps {
  searchLogs: string[];
  interests: TSelectItem[];
}
function LocationSubmit({ searchLogs, interests }: submitProps) {
  const history = useHistory();
  const handleNextPage = () => {
    if (searchLogs.length !== TARGET_COUNT) return;

    //서버에 post요청보내기
    //응답코드 200일때,
    history.push(ROUTE.MAIN);
  };
  return (
    <NextButton onClick={handleNextPage} variant="outlined">
      다음 ({searchLogs.length}/2)
    </NextButton>
  );
}

export default LocationSubmit;
const NextButton = styled(RoundButton)`
  border-radius: 12px;
  margin: 8px 0;
`;
