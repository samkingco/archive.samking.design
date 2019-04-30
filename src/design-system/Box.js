import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  space,
  color,
  borders,
  width,
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
} from 'styled-system';

const Box = styled('div', {
  shouldForwardProp,
})(
  space,
  color,
  borders,
  width,
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
);

Box.displayName = 'Box';

export default Box;
