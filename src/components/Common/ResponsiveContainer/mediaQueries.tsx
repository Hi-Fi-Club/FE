import { css } from 'styled-components';

const maxWidth540 = css`
  @media (min-width: 576px) {
    max-width: 540px;
  }
`;

const maxWidth720 = css`
  @media (min-width: 768px) {
    max-width: 720px;
  }
`;

const maxWidth960 = css`
  @media (min-width: 992px) {
    max-width: 960px;
  }
`;

const maxWidth1140 = css`
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const maxWidth1320 = css`
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export { maxWidth540, maxWidth720, maxWidth960, maxWidth1140, maxWidth1320};