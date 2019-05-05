import React from 'react';
import { useRouteData, Head } from 'react-static';
import useTheme from '../hooks/useTheme';
import { PageWrapper, Figure, Grid } from '../design-system';
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

  const meta = {
    title,
    socialTitle: `${title}: A project by Sam King`,
    description: intro,
    image: `${cover.src}?fit=crop&w=1200&h=600&crop=edges`,
    url: `https://samking.design/${slug}`,
  };

  return (
    <PageWrapper as="main" role="main">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.socialTitle} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

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
