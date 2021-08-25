import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RoundButton from "components/Common/Buttons/RoundButton";
import { ROUTE } from "util/constants";

const Header = () => {
  const location = useLocation();
  const { ENTER, LOGIN } = ROUTE;
  const [isHeaderTop, setHeaderTop] = useState(true);

  // 나중에 디바운서 or 쓰로틀링
  const handleScroll = () => setHeaderTop(window.scrollY === 0);

  useEffect(() => {
    if (location.pathname !== ENTER) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderLayout isHeaderTop={isHeaderTop}>
      <Link to={ENTER}>
        <Logo />
      </Link>
      {location.pathname === ENTER && ( //로그인상태조건반영 + SIGNOUT
        <ButtonContainer>
          <Link to={LOGIN}>
            <LoginButton>Sign In</LoginButton>
          </Link>
        </ButtonContainer>
      )}
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div<{ isHeaderTop: Boolean }>`
  ${({ theme }) => theme.flexSet("space-between")};
  width: ${({ theme }) => theme.widthByDevice.desktop};
  height: 64px;

  @media (max-width: 768px) {
    width: ${({ theme }) => theme.widthByDevice.mobile};
    padding: 0 2em;
  }

  padding: 0 200px;
  position: fixed;
  box-shadow: ${({ isHeaderTop }) => (isHeaderTop ? "none" : "0.3em 0.3em 1em rgba(0, 0, 0, 0.3)")};
  background-color: ${({ isHeaderTop, theme }) => (isHeaderTop ? "transparent" : `${theme.grayScaleColors.offWhite}`)};
  transition: background-color 0.4s;
  z-index: 1;
`;

const Logo = styled.div`
  width: 140px;
  height: 100px;
  background-image: url("/logoType_1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const LoginButton = styled(RoundButton)`
  background-color: ${({ theme }) => theme.colors.basicBlue};
  color: ${({ theme }) => theme.grayScaleColors.offWhite};
  font-family: "Nunito_Black";
  font-size: 18px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

const ButtonContainer = styled.div``;
