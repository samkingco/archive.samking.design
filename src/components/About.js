import React, { useState } from 'react';
import { Box, Grid, Headline, Body, Link } from '../design-system';

function About({ email, twitter, location, latlong, ...props }) {
  const [revealLatlong, setRevealLatlong] = useState(false);

  return (
    <Grid gridTemplateColumns="repeat(8, 1fr)" mb={[5, 6]} {...props}>
      <Headline
        as="p"
        gridColumn={['1 / span 8', null, '1 / span 7', null, '2 / span 5']}
        mb={4}
      >
        I’m a designer primarily working on the web. I love building products
        that make people and teams more efficient.
      </Headline>

      <Box
        gridColumn={[
          '1 / span 8',
          '2 / span 7',
          '2 / span 6',
          '2 / span 5',
          '3 / span 4',
        ]}
      >
        <Body mb={2}>
          I’m currently building tools for Restaurants at Deliveroo. This
          website serves as a small showcase of work from the last few years,
          both personal and for startups. Open to new projects—hit me up.
        </Body>
        <Body>
          Email: <Link to={`mailto:${email}`}>{email}</Link>
        </Body>
        <Body>
          Twitter: <Link to={`https://twitter.com/${twitter}`}>@{twitter}</Link>
        </Body>
        <Body
          onMouseEnter={() => setRevealLatlong(true)}
          onMouseLeave={() => setRevealLatlong(false)}
        >
          Location: {revealLatlong ? latlong : location}
        </Body>
      </Box>
    </Grid>
  );
}

export default About;
