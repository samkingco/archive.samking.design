import React from 'react';
import styled from '@emotion/styled';
import { Link as RouterLink } from '@reach/router';
import { shouldForwardProp, BASE_ELEMENT_PROPS } from './props';

const BaseLink = styled('a', { shouldForwardProp })(
  ({ theme, shouldUnderline }) => ({
    outline: 'none',
    textDecoration: 'none',
    backgroundImage: `linear-gradient(transparent calc(100% - 1px), ${
      shouldUnderline ? 'currentColor' : 'transparent'
    } 1px)`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    transition:
      'background-size 250ms ease-in-out 0s, background 250ms ease-in-out 0s, color 250ms ease-in-out 0s',
    // Make sure the underline isn't too tight to the text
    paddingBottom: shouldUnderline ? 2 : 0,
    '&:hover': {
      color: theme.colors.accent,
      backgroundSize: '0 100%',
    },
  }),
  BASE_ELEMENT_PROPS,
);

const Link = styled(({ to, ...props }) => {
  const commonProps = {
    color: 'text',
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
