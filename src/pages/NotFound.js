import React, { useState, useEffect } from 'react';
import { PageWrapper, Title, Body } from '../design-system';
import useTheme from '../hooks/useTheme';

function NotFound() {
  useTheme('red');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return ready ? (
    <PageWrapper justifyContent="center" alignItems="center">
      <Title>{'F@#K!'}</Title>
      <Body>{"That page ain't here"}</Body>
    </PageWrapper>
  ) : null;
}

export default NotFound;
