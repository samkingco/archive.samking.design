import React from 'react';
import { PageWrapper, LoadingIndicator } from '../design-system';

function SiteContentFallback(props) {
  return (
    <PageWrapper justifyContent="center" alignItems="center" {...props}>
      <LoadingIndicator />
    </PageWrapper>
  );
}

export default SiteContentFallback;
