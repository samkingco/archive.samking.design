import styled from '@emotion/styled';
import { flex, flexDirection, flexWrap } from 'styled-system';
import Box from './Box';

const Flex = styled(Box)(
  {
    display: 'flex',
  },
  flex,
  flexDirection,
  flexWrap,
);

Flex.displayName = 'Flex';

export default Flex;
