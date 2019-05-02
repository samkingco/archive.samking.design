import React from 'react';
import { Link as RouterLink } from '@reach/router';
import styled from '@emotion/styled';
import BaseText from './BaseText';

const StyledLink = styled(BaseText)(({ theme, shouldUnderline }) => ({
  position: 'relative',
  textDecoration: 'none',
  outline: 'none',
  '&:hover': {
    color: theme.colors.accent,
  },
  '&:hover:after': {
    width: 0,
    left: '50%',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    height: '1px',
    width: '100%',
    backgroundColor: 'currentColor',
    left: 0,
    bottom: '-2px',
    transition:
      'width 100ms ease-in-out, background-color 100ms ease-in-out, left 100ms ease-in-out',
    opacity: shouldUnderline ? 1 : 0,
  },
}));

const Link = styled(({ to, ...props }) => {
  if (
    typeof to === 'string' &&
    (to.startsWith('http') || to.startsWith('mailto'))
  ) {
    return <StyledLink as="a" href={to} {...props} />;
  }

  return <StyledLink as={RouterLink} to={to} {...props} />;
})();

Link.defaultProps = {
  color: 'inherit',
  shouldUnderline: true,
};

Link.displayName = 'Link';

export default Link;
