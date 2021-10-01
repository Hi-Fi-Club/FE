import styled from "styled-components";
import { RegisterButton, TargetButton } from "@/components/Common";

const InterestBox = styled.div`
  ${({ theme }) => theme.flexSet("center", "center", "column")}
  row-gap: 4px;
`;

const InteresButtonBox = styled.div`
  ${({ theme }) => theme.flexSet()}
  flex-wrap: wrap;
  gap: 4px;

  & + & {
    margin-top: 12px;
  }
`;

const InterestButton = styled(RegisterButton)`
  ${({ theme: { media } }) => media.desktop} {
    font-size: 1rem;
  }
`;

const InterestTargetButton = styled(TargetButton)`
  ${({ theme: { media } }) => media.desktop} {
    button.select,
    button.delete {
      font-size: 1rem;
    }
    button.delete {
      right: -8.6px;
      top: -5.5px;
    }
  }
`;

export { InterestBox, InteresButtonBox, InterestButton, InterestTargetButton };
