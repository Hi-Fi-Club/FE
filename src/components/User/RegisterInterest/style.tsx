import styled from "styled-components";

const InterestLayout = styled.div`
  padding-top: 64px;
  position: relative;
  height: calc(90vh - 64px);

  display: grid;
  grid-template-rows: 40%;
`;

const InterestRow = styled.div`
  position: relative;
  height: fit-content;
  top: 25%;
`;

const InterestResultRow = styled(InterestRow)`
  flex-direction: row;
  top: 20%;
`;

const InterestBox = styled.div`
  ${({ theme }) => theme.flexSet("center", "center", "column")}
  row-gap: 4px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const SeparatedLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 4px 0;
  box-shadow: 0 0.4px 0.4px ${({ theme }) => theme.grayScaleColors.placeHolder};
`;

export { InterestLayout, InterestRow, InterestResultRow, InterestBox, ButtonBox, SeparatedLine };
