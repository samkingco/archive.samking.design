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
      <Head
        description="I’m a designer that loves building products to help people and teams
        make better decisions. I’m currently revamping the patient experience at Echo so more people can get the medicine they need. Previously I was working on internal tools for our clinical and operational staff."
      />

      <About
        as="section"
        aria-label="About me"
        email={email}
        socialHandle={handle}
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
