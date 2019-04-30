import React from 'react';
import { useSiteData } from 'react-static';
import { Box, Caption } from '../design-system';

function Header() {
  const { version } = useSiteData();
  const year = new Date().getFullYear();

  return (
    <Box as="footer" role="contentinfo" px={[1, 2]} pb={[1, 2]} mt={5}>
      <Caption display="block" textAlign="right" color="textAlt">
        v{version} • Content &copy; {year} Sam King
      </Caption>
    </Box>
  );
}

export default Header;
