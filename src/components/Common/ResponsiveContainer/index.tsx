// Responsive Container
import styled from 'styled-components';
import { TChildren } from 'util/types';
import { isUndefined } from '@/util/funcs';
import {
  maxWidth540,
  maxWidth720,
  maxWidth960,
  maxWidth1140,
  maxWidth1320,
} from './mediaQueries';

export type TContainerType = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface IResponsiveContainer {
  type?: TContainerType;
  children: TChildren;
}

const ResponsiveContainer = ({ type, children, ...props }: IResponsiveContainer) => (
  <ResponsiveContainerLayout type={type} {...props}>{children}</ResponsiveContainerLayout>
);

export default ResponsiveContainer;

// --- Styled Components ---
const ResponsiveContainerLayout = styled.div<{ type?: TContainerType }>`
  display: flex;

  width: 100%;
  margin: 0 auto;

  ${ ({ type }) => (isUndefined(type) || type === 'sm') && maxWidth540 };
  ${ ({ type }) => (isUndefined(type) || ['sm', 'md'].includes(type!)) && maxWidth720 };
  ${ ({ type }) => (isUndefined(type) || ['sm', 'md', 'lg'].includes(type!)) && maxWidth960 };
  ${ ({ type }) => (isUndefined(type) || ['sm', 'md', 'lg', 'xl'].includes(type!)) && maxWidth1140 };
  ${maxWidth1320};
`;
