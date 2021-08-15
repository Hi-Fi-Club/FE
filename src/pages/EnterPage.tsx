// 진입 페이지
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowDown } from "react-icons/fi";
import BlueButton from "components/Common/Buttons/BlueButton";
import RoundButton from "@/components/Common/Buttons/RoundButton";

const EnterPage = () => {
  return (
    <HeroLayout>
      <Contents>
        <Title>
          이 세상 <br /> 모든 스터디의 <br />{" "}
          <span className="brand">
            Hi<span className="white">-</span>Fi
          </span>{" "}
          를 위해
        </Title>
        <Buttons>
          <LinkButton>Download Mobile App</LinkButton>
          <Link to="/login">
            <LinkButton>Go To Service</LinkButton>
          </Link>
        </Buttons>
        <Guide>
          <span>Introduce HiFi, Scroll down</span>
          <FiArrowDown size={84} />
        </Guide>
      </Contents>
    </HeroLayout>
  );
};
export default EnterPage;

const HeroLayout = styled.div`
  height: 1080px;
  background-image: url("/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.grayScaleColors.offWhite};
`;

const Contents = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 200px;
`;

const Title = styled.div`
  font-family: "Nunito_Black";
  font-size: 72px;
  padding: 3em 0 2em 0;
  line-height: normal;
  .brand {
    font-family: "Nunito_ExtraBoldItalic";
    color: ${({ theme }) => theme.colors.basicBlue};
  }

  .white {
    color: ${({ theme }) => theme.grayScaleColors.offWhite};
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
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
