import React from 'react';
import styled from '@emotion/styled';
import { Flex } from '../design-system';

const TargetRouter = styled(Flex)({
  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

function RouterContainer(props) {
  return <TargetRouter flexDirection="column" flex="1" {...props} />;
}

export default RouterContainer;
