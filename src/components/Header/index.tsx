import { useEffect, useState } from "react";
import styled from "styled-components";
import LoginButton from "components/Common/Buttons/BlueButton";
import { TPage } from "util/types";
import { Link } from "react-router-dom";

interface Props {
  children?: HTMLDivElement;
  page: TPage;
}

const Header = ({ page }: Props) => {
  const [headerState, setHeaderState] = useState(true);

  if (page === "enter") {
    window.addEventListener("scroll", () => {
      window.scrollY === 0 && page === "enter" ? setHeaderState(true) : setHeaderState(false);
    });
  }
  return (
    <HeaderLayout headerState={headerState}>
      <HeaderContentsWrapper>
        <Link to="/">
          <Logo></Logo>
        </Link>
        {page === "login" ? (
          <></>
        ) : (
          <ButtonContainer>
            <Link to="/login">
              <LoginButton width={79} height={32} font={"Nunito_Black"} fontSize={18}>
                Sign In
              </LoginButton>
            </Link>
          </ButtonContainer>
        )}
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
  z-index: 1;
`;

const HeaderContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 200px;
`;

const Logo = styled.div`
  width: 140px;
  height: 100px;
  background-image: url("/logoType_1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const ButtonContainer = styled.div``;
