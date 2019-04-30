import React from 'react';
import { Box, Headline, Body, Caption } from '../design-system';

function Job({ date, title, company, about, ...props }) {
  return (
    <Box {...props}>
      <Caption aria-label="Date:" color="textAlt" mb={1} display="block">
        {date}
      </Caption>
      <Headline as="h3" fontSize={1} mb={1}>
        {`${title}${company ? ` at ${company}` : ''}`}
      </Headline>
      <Body>{about}</Body>
    </Box>
  );
}

export default Job;
