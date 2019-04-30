import React from 'react';
import { Box, Caption } from '../design-system';

function Header() {
  const year = new Date().getFullYear();

  return (
    <Box as="footer" role="contentinfo" px={[1, 2]} pb={[1, 2]} mt={5}>
      <Caption display="block" textAlign="right" color="textAlt">
        Content &copy; {year} Sam King
      </Caption>
    </Box>
  );
}

export default Header;
