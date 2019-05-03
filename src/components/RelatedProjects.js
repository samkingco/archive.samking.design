import React, { useState } from 'react';
import { Box, Grid, Headline, Body, Link } from '../design-system';

function RelatedProjects({ projects, ...props }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const getBorderColor = index => (hoveredIndex === index ? 'accent' : 'bgAlt');

  return (
    <Grid gridTemplateColumns="repeat(8, 1fr)" {...props}>
      {projects.map(({ slug, title, byline, date }, index) => (
        <Link
          key={slug}
          to={`/${slug}/`}
          role="listitem"
          shouldUnderline={false}
          border={2}
          borderColor={getBorderColor(index)}
          display="block"
          gridColumn={['1 / span 8', '2 / span 6', '3 / span 4']}
          mb={index === projects.length - 1 ? 0 : 4}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
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

            <Body aria-label="About:" mt={1}>
              {byline}
            </Body>
          </Box>

          <Grid
            borderTop={2}
            borderColor={getBorderColor(index)}
            gridTemplateColumns="repeat(6, 1fr)"
          >
            <Body aria-label="Date:" gridColumn="1 / span 6" py={1} px={2}>
              {date}
            </Body>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

export default RelatedProjects;
