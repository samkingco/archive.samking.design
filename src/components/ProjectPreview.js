import React from 'react';
import { css, Box, Grid, Headline, Body, Link, Image } from '../design-system';

function ProjectPreview({ slug, cover, title, intro, nthChild = 1, ...props }) {
  const isThird = nthChild % 3 === 0;
  const isEven = nthChild % 2 === 0;

  return (
    <Link
      key={slug}
      to={`/${slug}/`}
      gridColumn={[
        '1 / span 8',
        null,
        `${isThird ? 2 : isEven ? 3 : 1} / span 6`,
      ]}
      shouldUnderline={false}
      css={css(theme => ({
        [`${Image}`]: {
          filter: 'grayscale(100%)',
          transform: 'translate3d(0 0, 0)',
          transition: 'filter 100ms ease-in-out, transform 150ms ease-in-out',
        },
        [`&:hover ${Image}`]: {
          filter: 'grayscale(0)',
          transform: `translate3d(${theme.space[1]}px, 0, 0)`,
        },
      }))}
      {...props}
    >
      <Grid gridTemplateColumns={['repeat(8, 1fr)', null, 'repeat(5, 1fr)']}>
        <Image
          src={cover.src}
          ratio={cover.ratio}
          gridColumn={['1 / span 8', null, '1 / span 5']}
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
