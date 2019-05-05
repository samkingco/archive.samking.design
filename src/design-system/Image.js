import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import queryString from 'query-string';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import BaseElement from './BaseElement';

const Img = styled(BaseElement)({
  width: '100%',
  maxWidth: '100%',
  margin: 0,
});

Img.displayName = 'Img';

const NoScriptImg = styled(Img)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
});

NoScriptImg.displayName = 'NoScriptImg';

const Wrapper = styled(BaseElement)(({ ratio }) => ({
  position: 'relative',
  ...(ratio && {
    height: 0,
    paddingBottom: `${ratio * 100}%`,
  }),
}));

Wrapper.displayName = 'Wrapper';

const Image = styled(({ src, alt, widths, processing, ...props }) => {
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
    <Wrapper
      as="div"
      ref={wrapperRef}
      bg={hasLoaded ? 'transparent' : props.bg || 'bgAlt'}
      m={0}
      {...props}
    >
      <Img
        as="img"
        src={isInView ? defaultSrc : ''}
        srcSet={isInView ? srcSet : ''}
        sizes={sizes}
        alt={alt}
        onLoad={() => setHasLoaded(true)}
        opacity={hasLoaded ? 1 : 0}
      />
      <noscript>
        <NoScriptImg as="img" src={defaultSrc} alt={alt} />
      </noscript>
    </Wrapper>
  );
})();

Image.defaultProps = {
  widths: [512, 896, 1024, 2048, 2256],
  processing: {
    auto: 'format',
    lossless: true,
    q: 60,
  },
};

Image.displayName = 'Image';

export default Image;
