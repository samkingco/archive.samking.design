import styled from '@emotion/styled';
import BaseText from './BaseText';

const Body = styled(BaseText)();

Body.defaultProps = {
  as: 'p',
  m: 0,
};

Body.displayName = 'Body';

export default Body;
