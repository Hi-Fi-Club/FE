import styled from "styled-components";
import Header from "components/Header";

// - 헤더
const LoginPage = () => {
  return (
    <LoginPageLayout>
      <Header page="login" />
      <ContentsWrapper>
        <Logo />

        <span>Login with Service Account</span>

        <LoginKakao />
      </ContentsWrapper>
    </LoginPageLayout>
  );
};
export default LoginPage;

const ContentsWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
`;

const LoginPageLayout = styled.div``;

const Logo = styled.div`
  width: 300px;
  height: 400px;
  background-image: url("/logoType_2.png");
  background-repeat: no-repeat;
  background-size: contain;
`;

const LoginKakao = styled.div`
  width: 150px;
  height: 200px;
  background-image: url("/kakao.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
