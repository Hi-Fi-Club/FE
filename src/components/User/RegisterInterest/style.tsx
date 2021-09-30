import styled from "styled-components";

const InterestBox = styled.div`
  ${({ theme }) => theme.flexSet("center", "center", "column")}
  row-gap: 4px;

  ${({ theme: { media } }) => media.mobile} {
    background-color: red;
  }
  ${({ theme: { media } }) => media.desktop} {
    background-color: blue;
  }
`;

const ButtonBox = styled.div`
  ${({ theme }) => theme.flexSet()}
  flex-wrap: wrap;
  gap: 4px;
  & + & {
    margin-top: 12px;
  }
`;

export { InterestBox, ButtonBox };
