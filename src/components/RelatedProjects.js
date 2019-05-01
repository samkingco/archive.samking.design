import React, { useState } from 'react';
import { Grid } from '../design-system';
import ProjectPreview from './ProjectPreview';

function RelatedProjects({ projects, ...props }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Grid gridTemplateColumns="repeat(11, 1fr)" {...props}>
      {projects.map((project, index) => (
        <ProjectPreview
          key={project.slug}
          slug={project.slug}
          title={project.title}
          byline={project.byline}
          date={project.date}
          role="listitem"
          gridColumn={[
            '1 / span 11',
            '3 / span 7',
            `${index % 2 === 0 ? '1' : '7'} / span 5`,
            `${index % 2 === 0 ? '2' : '7'} / span 4`,
          ]}
          mb={[index === projects.length - 1 ? 0 : 4, null, 0]}
          borderColor={hoveredIndex === index ? 'accent' : 'fg'}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </Grid>
  );
}

export default RelatedProjects;
