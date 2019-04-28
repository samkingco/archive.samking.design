import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { space, color, width } from 'styled-system';

const Box = styled('div', {
  shouldForwardProp,
})(space, width, color);

Box.displayName = 'Box';

export default Box;
