import React from 'react';
import { Box, Headline, Body } from '../design-system';

function ProjectPreview({ title, intro, date, myRole, ...props }) {
  return (
    <Box {...props}>
      <Headline as="h3" aria-label={`Project name: ${title}`}>
        {title}
      </Headline>
      <Body aria-label="About:">{intro}</Body>
      <Body aria-label="Date:">{date}</Body>
      <Body aria-label="My role:">{myRole}</Body>
    </Box>
  );
}

export default ProjectPreview;
