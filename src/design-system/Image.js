import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import queryString from 'query-string';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { shouldForwardProp, BASE_ELEMENT_PROPS } from './props';

const Img = styled('img', { shouldForwardProp })(
  {
    width: '100%',
    maxWidth: '100%',
    margin: 0,
    transition: 'opacity 250ms ease-in-out 250ms',
  },
  BASE_ELEMENT_PROPS,
);

Img.displayName = 'Img';

const NoScriptImg = styled(Img)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
});

NoScriptImg.displayName = 'NoScriptImg';

const Wrapper = styled('div', { shouldForwardProp })(
  {
    margin: 0,
    transition: 'background 250ms ease-in-out 0s',
  },
  BASE_ELEMENT_PROPS,
  ({ ratio }) => ({
    position: 'relative',
    ...(ratio && {
      height: 0,
      paddingBottom: `${ratio * 100}%`,
    }),
  }),
);

Wrapper.displayName = 'Wrapper';

const Image = styled(
  ({
    src,
    alt,
    widths = [512, 896, 1024, 2048, 2256],
    processing = {
      auto: 'format',
      lossless: true,
      q: 60,
    },
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
      <Wrapper
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
      </Wrapper>
    );
  },
)();

Image.displayName = 'Image';

export default Image;
