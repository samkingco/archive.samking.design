import styled from '@emotion/styled';
import css from '@styled-system/css';
import {
  shouldForwardProp,
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS,
} from './props';

const BASE_TEXT_STYLE = css({
  m: 0,
  fontFamily: 'text',
  fontWeight: 'normal',
  color: 'text',
  letterSpacing: 'normal',
  lineHeight: 1,
  transition: 'color 250ms ease-in-out',
});

const BASE_TEXT_ALT_STYLE = css({
  fontFamily: 'textAlt',
  fontWeight: 'bold',
  letterSpacing: '0',
  lineHeight: 0,
});

export const Caption = styled('small', { shouldForwardProp })(
  BASE_TEXT_STYLE,
  css({
    fontSize: 0,
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS,
);

Caption.displayName = 'Caption';

export const Body = styled('p', { shouldForwardProp })(
  BASE_TEXT_STYLE,
  css({
    fontSize: 1,
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS,
);

Body.displayName = 'Body';

export const Headline = styled('h2', { shouldForwardProp })(({ size }) => {
  const sizes = {
    s: 3,
    m: [3, 4],
    l: [4, 5],
  };

  return [
    BASE_TEXT_STYLE,
    BASE_TEXT_ALT_STYLE,
    css({
      fontSize: sizes[size] || sizes.m,
    }),
    BASE_ELEMENT_PROPS,
    TYPOGRAPHY_PROPS,
  ];
});

Headline.displayName = 'Headline';

export const Title = styled('h2', { shouldForwardProp })(
  BASE_TEXT_STYLE,
  BASE_TEXT_ALT_STYLE,
  css({
    fontSize: [4, 5],
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS,
);

Title.displayName = 'Title';

export const WordMark = styled('h1', { shouldForwardProp })(
  BASE_TEXT_STYLE,
  BASE_TEXT_ALT_STYLE,
  css({
    fontSize: 2,
  }),
  BASE_ELEMENT_PROPS,
  TYPOGRAPHY_PROPS,
);

WordMark.displayName = 'WordMark';
