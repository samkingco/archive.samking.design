import styled from '@emotion/styled';
import BaseText from './BaseText';

const Caption = styled(BaseText)();

Caption.defaultProps = {
  as: 'small',
  m: 0,
};

Caption.displayName = 'Caption';

export default Caption;
