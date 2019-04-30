import React, { useState } from 'react';
import { Grid } from '../design-system';
import ProjectPreview from './ProjectPreview';

function ProjectPreviewList({ projects, ...props }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isHovering = Number.isInteger(hoveredIndex);

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
          opacity={isHovering ? (hoveredIndex === index ? 1 : 0.48) : 1}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </Grid>
  );
}

export default ProjectPreviewList;
