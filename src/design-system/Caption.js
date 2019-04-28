import styled from '@emotion/styled';
import BaseText from './BaseText';

const Caption = styled(BaseText)();

Caption.defaultProps = {
  as: 'small',
  m: 0,
  color: 'text',
  fontFamily: 'text',
  fontWeight: 'normal',
  fontSize: 0,
  letterSpacing: 'normal',
};

Caption.displayName = 'Caption';

export default Caption;
