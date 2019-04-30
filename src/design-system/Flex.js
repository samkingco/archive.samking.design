import styled from '@emotion/styled';
import { flex, flexDirection, flexWrap, order } from 'styled-system';
import Box from './Box';

const Flex = styled(Box)(
  {
    display: 'flex',
  },
  flex,
  flexDirection,
  flexWrap,
  order,
);

Flex.displayName = 'Flex';

export default Flex;
