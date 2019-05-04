import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import queryString from 'query-string';
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
  alt,
  widths = [512, 896, 1024, 2048, 2256],
  processing,
  ...props
}) => {
  const wrapperRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isInView] = useIntersectionObserver(wrapperRef, {
    threshold: 0,
    rootMargin: '50%',
  });

  function srcForWidth(width) {
    return `${src}?${queryString.stringify({ ...processing, w: width })}`;
  }

  const defaultSrc = srcForWidth(widths[0]);

  const srcSet = widths
    .map(width => `${srcForWidth(width)} ${width}w`)
    .join(',');

  const sizes = widths
    .map((width, index) =>
      index !== widths.length
        ? `(max-width: ${width}px) ${width}px`
        : `${width}px`,
    )
    .join(',');

  return (
    <ImgWrapper
      ref={wrapperRef}
      bg={hasLoaded ? 'transparent' : props.bg || 'bgAlt'}
      {...props}
    >
      <Img
        src={isInView ? defaultSrc : ''}
        srcSet={isInView ? srcSet : ''}
        sizes={sizes}
        alt={alt}
        onLoad={() => setHasLoaded(true)}
        opacity={hasLoaded ? 1 : 0}
      />
      <noscript>
        <NoScriptImg src={defaultSrc} alt={alt} />
      </noscript>
    </ImgWrapper>
  );
};

Image.defaultProps = {
  processing: {
    auto: 'format',
    lossless: true,
    q: 60,
  },
};

Image.displayName = 'Image';

export default Image;
