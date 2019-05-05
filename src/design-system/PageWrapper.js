import styled from '@emotion/styled';
import css from '@styled-system/css';
import { Flex } from './index';

const PageWrapper = styled(Flex)(
  css({
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    height: '100%',
    px: [1, 2],
    py: [5, 6],
    mx: 'auto',
    mb: 5,
  }),
);

PageWrapper.displayName = 'PageWrapper';

export default PageWrapper;
