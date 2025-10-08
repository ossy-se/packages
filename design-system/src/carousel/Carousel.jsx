'use client'
import React, { useRef } from 'react';
import { useCarousel } from './useCarousel.jsx';
import { Icon2 } from '../icons/Icon2.jsx';
import { View } from '../view';
import { Button } from '../button';

export const Carousel = ({
  childWidth = '100%',
  childMaxWidth = '100%',
  children,
  ...props
}) => {
  const scrollContainerRef = useRef(null);

  const {
    children: childrenAsCarouselItemComponents,
    carouselItems,
    nextSlide,
    prevSlide,
  } = useCarousel(scrollContainerRef, children, { childWidth, childMaxWidth });

  return (
    <View {...props}>

      <style href="@ossy/design-system/carousel" precedence='high'>
      {`
        [data-hide-scrollbar] {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        [data-hide-scrollbar]::-webkit-scrollbar {
          display: none;
        }
      `}
      </style>

      <View
        ref={scrollContainerRef}
        layout="row"
        data-hide-scrollbar
        style={{ overflowX: 'auto', overflowY: 'hidden', gap: 'var(--space-m)' }}
      >
        { childrenAsCarouselItemComponents }
      </View>

      <View
        layout="row"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--space-s)',
          flexDirection: 'row',
          position: 'relative',
          padding: 'var(--space-m) var(--space-m) var(--space-m) var(--space-m)'
        }}
      >
        <View layout="row" style={{ position: 'absolute', left: 'var(--space-s)', top: 'var(--space-s)', gap: 'var(--space-s)' }}>
          <Button surface="neutral" onClick={prevSlide} style={{ padding: 'var(--space-xs)', borderRadius: '50%' }}>
            <Icon2 icon="chevron-left"  />
          </Button>
          
          <Button surface="neutral" onClick={nextSlide} style={{ padding: 'var(--space-xs)', borderRadius: '50%' }}>
            <Icon2 icon="chevron-right"  />
          </Button>
        </View>
        
        { carouselItems.map(item => <div
            key={item.itemId}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              overflow: 'hidden',
              transition: 'background-color .3s ease',
              backgroundColor: item?.isVisible
                ? 'hsl(0, 0%, 40%)'
                : 'hsl(0, 0%, 90%)'
            }}

        />)}
      </View>

    </View>
  )
}
