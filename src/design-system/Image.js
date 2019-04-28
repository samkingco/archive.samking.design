import React from 'react';
import styled from '@emotion/styled';
import Box from './Box';

const Img = styled(Box)({
  width: '100%',
  maxWidth: '100%',
  margin: 0,
});

Img.defaultProps = {
  as: 'img',
};

Img.displayName = 'Img';

const ImgWrapper = styled(Box)(({ ratio }) => {
  return ratio
    ? {
        height: 0,
        paddingBottom: `${ratio * 100}%`,
      }
    : {};
});

ImgWrapper.defaultProps = {
  as: 'div',
  m: 0,
};

ImgWrapper.displayName = 'ImgWrapper';

const Image = ({ src, alt, ...props }) => (
  <ImgWrapper {...props}>
    <Img src={src} alt={alt} />
  </ImgWrapper>
);

Image.displayName = 'Image';

export default Image;
