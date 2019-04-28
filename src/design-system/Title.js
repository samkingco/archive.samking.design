import styled from '@emotion/styled';
import BaseText from './BaseText';

const Title = styled(BaseText)();

Title.defaultProps = {
  as: 'h1',
  m: 0,
};

Title.displayName = 'Title';

export default Title;
