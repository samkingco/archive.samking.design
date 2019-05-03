import React from 'react';
import { useSiteData, useRouteData, Head } from 'react-static';
import useTheme from '../hooks/useTheme';
import { PageWrapper } from '../design-system';
import PreviousWork from '../components/PreviousWork';
import JobHistory from '../components/JobHistory';
import About from '../components/About';

function Index() {
  useTheme('light');
  const { email, twitter, location, latlong } = useSiteData();
  const { projects, history } = useRouteData();

  const meta = {
    description:
      'I’m a designer primarily working on the web. I love building products that make people and teams more efficient. I’m currently building tools for Restaurants at Deliveroo.',
    url: `https://samking.design`,
  };

  return (
    <React.Fragment>
      <Head>
        <meta name="description" content={meta.description} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
      </Head>
      <PageWrapper as="main" role="main">
        <About
          as="section"
          aria-label="About me"
          email={email}
          twitter={twitter}
          location={location}
          latlong={latlong}
          mb={[5, 6]}
        />

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
      </PageWrapper>
    </React.Fragment>
  );
}

export default Index;
