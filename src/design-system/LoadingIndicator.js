import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { shouldForwardProp, BASE_ELEMENT_PROPS } from './props';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingIndicator = styled('div', { shouldForwardProp })(
  ({ theme }) => ({
    m: 0,
    display: 'inline-block',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    position: 'relative',
    verticalAlign: 'middle',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: `2px solid ${theme.colors.bgAlt}`,
      borderTopColor: theme.colors.text,
      animation: `${spin} 0.5s linear infinite`,
    },
  }),
  BASE_ELEMENT_PROPS,
);

LoadingIndicator.displayName = 'LoadingIndicator';

export default LoadingIndicator;
