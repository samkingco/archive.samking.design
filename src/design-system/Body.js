import styled from '@emotion/styled';
import BaseText from './BaseText';

const Body = styled(BaseText)();

Body.defaultProps = {
  as: 'p',
  m: 0,
  color: 'text',
  fontFamily: 'text',
  fontWeight: 'normal',
  fontSize: 1,
  lineHeight: 1,
  letterSpacing: 'normal',
};

Body.displayName = 'Body';

export default Body;
