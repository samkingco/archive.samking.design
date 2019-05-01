import React, { useState, useEffect } from 'react';
import { Title, Body, Flex } from '../design-system';
import { useTheme } from '../components/ActiveTheme';

function NotFound() {
  const [ready, setReady] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setReady(true);
    setTheme('red');
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
