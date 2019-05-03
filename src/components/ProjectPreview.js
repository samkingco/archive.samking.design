import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Grid, Headline, Body, Link, Image } from '../design-system';

const ProjectCover = styled(Image)(({ theme, isHovering }) => ({
  filter: `grayscale(${isHovering ? '0' : '100%'})`,
  transform: `translate3d(${isHovering ? `${theme.space[1]}px` : '0'}, 0, 0)`,
  transition: 'filter 100ms ease-in-out, transform 150ms ease-in-out',
}));

function ProjectPreview({ slug, cover, title, intro, nthChild = 1, ...props }) {
  const [isHovering, setIsHovering] = useState(false);
  const isThird = nthChild % 3 === 0;
  const isEven = nthChild % 2 === 0;

  return (
    <Link
      key={slug}
      to={`/${slug}`}
      gridColumn={[
        '1 / span 8',
        null,
        `${isThird ? 2 : isEven ? 3 : 1} / span 6`,
      ]}
      shouldUnderline={false}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <Grid gridTemplateColumns={['repeat(8, 1fr)', null, 'repeat(5, 1fr)']}>
        <ProjectCover
          src={cover.src}
          ratio={cover.ratio}
          gridColumn={['1 / span 8', null, '1 / span 5']}
          isHovering={isHovering}
          mb={[2, null, 3]}
        />
        <Box
          gridColumn={[
            '1 / span 8',
            '2 / span 7',
            `${isThird ? 2 : isEven ? 1 : 2} / span 4`,
            `${isThird ? 3 : isEven ? 1 : 2} / span 3`,
          ]}
        >
          <Headline mb={1}>{title}</Headline>
          <Body>{intro}</Body>
        </Box>
      </Grid>
    </Link>
  );
}

export default ProjectPreview;
