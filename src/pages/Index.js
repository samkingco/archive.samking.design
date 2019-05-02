import React, { useState, useEffect } from 'react';
import { useSiteData, useRouteData } from 'react-static';
import { useTheme } from '../components/ActiveTheme';
import { Box, Grid, Headline, Body, Link } from '../design-system';
import ProjectPreviewList from '../components/ProjectPreviewList';
import JobList from '../components/JobList';

function Index() {
  const { email, location, latlong, twitter } = useSiteData();
  const { projects, history } = useRouteData();
  const { setTheme } = useTheme();

  const [revealLatlong, setRevealLatlong] = useState(false);

  useEffect(() => {
    setTheme('light');
  }, []);

  return (
    <Box
      as="main"
      role="main"
      px={[1, 2]}
      py={[5, 6]}
      maxWidth="70em"
      mx="auto"
    >
      <Grid
        as="section"
        aria-label="About me"
        gridTemplateColumns="repeat(8, 1fr)"
        mb={[5, 6]}
      >
        <Headline
          as="p"
          gridColumn={['1 / span 8', null, '1 / span 7', null, '2 / span 5']}
          mb={4}
        >
          I’m a designer primarily working on the web. I love building products
          that make people and teams more efficient.
        </Headline>

        <Box
          gridColumn={[
            '1 / span 8',
            '2 / span 7',
            '2 / span 6',
            '2 / span 5',
            '3 / span 4',
          ]}
        >
          <Body mb={2}>
            I’m currently building tools for Restaurants at Deliveroo. This
            website serves as a small showcase of work from the last few years,
            both personal and for startups. Open to new projects—hit me up.
          </Body>

          <Body>
            Email: <Link to={`mailto:${email}`}>{email}</Link>
          </Body>
          <Body>
            Twitter:{' '}
            <Link to={`https://twitter.com/${twitter}`}>@{twitter}</Link>
          </Body>
          <Body
            onMouseEnter={() => setRevealLatlong(true)}
            onMouseLeave={() => setRevealLatlong(false)}
          >
            Location: {revealLatlong ? latlong : location}
          </Body>
        </Box>
      </Grid>

      <ProjectPreviewList
        projects={projects}
        as="section"
        role="list"
        aria-label="Design projects"
        mb={[5, 6]}
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
