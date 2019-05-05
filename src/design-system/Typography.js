import styled from '@emotion/styled';
import css from '@styled-system/css';
import { color, textAlign } from 'styled-system';
import BaseElement from './BaseElement';

const BaseText = styled(BaseElement)(
  css({
    transition: 'color 150ms ease-in-out',
    lineHeight: 1,
  }),
  color,
  textAlign,
);

BaseText.displayName = 'BaseText';

export const Caption = styled(BaseText)(
  css({
    fontFamily: 'text',
    fontWeight: 'normal',
    fontSize: 0,
    letterSpacing: 'normal',
  }),
);

Caption.defaultProps = {
  as: 'small',
  color: 'text',
  m: 0,
};

Caption.displayName = 'Caption';

export const Body = styled(BaseText)(
  css({
    fontFamily: 'text',
    fontWeight: 'normal',
    fontSize: 1,
    letterSpacing: 'normal',
  }),
);

Body.defaultProps = {
  as: 'p',
  color: 'text',
  m: 0,
};

Body.displayName = 'Body';

export const Headline = styled(BaseText)(({ size }) => {
  const sizes = {
    s: 1,
    m: [1, 2],
    l: [2, 3],
  };

  return css({
    fontFamily: 'textAlt',
    fontWeight: 'bold',
    fontSize: sizes[size] || sizes.m,
    letterSpacing: 'normal',
    textTransform: 'uppercase',
  });
});

Headline.defaultProps = {
  as: 'h2',
  color: 'text',
  m: 0,
};

Headline.displayName = 'Headline';

export const Title = styled(BaseText)(
  css({
    fontFamily: 'textAlt',
    fontWeight: 'bold',
    fontSize: [2, 3],
    letterSpacing: 'normal',
    textTransform: 'uppercase',
  }),
);

Title.defaultProps = {
  as: 'h2',
  color: 'text',
  m: 0,
};

Title.displayName = 'Title';

export const WordMark = styled(BaseText)(
  css({
    color: 'text',
    fontFamily: 'textAlt',
    fontWeight: 'bold',
    fontSize: 1,
    letterSpacing: 'extreme',
    textTransform: 'uppercase',
  }),
);

WordMark.defaultProps = {
  m: 0,
};

WordMark.displayName = 'WordMark';
