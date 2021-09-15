import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import useInput from "@/hooks/useInput";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import RoundButton from "components/Common/Buttons/RoundButton";
import TargetButton from "./TargetButton";
import { ROUTE } from "util/constants";
type Address = {
  [key: string]: string;
};
interface LocationResult {
  address: Address;
  address_name: string;
  address_type: string;
  road_address: null;
  x: string;
  y: string;
}
const RegisterLocation = () => {
  const history = useHistory();
  const [locationInput, onChangeLocation, setLocationInput] = useInput("");
  const [countGuide, setCountGuide] = useState(false);
  const [locationResult, setLocationResult] = useState<LocationResult[]>([]);
  const [targetLocations, setTargetLocations] = useState<string[]>([]);

  const handleSubmitLocation = async () => {
    const hostURL = `http://dapi.kakao.com/v2/local/search/address.json?query=${locationInput}`;
    const REST_API_KEY = `95a473cfb21c6a0fee070ac4328bb2b3`;
    const header = { headers: { Authorization: `KakaoAK ${REST_API_KEY}` } };
    const result = await fetch(hostURL, header).then((res) => res.json());
    setLocationResult(result.documents);
    setLocationInput("");
  };

  const handleTargetLocation = (region: string) => {
    const dongName = region.split(" ").reverse()[0];
    if (targetLocations.includes(dongName)) return; //이미 포함된 것은 제외시킴
    if (targetLocations.length > 1) {
      setCountGuide(true);
      setLocationResult([]);
      return;
    } //태그2개이상선택시 return

    setTargetLocations((prev) => prev.concat([dongName]));
  };

  const handleNextPage = () => {
    if (targetLocations.length !== 2) return;
    history.push(ROUTE.MAIN);
  };

  return (
    <RegisterLocationLayout>
      <LocationRow>
        <LocationBox>
          <NoticeParagraph>ㅇㅇ님의 관심있는 동네를 알려주세요</NoticeParagraph>
          <NoticeParagraph>2 지역의 스터디 정보를 볼 수 있어요</NoticeParagraph>
        </LocationBox>

        <LocationBox>
          <SearchBox>
            <input
              name="search"
              placeholder="동네이름을 입력해주세요 ex)역삼동"
              value={locationInput}
              onChange={onChangeLocation}
            />
            <button type="submit" onClick={handleSubmitLocation}>
              <FiSearch />
            </button>
          </SearchBox>
        </LocationBox>

        <LocationHelpBox>
          {countGuide && <div>새 지역을 추가하시려면 기존 정보를 취소하고 진행해주세요.</div>}
          {locationResult.length > 0 && (
            <>
              <span>찾으시는 동네가 어디신가요?</span>
              <ul>
                {locationResult.map((location, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleTargetLocation(location.address_name)}
                  >{`•  ${location?.address_name}`}</li>
                ))}
              </ul>
            </>
          )}
        </LocationHelpBox>

        <LocationBox>
          <ButtonBox>
            {targetLocations.map((location, idx) => (
              <TargetButton
                key={idx}
                location={location}
                targetLocations={targetLocations}
                setTargetLocations={setTargetLocations}
              />
            ))}
          </ButtonBox>

          <NextButton onClick={handleNextPage} variant="outlined">
            다음 ({targetLocations.length}/2)
          </NextButton>
        </LocationBox>
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
const NoticeParagraph = styled.p`
  padding: 8px 0;
`;

const SearchBox = styled.div`
  display: grid;
  border-radius: 20px;
  padding: 12px 0px 12px 12px;
  border: 1px solid ${({ theme }) => theme.grayScaleColors.line};
  grid-template-columns: 80% 20%;
  min-width: 300px;
`;
const ButtonBox = styled.div`
  // 중복 (관심사 페이지)
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 50px;
`;

const NextButton = styled(RoundButton)`
  // 중복 (관심사 페이지)
  border-radius: 12px;
  margin: 8px 0;
`;
