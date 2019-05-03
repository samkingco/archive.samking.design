import React, { useState, useEffect } from 'react';
import { Title, Body, Flex } from '../design-system';
import useTheme from '../hooks/useTheme';

function NotFound() {
  useTheme('red');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return ready ? (
    <Flex
      as="main"
      role="main"
      flexDirection="column"
      alignItems="center"
      px={[1, 2]}
      py={5}
      maxWidth="70em"
      mx="auto"
    >
      <Title>{'F@#K!'}</Title>
      <Body>{"That page ain't here"}</Body>
    </Flex>
  ) : null;
}

export default NotFound;
