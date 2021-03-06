import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { FiArrowDown } from "react-icons/fi";
import { ROUTE } from "util/constants";
import { isLogin } from "util/funcs";
import { RoundButton } from "components/Common";
import EnterTitle from "components/Enter/EnterTitle";

const EnterPage = () => {
  const history = useHistory();
  const isLogined = isLogin();

  useEffect(() => {
    //유저정보확인절차 => MAIN / USERiNFO
    if (isLogined) history.push(ROUTE.MAIN);
  }, [isLogined]);

  return (
    <HeroLayout>
      <EnterTitle />
      <Buttons>
        <Link to={ROUTE.LOGIN}>
          <LinkButton>Go To Service</LinkButton>
        </Link>
      </Buttons>
      <Guide>
        <span>Introduce HiFi, Scroll down</span>
        <FiArrowDown size={84} />
      </Guide>
    </HeroLayout>
  );
};
export default EnterPage;

const HeroLayout = styled.div`
  padding: ${({ theme }) => theme.paddingByDevice.desktop};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.paddingByDevice.mobile};
    background-position: right 30% top 0%;
  }

  height: 1080px;
  background-image: url("/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.grayScaleColors.offWhite};
`;

const Buttons = styled.div`
  ${({ theme }) => theme.flexSet()};
`;

const LinkButton = styled(RoundButton)`
  width: 400px;
  height: 100px;

  @media (max-width: 768px) {
    width: 200px;
    height: 50px;
    font-size: 15px;
  }

  background-color: ${({ theme }) => theme.colors.basicBlue};
  color: ${({ theme }) => theme.grayScaleColors.offWhite};
  font-family: "Nunito_Bold";
  font-size: 30px;
  &:hover {
    background-color: #79c6f6;
  }
`;

const Guide = styled.div`
  height: 150px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 100px;
  }
  margin-top: 150px;
`;
