import styled from '@emotion/styled';
import Flex from './Flex';

const PageWrapper = styled(Flex)();

PageWrapper.defaultProps = {
  flexDirection: 'column',
  flex: 1,
  width: '100%',
  maxWidth: '70em',
  height: '100%',
  px: [1, 2],
  py: [5, 6],
  mx: 'auto',
  mb: 5,
};

export default PageWrapper;
