import React from 'react';
import { Link as RouterLink } from '@reach/router';
import styled from '@emotion/styled';
import BaseText from './BaseText';

const StyledLink = styled(BaseText)(({ shouldUnderline }) => ({
  textDecoration: 'none',
  ...(shouldUnderline && {
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
}));

const Link = ({ to, ...props }) => {
  if (
    typeof to === 'string' &&
    (to.startsWith('http') || to.startsWith('mailto'))
  ) {
    return <StyledLink as="a" href={to} {...props} />;
  }

  return <StyledLink as={RouterLink} to={to} {...props} />;
};

Link.defaultProps = {
  color: 'text',
  fontWeight: 'bold',
  shouldUnderline: true,
};

Link.displayName = 'Link';

export default Link;