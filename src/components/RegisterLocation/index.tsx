import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import { FiSearch } from "react-icons/fi";
import RoundButton from "components/Common/Buttons/RoundButton";

const RegisterLocation = () => {
  return (
    <RegisterLocationLayout>
      <LocationRow>
        <LocationBox>
          <NoticeParagraph>ㅇㅇ님의 관심있는 지역 정보를 알려주세요</NoticeParagraph>
          <NoticeParagraph>해당 지역의 스터디 정보를 추천해드립니다.</NoticeParagraph>
        </LocationBox>

        <LocationBox>
          <SearchBox>
            <SearchInput name="search" placeholder="동네이름을 입력해주세요" />
            <SearchSubmitBtn>
              <FiSearch />
            </SearchSubmitBtn>
          </SearchBox>
        </LocationBox>

        <LocationHelpBox>
          <span>찾으시는 동네가 어디신가요?</span>
          <ul>
            <li>• 강남구 역삼동</li>
            <li>• 용인시 역삼동</li>
          </ul>
        </LocationHelpBox>

        <LocationBox>
          <ButtonBox>
            <SelectedItemButton disableRipple={true}>역삼동</SelectedItemButton>
            <SelectedItemButton disableRipple={true}>여의도</SelectedItemButton>
          </ButtonBox>
          <Link to="/">
            <NextButton variant="outlined">다음 (2/2)</NextButton>
          </Link>
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

const SearchInput = styled.input``;
const SearchSubmitBtn = styled.button``;

const ButtonBox = styled.div`
  // 중복 (관심사 페이지)
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const SelectedItemButton = styled(RoundButton)`
  // 중복 (관심사 페이지)
  background-color: ${({ theme }) => theme.grayScaleColors.titleActive};
  color: ${({ theme }) => theme.grayScaleColors.offWhite};
  &:hover {
    background-color: ${({ theme }) => theme.grayScaleColors.titleActive};
  }
`;

const NextButton = styled(RoundButton)`
  // 중복 (관심사 페이지)
  border-radius: 12px;
  margin: 8px 0;
`;
