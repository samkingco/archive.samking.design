import React from 'react';
import { Grid, Title } from '../design-system';
import ProjectPreview from './ProjectPreview';

function ProjectPreviewList({ projects, ...props }) {
  return (
    <Grid
      as="section"
      role="list"
      gridTemplateColumns="repeat(8, 1fr)"
      {...props}
    >
      <Title
        as="h2"
        gridColumn={['1 / span 8', null, null, null, '2 / span 5']}
        mb={4}
      >
        Previous work
      </Title>

      {projects.map((project, index) => (
        <ProjectPreview
          {...project}
          key={project.slug}
          nthChild={index + 1}
          mb={index === projects.length - 1 ? 0 : 5}
        />
      ))}
    </Grid>
  );
}

export default ProjectPreviewList;
