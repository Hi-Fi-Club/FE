import { useState } from "react";
import styled from "styled-components";
import LoginButton from "components/Common/Buttons/BlueButton";
import { TPage } from "util/types";

interface Props {
  children?: HTMLDivElement;
  page: TPage;
}

const Header = ({ page }: Props) => {
  const [headerState, setHeaderState] = useState(true);

  window.addEventListener("scroll", () => {
    window.scrollY === 0 && page === "enter" ? setHeaderState(true) : setHeaderState(false);
  });

  return (
    <HeaderLayout headerState={headerState}>
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
};

export default Header;

const HeaderLayout = styled.div<{ headerState: Boolean }>`
  width: 100%;
  height: 64px;
  position: fixed;
  box-shadow: ${({ headerState }) => (headerState ? "none" : "0.3em 0.3em 1em rgba(0, 0, 0, 0.3)")};
  background-color: ${({ headerState }) => (headerState ? "transparent" : "#ffffff")};
  transition: background-color 0.4s;
`;

const HeaderContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 200px;
`;

const Logo = styled.div`
  height: 60%;
  width: 140px;
  background-image: url("/logoType_1.png");
  background-repeat: no-repeat;
  background-size: contain;
`;

const ButtonContainer = styled.div``;
