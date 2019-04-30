import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  space,
  color,
  borders,
  display,
  opacity,
  width,
  maxWidth,
  minWidth,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
  justifyContent,
  justifySelf,
  alignItems,
  alignContent,
  alignSelf,
  flexBasis,
  gridColumn,
  gridRow,
  gridArea,
} from 'styled-system';

const Box = styled('div', {
  shouldForwardProp,
})(
  space,
  color,
  borders,
  display,
  opacity,
  width,
  maxWidth,
  minWidth,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
  justifyContent,
  justifySelf,
  alignItems,
  alignContent,
  alignSelf,
  flexBasis,
  gridColumn,
  gridRow,
  gridArea,
);

Box.displayName = 'Box';

export default Box;
