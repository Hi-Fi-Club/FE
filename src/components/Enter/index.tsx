// 진입 페이지
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowDown } from "react-icons/fi";
import { ROUTE } from "util/constants";
import { RoundButton } from "components/Common";
import EnterTitle from "./EnterTitle";

const Enter = () => {
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
export default Enter;

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
  margin-top: 150px;
`;
