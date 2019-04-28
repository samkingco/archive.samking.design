import React from 'react';
import { useRouteData } from 'react-static';
import { Box, Title, Body } from '../design-system';
import ContentNode from '../components/ContentNode';

function Project() {
  const { title, intro, content } = useRouteData();

  return (
    <Box as="article">
      <Box as="hgroup">
        <Title>{title}</Title>
        <Body>{intro}</Body>
      </Box>

      {content.map((node, index) => (
        <ContentNode key={`${node.type}.${index}`} node={node} />
      ))}
    </Box>
  );
}

export default Project;
