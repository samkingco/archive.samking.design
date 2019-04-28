import styled from '@emotion/styled';
import {
  display,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
} from 'styled-system';
import Box from './Box';

const BaseText = styled(Box)(
  display,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
);

BaseText.displayName = 'BaseText';

export default BaseText;
