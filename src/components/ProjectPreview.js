import React from 'react';
import { Box, Headline, Body, Grid, Link } from '../design-system';

function ProjectPreview({ slug, title, intro, date, myRole, ...props }) {
  return (
    <Link
      to={`/${slug}`}
      {...props}
      display="block"
      shouldUnderline={false}
      border={2}
      borderColor="fg"
    >
      <Box borderBottom={2} borderColor="fg" p={2}>
        <Headline as="h3" aria-label={`Project name: ${title}`} mb={1}>
          {title}
        </Headline>
        <Body aria-label="About:">{intro}</Body>
      </Box>

      <Grid gridTemplateColumns="repeat(6, 1fr)">
        <Body
          aria-label="Date:"
          gridColumn={['1 / span 6', null, '1 / span 2']}
          py={1}
          px={2}
          borderColor="fg"
        >
          {date}
        </Body>
        <Body
          aria-label="My role:"
          gridColumn={['1 / span 6', null, '3 / span 4']}
          py={1}
          px={2}
          borderTop={[2, null, 0]}
          borderLeft={[0, null, 2]}
          borderColor={['fg', null, 'fg']}
        >
          {myRole}
        </Body>
      </Grid>
    </Link>
  );
}

export default ProjectPreview;
