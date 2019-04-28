import styled from '@emotion/styled';
import BaseText from './BaseText';

const Headline = styled(BaseText)({
  textTransform: 'uppercase',
});

Headline.defaultProps = {
  as: 'h2',
  m: 0,
  color: 'text',
  fontFamily: 'textAlt',
  fontWeight: 'bold',
  fontSize: 2,
  letterSpacing: 'normal',
};

Headline.displayName = 'Headline';

export default Headline;
