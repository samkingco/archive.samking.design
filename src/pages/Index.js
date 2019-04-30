import React from 'react';
import { useRouteData } from 'react-static';
import { Box, Grid, Headline, Body, Link } from '../design-system';
import ProjectPreviewList from '../components/ProjectPreviewList';
import JobList from '../components/JobList';

function Index() {
  const { projects, history } = useRouteData();
  const yearsExperience = new Date().getFullYear() - 2012;

  return (
    <Box as="main" role="main" px={[1, 2]} maxWidth="70em" mx="auto">
      <Grid
        as="section"
        aria-label="About me"
        gridTemplateColumns="repeat(8, 1fr)"
        mb={5}
      >
        <Headline
          as="p"
          gridColumn={['1 / span 8', null, '1 / span 7', null, '2 / span 5']}
          mb={4}
        >
          I'm a Product Designer with {yearsExperience} years experience working
          on the web and for native app environments. I’m particularly
          interested in front-end and how you can scale design for the web.
        </Headline>

        <Body
          gridColumn={[
            '1 / span 8',
            '2 / span 7',
            '2 / span 6',
            '2 / span 5',
            '3 / span 4',
          ]}
        >
          This website serves as a small showcase of work from the last few
          years, both personal and for startups. If you’d like to know more,
          feel free to email me at{' '}
          <Link to="mailto:mail@samking.co">mail@samking.co</Link> or check out
          my <Link to="https://github.com/samisking">GitHub</Link>.
        </Body>
      </Grid>

      <ProjectPreviewList
        projects={projects}
        as="section"
        role="list"
        aria-label="Design projects"
        mb={5}
      />

      <JobList
        jobs={history}
        as="section"
        role="list"
        aria-label="Job history"
      />
    </Box>
  );
}

export default Index;
