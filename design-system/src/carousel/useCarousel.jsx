'use client';
import React, {
  useEffect,
  useRef,
  Children,
  // RefObject,
  useCallback,
  useMemo,
  // ReactNode,
  createRef
} from 'react';
import { useIntersectionObserver, useForceRerender } from '../hooks';

// export interface CarouselItem<T extends HTMLElement = HTMLElement> {
//   itemId: string;
//   isVisible: boolean;
//   ref: RefObject<T>;
//   originalReactNode: ReactNode;
// }

export const useCarousel = (
  scrollContainerRef, // RefObject<HTMLElement>,
  scrollItems,// ReactNode,
  options // { childWidth?: string; childMaxWidth?: string; }
) => {
  const childWidth = options?.childWidth || '100%';
  const childMaxWidth = options?.childMaxWidth || '100%';
  const [hasForcedRerender, forceRerender] = useForceRerender();
  const carouselItemsRef = useRef(new Map());
  // const carouselItemsRef = useRef<Map<string, CarouselItem<HTMLDivElement>>>(new Map());

  const intersectionObserver = useIntersectionObserver(
    useCallback((entries, observer) => {
      entries.forEach(entry => {
        const target = entry.target //as HTMLElement;
        const carouselItemId = target.dataset.itemId || '';
        const carouselItems = carouselItemsRef.current;
        if (!carouselItems.has(carouselItemId)) return;
        const carouselItem = carouselItems.get(carouselItemId) // as CarouselItem<HTMLDivElement>;
        carouselItems.set(
          carouselItemId,
          {
            ...carouselItem,
            isVisible: entry.isIntersecting
          });
      });

      forceRerender();

    }, [carouselItemsRef, forceRerender]),
    useMemo(() => ({
        root: scrollContainerRef.current,
        threshold: 0.8
      }),
      [scrollContainerRef]
    )
  );

  const nextSlide = useCallback(() => {
    const carouselItems = Array.from(carouselItemsRef.current.entries());

    const positionOflastVisibleItem = carouselItems
      .map(([itemId, item]) => item)
      .reduce((acc, curr, index) => curr.isVisible ? index : acc, 0);

    // eslint-disable-next-line
    const [_, carouselItemToScrollTo] =
      positionOflastVisibleItem === carouselItems.length - 1
        ? carouselItems[positionOflastVisibleItem]
        : carouselItems[positionOflastVisibleItem + 1];

    carouselItemToScrollTo.ref?.current?.scrollIntoView?.({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest'
    });

    forceRerender();

  }, [forceRerender]);

  const prevSlide = useCallback(() => {
    const carouselItems = Array.from(carouselItemsRef.current.entries());

    const positionOfFirstVisibleItem = carouselItems
      .map(([itemId, item]) => item)
      .findIndex(item => item.isVisible);

    // eslint-disable-next-line
    const [_, carouselItemToScrollTo] =
      positionOfFirstVisibleItem <= 0
        ? carouselItems[0]
        : carouselItems[positionOfFirstVisibleItem - 1];

    carouselItemToScrollTo.ref?.current?.scrollIntoView?.({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest'
    });

    forceRerender();

  }, [forceRerender]);

  useEffect(() => {
    // const carouselItems: CarouselItem<HTMLDivElement>[] = Children
    const carouselItems  = Children
      .toArray(scrollItems)
      .map((originalReactNode, index) => ({
          itemId: `${index}`,
          isVisible: false,
          originalReactNode,
          ref: createRef(),
        }));

    carouselItemsRef.current = new Map(carouselItems.map(item => [
      item.itemId,
      item
    ]));

    forceRerender();

  }, [scrollItems, forceRerender]);

  useEffect(() => {
    intersectionObserver.disconnect();
    const carouselItems = carouselItemsRef.current;
    carouselItems.forEach(item => {
      item?.ref?.current && intersectionObserver.observe(item.ref.current);
    });
  }, [hasForcedRerender, intersectionObserver]);


  return {
    nextSlide: nextSlide,
    prevSlide: prevSlide,
    carouselItems: Array.from(carouselItemsRef.current.values()),
    children: Array.from(carouselItemsRef.current.values())
      .map(carouselItem => (
        <div
          key={carouselItem.itemId}
          ref={carouselItem.ref}
          children={carouselItem.originalReactNode}
          style={{
            height: '100%',
            flexBasis: childWidth,
            maxWidth: childMaxWidth,
            flexShrink: 0
          }}
          data-item-id={carouselItem.itemId}
        />
      ))
  }
}
