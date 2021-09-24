import { useState } from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";

import LocationInput from "./LocationInput";
import LocationSearchResult from "./LocationSearchResult";
import LocationClickResult from "./LocationClickResult";
import { LocationResult } from "../RegisterLocation";

const RegisterLocation = () => {
  const [locationResult, setLocationResult] = useState<LocationResult[]>([]);
  const [searchLogs, setSearchLogs] = useState<string[]>([]);
  const [isSameDong, setSameDong] = useState<boolean>(false);

  return (
    <RegisterLocationLayout>
      <LocationRow>
        <LocationBox>
          <NoticeParagraph>ㅇㅇ님의 관심있는 동네를 알려주세요</NoticeParagraph>
          <NoticeParagraph>2 지역의 스터디 정보를 볼 수 있어요</NoticeParagraph>
        </LocationBox>

        <LocationInput setLocationResult={setLocationResult} />
        <LocationSearchResult {...{ locationResult, setLocationResult, searchLogs, setSearchLogs, setSameDong }} />
        <LocationClickResult {...{ isSameDong, searchLogs, setSearchLogs }} />
      </LocationRow>
    </RegisterLocationLayout>
  );
};

export default RegisterLocation;

const RegisterLocationLayout = styled(Container)`
  padding-top: 64px;
  position: relative;
  height: calc(90vh - 64px);
  display: grid;
  grid-template-rows: 40%;
`;

const LocationRow = styled.div`
  position: relative;
  height: fit-content;
  top: 25%;
  margin: 0 auto;
  display: grid;
  row-gap: 20px;
`;

export const LocationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NoticeParagraph = styled.p`
  padding: 8px 0;
`;
