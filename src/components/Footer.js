import React from 'react';
import { Box, Caption } from '../design-system';

function Header() {
  const year = new Date().getFullYear();

  return (
    <Box as="footer" role="contentinfo">
      <Caption>Content &copy; {year} Sam King</Caption>
    </Box>
  );
}

export default Header;
