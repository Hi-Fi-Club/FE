import styled from 'styled-components';


const EnterTitle = () => (
  <TitleLayout>
		이 세상 <br /> 모든 스터디의 <br />
		<span className="brand">
			Hi<span className="white">-</span>Fi
		</span>
		를 위해
	</TitleLayout>
)

export default EnterTitle


const TitleLayout = styled.div`
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