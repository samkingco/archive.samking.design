import React, { useRef, useState } from 'react';
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

const NoScriptImg = styled(Img)({
  position: 'absolute',
  top: 0,
  left: 0,
});

const ImgWrapper = styled(Box)(({ ratio }) => ({
  position: 'relative',
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
  const [hasLoaded, setHasLoaded] = useState(false);
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
    <ImgWrapper
      ref={wrapperRef}
      bg={hasLoaded ? 'transparent' : props.bg || 'bgAlt'}
      {...props}
    >
      <Img
        {...imgProps}
        sizes={sizes}
        alt={alt}
        onLoad={() => setHasLoaded(true)}
        opacity={hasLoaded ? 1 : 0}
      />
      <noscript>
        <NoScriptImg src={`${src}?w=${srcSetSizes[0]}`} alt={alt} />
      </noscript>
    </ImgWrapper>
  );
};

Image.displayName = 'Image';

export default Image;
