import React, { useState } from 'react';
import { useSiteData, useRouteData, Head } from 'react-static';
import useTheme from '../hooks/useTheme';
import { Box, Grid, Headline, Body, Link } from '../design-system';
import PreviousWork from '../components/PreviousWork';
import JobHistory from '../components/JobHistory';

function Index() {
  useTheme('light');
  const { email, twitter, location, latlong } = useSiteData();
  const { projects, history } = useRouteData();
  const [revealLatlong, setRevealLatlong] = useState(false);

  const meta = {
    description:
      'I’m a designer primarily working on the web. I love building products that make people and teams more efficient. I’m currently building tools for Restaurants at Deliveroo. This website serves as a small showcase of work from the last few years, both personal and for startups. Open to new projects—hit me up.',
    url: `https://samking.design`,
  };

  return (
    <React.Fragment>
      <Head>
        <meta name="description" content={meta.description} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
      </Head>
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
            I’m a designer primarily working on the web. I love building
            products that make people and teams more efficient.
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
              website serves as a small showcase of work from the last few
              years, both personal and for startups. Open to new projects—hit me
              up.
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

        <PreviousWork
          projects={projects}
          as="section"
          role="list"
          aria-label="Design projects"
          mb={[5, 6]}
        />

        <JobHistory
          history={history}
          as="section"
          role="list"
          aria-label="Job history"
        />
      </Box>
    </React.Fragment>
  );
}

export default Index;
