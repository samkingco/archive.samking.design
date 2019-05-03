import React from 'react';
import { Flex, Headline, Body, Caption } from '../design-system';

function Job({ date, title, company, about, ...props }) {
  return (
    <Flex flexDirection="column" {...props}>
      <Headline as="h3" fontSize={1} mb={1} order="2">
        {`${title}${company && ` at ${company}`}`}
      </Headline>
      <Caption as="p" aria-label="Date:" color="textAlt" mb={1} order="1">
        {date}
      </Caption>
      <Body order="3">{about}</Body>
    </Flex>
  );
}

export default Job;
