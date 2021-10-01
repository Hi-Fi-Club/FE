import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { getLocationName } from "../RegisterLocation";
import { LocationResult } from "./types";
interface locationResultProps {
  locationResult: LocationResult[];
  setLocationResult: Dispatch<SetStateAction<LocationResult[]>>;
  searchLogs: string[];
  setSearchLogs: Dispatch<SetStateAction<string[]>>;
  setSameDong: Dispatch<SetStateAction<boolean>>;
}

function LocationSearchResult({
  locationResult,
  setLocationResult,
  searchLogs,
  setSearchLogs,
  setSameDong,
}: locationResultProps) {
  const [countGuide, setCountGuide] = useState(false);
  const isAlreadyClicked = (region: string) => {
    return !!searchLogs.includes(region);
  };

  const isFullClicked = () => {
    return searchLogs.length > 1;
  };

  const isSameDongName = (region: string) => {
    return searchLogs.filter((log) => new RegExp(getLocationName(region).dongName).test(log)).length > 0;
  };

  const handleTargetLocation = (region: string) => {
    if (isAlreadyClicked(region)) return;

    if (isFullClicked()) {
      setCountGuide(true);
      setLocationResult([]);
      return;
    }

    setSameDong(isSameDongName(region));
    setCountGuide(false);
    setSearchLogs((prev) => prev.concat([region]));
  };

  return (
    <LocationHelpBox>
      {countGuide && <div>새 지역을 추가하시려면 기존 정보를 취소하고 진행해주세요.</div>}
      {locationResult.length > 0 && (
        <>
          <span>찾으시는 동네가 어디신가요?</span>
          <ul>
            {locationResult.map((location, idx) => (
              <li
                key={idx}
                onClick={() => handleTargetLocation(location?.address_name)}
              >{`•  ${location?.address_name}`}</li>
            ))}
          </ul>
        </>
      )}
    </LocationHelpBox>
  );
}

export default LocationSearchResult;
const LocationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const LocationHelpBox = styled(LocationBox)`
  justify-content: center;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.basicBlue};
  font-size: 16px;
  li {
    cursor: pointer;
    font-size: 14px;
  }
`;
