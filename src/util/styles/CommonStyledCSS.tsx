import { css } from "styled-components";

export const cssImageAuto = css`
  img {
    /* 이미지 크기 보정 */
    max-width: 100%;
    height: auto;
  }
`;

export const cssDefault = css`
  background-color: transparent;
  background-repeat: no-repeat;
  overflow: hidden;
  outline: none;
  border: none;
`;

const flexSet = (horizon: string, vertical: string, direction: string) => css`
  display: flex;
  justify-content: ${horizon || "center"};
  align-items: ${vertical || "center"};
  flex-direction: ${direction || "row"};
`;

const Mixin = { flexSet };
export default Mixin;
