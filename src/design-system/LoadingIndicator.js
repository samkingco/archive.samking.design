import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import Box from './Box';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingIndicator = styled(Box)(({ theme, speed }) => ({
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
    animation: `${spin} ${speed} linear infinite`,
  },
}));

LoadingIndicator.defaultProps = {
  m: 0,
  display: 'inline-block',
  width: '24px',
  height: '24px',
  speed: '0.5s',
};

LoadingIndicator.displayName = 'LoadingIndicator';

export default LoadingIndicator;
