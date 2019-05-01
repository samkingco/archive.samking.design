import React, { useState } from 'react';
import { Grid } from '../design-system';
import ProjectPreview from './ProjectPreview';

function RelatedProjects({ projects, ...props }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Grid gridTemplateColumns="repeat(8, 1fr)" {...props}>
      {projects.map((project, index) => (
        <ProjectPreview
          key={project.slug}
          slug={project.slug}
          title={project.title}
          byline={project.byline}
          date={project.date}
          role="listitem"
          gridColumn={['1 / span 8', '2 / span 6', '3 / span 4']}
          mb={index === projects.length - 1 ? 0 : 4}
          borderColor={hoveredIndex === index ? 'accent' : 'bgAlt'}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </Grid>
  );
}

export default RelatedProjects;
