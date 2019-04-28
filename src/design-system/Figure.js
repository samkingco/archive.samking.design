import React from 'react';
import Box from './Box';
import Image from './Image';

const Figure = ({ src, alt, caption, ratio, ...props }) => (
  <Box as="figure" {...props}>
    <Image src={src} alt={alt} ratio={ratio} />
    {caption && <Box as="figcaption">{caption}</Box>}
  </Box>
);

Figure.displayName = 'Figure';

export default Figure;
