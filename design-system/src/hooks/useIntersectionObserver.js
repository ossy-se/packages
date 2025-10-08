'use client'
import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (
  onNewObservation, // (entries, observer) => void,
  options
) => {

  const observerRef = useRef(typeof IntersectionObserver !== 'undefined' && new IntersectionObserver(
    onNewObservation,
    options
  ));

  useEffect(() => {
    const currentObserver = observerRef.current;
    currentObserver.disconnect();

    const newObserver = new IntersectionObserver(
      onNewObservation,
      options
    );

    return () => {
      newObserver.disconnect();
    }
  }, [onNewObservation, options]);

  return observerRef?.current;
}
