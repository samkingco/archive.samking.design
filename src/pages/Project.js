import React from 'react';
import { useRouteData } from 'react-static';

function Project() {
  const { title } = useRouteData();

  return <h1>{title}</h1>;
}

export default Project;
