import React from 'react';
import { Box, Title } from '../design-system';

function NotFound() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    setReady(true);
  }, []);

  return ready ? (
    <Box>
      <Title>404 - Not found</Title>
    </Box>
  ) : null;
}

export default NotFound;
