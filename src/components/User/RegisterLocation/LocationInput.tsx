import React, { Dispatch, SetStateAction } from "react";
import useInput from "@/hooks/useInput";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import API from "util/dataFetching/API";
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

interface LocationInputProps {
  setLocationResult: Dispatch<SetStateAction<LocationResult[]>>;
}

function LocationInput({ setLocationResult }: LocationInputProps) {
  const [locationInput, onChangeLocation, setLocationInput] = useInput("");
  const handleSubmitLocation = async () => {
    const hostURL = API.USERINFO.LOCATION(locationInput);
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const header = { headers: { Authorization: `KakaoAK ${REST_API_KEY}` } };
    const result = await fetch(hostURL, header).then((res) => res.json());
    setLocationResult(result.documents);
    setLocationInput("");
  };

  return (
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
  );
}

export default LocationInput;
export const LocationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SearchBox = styled.div`
  display: grid;
  border-radius: 20px;
  padding: 12px 0px 12px 12px;
  border: 1px solid ${({ theme }) => theme.grayScaleColors.line};
  grid-template-columns: 80% 20%;
  min-width: 300px;
`;
