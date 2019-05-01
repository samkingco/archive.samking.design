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
  height,
  maxHeight,
  minHeight,
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

const transitions = [
  'color 150ms ease-in-out',
  'border-color 150ms ease-in-out',
  'background 150ms ease-in-out',
  'transform 150ms ease-in-out',
];

const Box = styled('div', {
  shouldForwardProp,
})(
  {
    transition: transitions.join(','),
  },
  space,
  color,
  borders,
  display,
  opacity,
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
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
