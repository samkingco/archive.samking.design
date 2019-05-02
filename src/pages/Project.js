import React, { useEffect } from 'react';
import { useRouteData, Head } from 'react-static';
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

  const meta = {
    title,
    socialTitle: `${title}: A project by Sam King`,
    description: intro,
    image: `${cover.src}?fit=crop&w=1200&h=600&crop=edges`,
    url: `https://samking.design/${slug}`,
  };

  return (
    <React.Fragment>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.socialTitle} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

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
    </React.Fragment>
  );
}

export default Project;
