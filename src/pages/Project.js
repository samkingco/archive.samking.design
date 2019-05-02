import React, { useEffect } from 'react';
import { useRouteData } from 'react-static';
import { Box, Figure, Grid } from '../design-system';
import { useTheme } from '../components/ActiveTheme';
import ProjectHeader from '../components/ProjectHeader';
import ProjectContent from '../components/ProjectContent';
import RelatedProjects from '../components/RelatedProjects';

function Project() {
  const {
    slug,
    title,
    intro,
    date,
    roles,
    link,
    cover,
    content,
    relatedProjects,
  } = useRouteData();

  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(slug);
  }, [slug]);


  return (
    <Box
      as="main"
      role="main"
      px={[1, 2]}
      py={[5, 6]}
      maxWidth="70em"
      mx="auto"
    >
      <Grid as="article" gridTemplateColumns="repeat(8, 1fr)">
        <ProjectHeader
          title={title}
          intro={intro}
          date={date}
          roles={roles}
          link={link}
          as="hgroup"
          gridColumn={[
            '1 / span 8',
            '2 / span 7',
            '2 / span 6',
            '2 / span 5',
            '3 / span 4',
          ]}
          mb={5}
        />

        <Figure
          src={cover.src}
          alt={cover.alt}
          ratio={cover.ratio}
          gridColumn={['1 / span 8', null, '2 / span 7']}
          mr={[-1, -2]}
          ml={[-1, -2, 0]}
          mb={5}
        />

        <ProjectContent content={content} gridColumn="1 / span 8" />

        <RelatedProjects
          projects={relatedProjects}
          as="footer"
          gridColumn="1 / span 8"
          mt={5}
        />
      </Grid>
    </Box>
  );
}

export default Project;
