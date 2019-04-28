import styled from '@emotion/styled';
import BaseText from './BaseText';

const Headline = styled(BaseText)();

Headline.defaultProps = {
  as: 'h2',
  m: 0,
};

Headline.displayName = 'Headline';

export default Headline;
