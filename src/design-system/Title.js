import styled from '@emotion/styled';
import BaseText from './BaseText';

const Title = styled(BaseText)({
  textTransform: 'uppercase',
});

Title.defaultProps = {
  as: 'h1',
  m: 0,
  color: 'text',
  fontFamily: 'textAlt',
  fontWeight: 'normal',
  fontSize: 3,
  letterSpacing: 'normal',
};

Title.displayName = 'Title';

export default Title;
