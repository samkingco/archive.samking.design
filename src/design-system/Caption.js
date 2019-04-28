import styled from '@emotion/styled';
import BaseText from './BaseText';

const Caption = styled(BaseText)();

Caption.defaultProps = {
  as: 'small',
  m: 0,
  fontFamily: 'text',
  fontSize: 0,
  letterSpacing: 'normal',
};

Caption.displayName = 'Caption';

export default Caption;
