import React, { useRef } from 'react';
import styled from '@emotion/styled';
import Box from './Box';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Img = styled(Box)({
  width: '100%',
  maxWidth: '100%',
  margin: 0,
});

Img.defaultProps = {
  as: 'img',
};

Img.displayName = 'Img';

const ImgWrapper = styled(Box)(({ ratio }) => ({
  ...(ratio && {
    height: 0,
    paddingBottom: `${ratio * 100}%`,
  }),
}));

ImgWrapper.defaultProps = {
  as: 'div',
  m: 0,
};

ImgWrapper.displayName = 'ImgWrapper';

const Image = ({
  src,
  srcSetSizes = [512, 896, 1024, 2048, 2256],
  alt,
  ...props
}) => {
  const wrapperRef = useRef(null);
  const [isInView] = useIntersectionObserver(wrapperRef, {
    threshold: 0,
    rootMargin: '50%',
  });

  const srcSet = srcSetSizes.map(size => `${src}?w=${size} ${size}w`).join(',');
  const sizes = srcSetSizes
    .map((size, index) =>
      index !== srcSetSizes.length
        ? `(max-width: ${size}px) ${size}px`
        : `${size}px`,
    )
    .join(',');

  const imgProps = {
    src: isInView ? `${src}?w=${srcSetSizes[0]}` : '',
    srcSet: isInView ? srcSet : '',
  };

  return (
    <ImgWrapper ref={wrapperRef} {...props}>
      <Img {...imgProps} sizes={sizes} alt={alt} />
    </ImgWrapper>
  );
};

Image.displayName = 'Image';

export default Image;
