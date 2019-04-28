import React from 'react';
import { Box, Headline, Body } from '../design-system';

function Job({ date, title, company, about, ...props }) {
  return (
    <Box {...props}>
      <Body aria-label="Date:">{date}</Body>
      <Headline as="h3">
        {`${title}${company ? ` at ${company}` : ''}`}
      </Headline>
      <Body>{about}</Body>
    </Box>
  );
}

export default Job;
