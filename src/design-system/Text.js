import React from 'react';
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

const Text = styled(Box)(
  display,
  fontFamily,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
);

Text.defaultProps = {
  m: 0,
  color: 'text',
  letterSpacing: 'normal',
};

Text.displayName = 'Text';

export const Caption = props => (
  <Text
    as="small"
    fontSize={0}
    fontFamily="text"
    fontWeight="normal"
    {...props}
  />
);

export const Body = props => (
  <Text as="p" fontSize={1} fontFamily="text" fontWeight="normal" {...props} />
);

export const Headline = props => (
  <Text
    as="h2"
    fontSize={2}
    fontFamily="textAlt"
    fontWeight="bold"
    {...props}
  />
);

export const Title = props => (
  <Text
    as="h1"
    fontSize={3}
    fontFamily="textAlt"
    fontWeight="bold"
    {...props}
  />
);

export default Text;
