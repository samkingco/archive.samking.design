import React from 'react';
import { Box, Headline, Body, Grid, Link } from '../design-system';

function ProjectPreview({
  slug,
  title,
  byline,
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
      <Box p={2}>
        <Headline
          as="h3"
          aria-label={`Project name: ${title}`}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {title}
          <span aria-hidden="true"> →</span>
        </Headline>

        {(intro || byline) && (
          <Body aria-label="About:" mt={1}>
            {intro || byline}
          </Body>
        )}
      </Box>

      {date && (
        <Grid
          borderTop={2}
          borderColor={borderColor}
          gridTemplateColumns="repeat(6, 1fr)"
        >
          <Body
            aria-label="Date:"
            gridColumn={
              myRole ? ['1 / span 6', null, '1 / span 2'] : '1 / span 6'
            }
            py={1}
            px={2}
          >
            {date}
          </Body>
          {myRole && (
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
          )}
        </Grid>
      )}
    </Link>
  );
}

export default ProjectPreview;
