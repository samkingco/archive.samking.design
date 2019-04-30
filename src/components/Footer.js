import React from 'react';
import { useSiteData } from 'react-static';
import { Box, Caption, Link } from '../design-system';

function Header() {
  const { version, github, repo } = useSiteData();
  const year = new Date().getFullYear();

  return (
    <Box as="footer" role="contentinfo" px={[1, 2]} pb={[1, 2]} mt={5}>
      <Caption display="block" textAlign="right" color="textAlt">
        <Link to={`${github}/${repo}`}>v{version}</Link> • Content &copy; {year}{' '}
        Sam King
      </Caption>
    </Box>
  );
}

export default Header;
