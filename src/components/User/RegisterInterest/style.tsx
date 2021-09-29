import styled from "styled-components";

const InterestLayout = styled.div`
  position: relative;
  min-height: 100vh;
  ${({ theme }) => theme.flexSet()}

  .interest__inner {
    height: calc(100vh / 3);
  }
`;

const InterestRow = styled.div`
  position: relative;
  height: fit-content;
  padding: 3vh 0;
`;

const InterestBox = styled.div`
  ${({ theme }) => theme.flexSet("center", "center", "column")}
  row-gap: 4px;
`;

const ButtonBox = styled.div`
  ${({ theme }) => theme.flexSet()}
  flex-wrap: wrap;
  gap: 4px;
  & + & {
    margin-top: 12px;
  }
`;

export { InterestLayout, InterestRow, InterestBox, ButtonBox };
