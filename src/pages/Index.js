import React from 'react';
import { useSiteData, useRouteData } from 'react-static';
import useTheme from '../hooks/useTheme';
import { PageWrapper } from '../design-system';
import Head from '../components/Head';
import PreviousWork from '../components/PreviousWork';
import JobHistory from '../components/JobHistory';
import About from '../components/About';

function Index() {
  useTheme('light');
  const { email, handle, location, latlong } = useSiteData();
  const { projects, history } = useRouteData();

  return (
    <PageWrapper as="main" role="main">
      <Head description="I'm a designer primarily working on the web. I love building products that make people and teams more efficient. I'm currently building tools for Restaurants at Deliveroo." />

      <About
        as="section"
        aria-label="About me"
        email={email}
        twitter={handle}
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
  );
}

export default Index;
