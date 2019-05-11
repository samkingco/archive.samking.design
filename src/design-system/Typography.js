import styled from '@emotion/styled';
import css from '@styled-system/css';
import {
  shouldForwardProp,
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS,
} from './props';

const BASE_TEXT_STYLE = css({
  m: 0,
  color: 'text',
  letterSpacing: 'normal',
  lineHeight: 1,
  transition: 'color 250ms ease-in-out 0s',
});

export const Caption = styled('small', { shouldForwardProp })(
  BASE_TEXT_STYLE,
  css({
    fontFamily: 'text',
    fontWeight: 'normal',
    fontSize: 0,
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS,
);

Caption.displayName = 'Caption';

export const Body = styled('p', { shouldForwardProp })(
  BASE_TEXT_STYLE,
  css({
    fontFamily: 'text',
    fontWeight: 'normal',
    fontSize: 1,
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS,
);

Body.displayName = 'Body';

export const Headline = styled('h2', { shouldForwardProp })(({ size }) => {
  const sizes = {
    s: 1,
    m: [1, 2],
    l: [2, 3],
  };

  return [
    BASE_TEXT_STYLE,
    css({
      fontFamily: 'textAlt',
      fontWeight: 'bold',
      fontSize: sizes[size] || sizes.m,
      textTransform: 'uppercase',
    }),
    BASE_ELEMENT_PROPS,
    TYPOGRAPHY_PROPS,
  ];
});

Headline.displayName = 'Headline';

export const Title = styled('h2', { shouldForwardProp })(
  BASE_TEXT_STYLE,
  css({
    fontFamily: 'textAlt',
    fontWeight: 'bold',
    fontSize: [2, 3],
    textTransform: 'uppercase',
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS,
);

Title.displayName = 'Title';

export const WordMark = styled('h1', { shouldForwardProp })(
  BASE_TEXT_STYLE,
  css({
    color: 'text',
    fontFamily: 'textAlt',
    fontWeight: 'bold',
    fontSize: 1,
    letterSpacing: 'extreme',
    textTransform: 'uppercase',
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS,
);

WordMark.displayName = 'WordMark';
