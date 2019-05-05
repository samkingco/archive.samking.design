import styled from '@emotion/styled';
import { flex, flexDirection, flexWrap } from 'styled-system';
import BaseElement from './BaseElement';

const Flex = styled(BaseElement)(
  {
    display: 'flex',
  },
  flex,
  flexDirection,
  flexWrap,
);

Flex.displayName = 'Flex';

export default Flex;
