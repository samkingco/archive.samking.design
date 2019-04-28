import React from 'react';
import { Link } from '@reach/router';
import { Box, Headline, Caption } from '../design-system';

function Header() {
  return (
    <Box as="header" role="banner">
      <Headline as="h1">
        <Link to="/">Sam King</Link>
      </Headline>
      <Caption as="h2">Product Designer for Restaurants at Deliveroo</Caption>
    </Box>
  );
}

export default Header;
