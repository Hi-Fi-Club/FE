import styled from "styled-components";
import LoginButton from "components/Common/Buttons/BlueButton";

const Header = () => (
  // 좌우 끝
  <HeaderLayout>
    <HeaderContentsWrapper>
      <Logo />
      <ButtonContainer>
        <LoginButton width={79} height={32} font={"Nunito_Black"} fontSize={18}>
          Sign In
        </LoginButton>
      </ButtonContainer>
    </HeaderContentsWrapper>
  </HeaderLayout>
);

export default Header;

const HeaderLayout = styled.div`
  height: 64px;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

const HeaderContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Logo = styled.div`
  height: 60%;
  width: 140px;
  margin: 0 100px;
  background-image: url("/logoType_1.png");
  background-repeat: no-repeat;
  background-size: contain;
`;

const ButtonContainer = styled.div`
  margin: 0 100px;
`;
