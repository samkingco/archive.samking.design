import React from 'react';
import { useRouteData } from 'react-static';
import useTheme from '../hooks/useTheme';
import { PageWrapper, Figure, Grid } from '../design-system';
import Head from '../components/Head';
import ProjectPageHeader from '../components/ProjectPageHeader';
import ProjectPageContent from '../components/ProjectPageContent';
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

  useTheme(slug, [slug]);

  return (
    <PageWrapper as="main" role="main">
      <Head
        title={title}
        socialTitle={`${title}: A project by Sam King`}
        description={intro}
        socialImage={`${cover.src}?fit=crop&w=1200&h=600&crop=edges`}
        socialUrl={`https://samking.design/${slug}`}
        twitterCard="summary_large_image"
      />

      <Grid as="article" gridTemplateColumns="repeat(8, 1fr)">
        <ProjectPageHeader
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

        <ProjectPageContent content={content} gridColumn="1 / span 8" />

        <RelatedProjects
          projects={relatedProjects}
          as="footer"
          gridColumn="1 / span 8"
          mt={5}
        />
      </Grid>
    </PageWrapper>
  );
}

export default Project;
