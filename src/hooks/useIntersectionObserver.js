import { useState, useEffect } from 'react';

function useIntersectionObserver(ref, { threshold, root, rootMargin }) {
  const isBrowser = typeof document !== 'undefined';
  const [state, setState] = useState({
    isInView: false,
    hasTriggered: false,
    entry: undefined,
  });

  const observer = !isBrowser
    ? {}
    : new IntersectionObserver(
        (entries, observerInstance) => {
          if (entries[0].intersectionRatio > 0) {
            setState({
              isInView: true,
              hasTriggered: true,
              entry: observerInstance,
            });
            observerInstance.unobserve(ref.current);
          }
          return;
        },
        {
          threshold: threshold || 0,
          root: root || null,
          rootMargin: rootMargin || '0%',
        },
      );

  useEffect(() => {
    if (ref.current && !state.hasTriggered) {
      observer.observe(ref.current);
    }
  });

  return [state.isInView, state.entry];
}

export default useIntersectionObserver;
