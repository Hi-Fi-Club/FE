import { Dispatch, SetStateAction } from "react";
import { getLocationName } from "../RegisterLocation";
import { RoundButton, TargetButton } from "components/Common/Buttons";
import { useHistory } from "react-router-dom";
import { ROUTE } from "util/constants";
import styled from "styled-components";
interface LocationClickResultProps {
  isSameDong: boolean;
  searchLogs: string[];
  setSearchLogs: Dispatch<SetStateAction<string[]>>;
}
export default function LocationClickResult({ isSameDong, searchLogs, setSearchLogs }: LocationClickResultProps) {
  const history = useHistory();
  const handleDeleteTarget = (location: string) => () => {
    setSearchLogs((prev: string[]) => prev.filter((target) => target !== location));
  };

  const handleNextPage = () => {
    if (searchLogs.length !== 2) return;
    history.push(ROUTE.MAIN);
  };

  return (
    <LocationBox>
      <ButtonBox>
        {searchLogs.map((location, idx) => {
          const { cityName, dongName } = getLocationName(location);
          return !isSameDong ? (
            <TargetButton key={idx} displayName={dongName} onDeleteItemClick={handleDeleteTarget(location)} />
          ) : (
            <TargetButton
              key={idx}
              displayName={cityName + " " + dongName}
              onDeleteItemClick={handleDeleteTarget(location)}
            />
          );
        })}
      </ButtonBox>

      <NextButton onClick={handleNextPage} variant="outlined">
        다음 ({searchLogs.length}/2)
      </NextButton>
    </LocationBox>
  );
}
const LocationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 50px;
`;

const NextButton = styled(RoundButton)`
  border-radius: 12px;
  margin: 8px 0;
`;
