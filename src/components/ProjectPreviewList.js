import React, { useState } from 'react';
import { Grid } from '../design-system';
import ProjectPreview from './ProjectPreview';

function ProjectPreviewList({ projects, ...props }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Grid gridTemplateColumns="repeat(8, 1fr)" {...props}>
      {projects.map((project, index) => (
        <ProjectPreview
          key={project.slug}
          {...project}
          role="listitem"
          gridColumn={[
            '1 / span 8',
            '1 / span 8',
            '2 / span 7',
            '2 / span 7',
            '2 / span 6',
          ]}
          mb={index !== projects.length - 1 ? 4 : 0}
          borderColor={hoveredIndex === index ? 'accent' : 'fg'}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </Grid>
  );
}

export default ProjectPreviewList;
