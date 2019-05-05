import React from 'react';
import styled from '@emotion/styled';
import { color } from 'styled-system';
import { Link as RouterLink } from '@reach/router';
import BaseElement from './BaseElement';

const BaseLink = styled(BaseElement)(
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
  color,
);

const Link = styled(({ to, ...props }) =>
  to.startsWith('http') || to.startsWith('mailto') ? (
    <BaseLink as="a" href={to} {...props} />
  ) : (
    <BaseLink as={RouterLink} to={to} {...props} />
  ),
)();

Link.defaultProps = {
  color: 'inherit',
  shouldUnderline: true,
};

Link.displayName = 'Link';

export default Link;
