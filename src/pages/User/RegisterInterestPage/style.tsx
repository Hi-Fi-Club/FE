import styled from "styled-components";
const InterestLayout = styled.div`
  position: relative;
  min-height: 100vh;
  ${({ theme }) => theme.flexSet()}

  .interest__inner {
    height: calc(100vh / 2);
  }
`;

const InterestRow = styled.div`
  position: relative;
  height: fit-content;
  padding: 3vh 0;
`;

export { InterestLayout, InterestRow };
