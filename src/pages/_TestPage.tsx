// 테스트 전용 (반응형)
import styled from 'styled-components';
import { ResponsiveContainer as Container } from '@/components/Common';

const TestPage = () => {
  return ['sm', 'md', 'lg', 'xl', 'xxl'].map((v, i) => (
    // @ts-ignore
    <TestContainer type={v} key={i}>
      <div>
        {/* 중앙 */}
        <span>어떤 서비스를 이용하세요?</span>

        {/* 좌우 끝 */}
        <div>
          <button>스터디 모집</button>
          <button>스터디룸 예약</button>
        </div>

        {/* 중앙 */}
        <button>메인으로</button>
      </div>
    </TestContainer>
  ));
};
export default TestPage;

const TestContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.basicBlue};
  border: 1px solid ${({ theme }) => theme.grayScaleColors.background};
`;
