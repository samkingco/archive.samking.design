import React from 'react';
import { Box, Title, Body, Link, Caption } from '../design-system';

function ProjectHeader({ title, intro, date, roles, link, ...props }) {
  return (
    <Box {...props}>
      <Title mb={2}>{title}</Title>
      <Body mb={3}>{intro}</Body>
      <Caption as="p" color="textAlt">
        <Box as="span" display={['block', null, 'inline-block']} mr={3}>
          {date}
        </Box>
        <Box as="span" display={['block', null, 'inline-block']} mr={3}>
          {roles.map(role => `${role}`).join(', ')}
        </Box>
        {link && (
          <Box as="span" display={['block', null, 'inline-block']}>
            <Link to={link.url}>{link.text}</Link>
          </Box>
        )}
      </Caption>
    </Box>
  );
}

export default ProjectHeader;
