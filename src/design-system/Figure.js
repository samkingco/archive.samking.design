import React from 'react';
import styled from '@emotion/styled';
import Box from './Box';
import Image from './Image';
import Caption from './Caption';

const Figure = styled(
  ({ src, srcSet, sizes, alt, caption, ratio, ...props }) => (
    <Box as="figure" {...props}>
      <Image src={src} srcSet={srcSet} sizes={sizes} alt={alt} ratio={ratio} />
      {caption && (
        <Caption as="figcaption" color="textAlt" textAlign="right" mt={1}>
          {caption}
        </Caption>
      )}
    </Box>
  ),
)();

Figure.defaultProps = {
  m: 0,
};

Figure.displayName = 'Figure';

export default Figure;
