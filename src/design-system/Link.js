import React from 'react';
import styled from '@emotion/styled';
import { Link as RouterLink } from '@reach/router';
import { shouldForwardProp, BASE_ELEMENT_PROPS } from './props';

const BaseLink = styled('a', { shouldForwardProp })(
  ({ theme, shouldUnderline }) => ({
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
  }),
  BASE_ELEMENT_PROPS,
);

const Link = styled(({ to, ...props }) => {
  const commonProps = {
    color: 'inherit',
    shouldUnderline: true,
    ...props,
  };

  return to.startsWith('http') || to.startsWith('mailto') ? (
    <BaseLink href={to} {...commonProps} />
  ) : (
    <BaseLink as={RouterLink} to={to} {...commonProps} />
  );
})();

Link.displayName = 'Link';

export default Link;
