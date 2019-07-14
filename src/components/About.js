import React, { useState } from 'react';
import { Box, Grid, Headline, Body, Link } from '../design-system';
import useTextScramble from '../hooks/useTextScramble';

function About({ email, twitter, location, latlong, ...props }) {
  const [showLatLong, setShowLatLong] = useState(null);

  const emailText = useTextScramble({ from: email });
  const twitterText = useTextScramble({ from: `@${twitter}` });
  const locationText = useTextScramble({
    from: showLatLong !== null ? (showLatLong ? location : latlong) : location,
    to: showLatLong ? latlong : location,
  });

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
          I’m currently building internal tools for clinical and operational
          staff at <Link to="https://echo.co.uk">Echo</Link>. This website
          serves as a small showcase of work from the last few years, both
          personal and for startups.
        </Body>
        <Body>
          Email: <Link to={`mailto:${email}`}>{emailText}</Link>
        </Body>
        <Body>
          Twitter:{' '}
          <Link to={`https://twitter.com/${twitter}`}>{twitterText}</Link>
        </Body>
        <Body
          onMouseEnter={() => setShowLatLong(true)}
          onMouseLeave={() => setShowLatLong(false)}
        >
          Location: {locationText}
        </Body>
      </Box>
    </Grid>
  );
}

export default About;
