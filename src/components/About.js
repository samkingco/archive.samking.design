import React, { useState } from 'react';
import { Box, Grid, Headline, Body, Link } from '../design-system';
import useTextScramble from '../hooks/useTextScramble';

function About({ email, socialHandle, location, latlong, ...props }) {
  const [showLatLong, setShowLatLong] = useState(null);

  const emailText = useTextScramble({ from: email });
  const instagramText = useTextScramble({ from: `@${socialHandle}` });
  const twitterText = useTextScramble({ from: `@${socialHandle}` });
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
        I’m a designer that loves building products to help people and teams
        make better decisions.
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
        <Body mb={1}>
          I’m currently revamping the patient experience at{' '}
          <Link to="https://echo.co.uk">Echo</Link> so more people can get the
          medicine they need. Previously I was working on internal tools for our
          clinical and operational staff.
        </Body>
        <Body mb={2}>
          This website serves as a small showcase of work from the last few
          years, both personal and for startups.
        </Body>
        <Body>
          Email: <Link to={`mailto:${email}`}>{emailText}</Link>
        </Body>
        <Body>
          Instagram:{' '}
          <Link to={`https://instagram.com/${socialHandle}`}>
            {instagramText}
          </Link>
        </Body>
        <Body>
          Twitter:{' '}
          <Link to={`https://twitter.com/${socialHandle}`}>{twitterText}</Link>
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
