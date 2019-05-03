import styled from '@emotion/styled';
import {
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
} from 'styled-system';
import Box from './Box';

const BaseText = styled(Box)(
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
);

BaseText.displayName = 'BaseText';

export default BaseText;
