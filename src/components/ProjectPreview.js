import React from 'react';
import { Box, Headline, Body, Grid, Link, Flex } from '../design-system';

function ProjectPreview({
  slug,
  title,
  intro,
  date,
  myRole,
  borderColor,
  ...props
}) {
  return (
    <Link
      to={`/${slug}`}
      {...props}
      display="block"
      shouldUnderline={false}
      border={2}
      borderColor={borderColor}
    >
      <Box borderBottom={2} borderColor={borderColor} p={2}>
        <Flex justifyContent="space-between" alignItems="center" mb={1}>
          <Headline as="h3" aria-label={`Project name: ${title}`}>
            {title}
          </Headline>
          <Headline>→</Headline>
        </Flex>
        <Body aria-label="About:">{intro}</Body>
      </Box>

      <Grid gridTemplateColumns="repeat(6, 1fr)">
        <Body
          aria-label="Date:"
          gridColumn={['1 / span 6', null, '1 / span 2']}
          py={1}
          px={2}
          borderColor={borderColor}
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
          borderColor={[borderColor, null, borderColor]}
        >
          {myRole}
        </Body>
      </Grid>
    </Link>
  );
}

export default ProjectPreview;
