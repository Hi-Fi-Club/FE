import styled, { css } from "styled-components";
import { RoundButton, TRoundButton } from "..";

type TRegisterButton = {
  selected?: boolean;
  mode?: "select" | "next";
} & TRoundButton;

const RegisterButton = ({ mode, children, ...props }: TRegisterButton) => {
  return (
    <RegisterButtonLayout mode={mode || "select"} {...props}>
      {children || {}}
    </RegisterButtonLayout>
  );
};

export default RegisterButton;
export type { TRegisterButton };

const cssSelectedButton = css<Pick<TRegisterButton, "selected">>`
  ${({ selected }) =>
    selected &&
    css`
      background-color: #5cbdfa;
      color: ${({ theme }) => theme.grayScaleColors.offWhite};
      &:hover {
        background-color: #79c6f6;
      }
    `};
`;

const cssNextButton = css<Pick<TRegisterButton, "selected">>`
  border-radius: 12px;
  margin: 8px 0;
  background-color: ${({ selected }) => (selected ? `transparent` : `rgba(0, 0, 0, 0.04)`)};
  user-select: ${({ selected }) => (selected ? `auto` : `none`)};
  pointer-events: ${({ selected }) => (selected ? `auto` : `none`)}; ;
`;

const RegisterButtonLayout = styled(RoundButton)<TRegisterButton>`
  ${({ mode }) => (mode === "select" ? cssSelectedButton : cssNextButton)}
`;
