import React from 'react';
import { useRouteData } from 'react-static';
import { Box, Headline, Body } from '../design-system';
import ProjectPreview from '../components/ProjectPreview';
import Job from '../components/Job';

function Index() {
  const { projects, history } = useRouteData();
  const yearsExperience = new Date().getFullYear() - 2012;

  return (
    <Box as="main" role="main">
      <Box as="section" aria-label="About me">
        <Headline as="p">
          I'm a Product Designer with {yearsExperience} years experience working
          on the web and for native app environments. I’m particularly
          interested in front-end and how you can scale design for the web.
        </Headline>

        <Body>
          This website serves as a small showcase of work from the last few
          years, both personal and for startups. If you’d like to know more,
          feel free to email me at{' '}
          <a href="mailto:mail@samking.co">mail@samking.co</a> or check out my{' '}
          <a href="https://github.com/samisking">GitHub</a>.
        </Body>
      </Box>

      <Box as="section" role="list" aria-label="Design projects">
        {projects.map(project => (
          <ProjectPreview key={project.slug} {...project} role="listitem" />
        ))}
      </Box>

      <Box as="section" role="list" aria-label="Job history">
        {history.map(job => (
          <Job key={`${job.role}.${job.company}`} {...job} role="listitem" />
        ))}
      </Box>
    </Box>
  );
}

export default Index;
