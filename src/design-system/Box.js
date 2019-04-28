import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  space,
  color,
  width,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
} from 'styled-system';

const Box = styled('div', {
  shouldForwardProp,
})(space, width, color, position, top, left, right, bottom, zIndex);

Box.displayName = 'Box';

export default Box;
