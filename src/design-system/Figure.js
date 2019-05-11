import React from 'react';
import styled from '@emotion/styled';
import { Box, Image, Caption } from './index';

const Figure = styled(
  ({ src, srcSet, sizes, alt, caption, ratio, ...props }) => (
    <Box as="figure" m={0} {...props}>
      <Image src={src} srcSet={srcSet} sizes={sizes} alt={alt} ratio={ratio} />
      {caption && (
        <Caption as="figcaption" color="textAlt" textAlign="right" mt={1}>
          {caption}
        </Caption>
      )}
    </Box>
  ),
)();

Figure.displayName = 'Figure';

export default Figure;
