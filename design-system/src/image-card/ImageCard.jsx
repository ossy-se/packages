import React from 'react'
import { Image } from '../image/Image.jsx'

export const ImageCard = ({
  title,
  subTitle,
  src,
  placeholderSrc,
  href,
  target,
  as: Container = 'div',
  ...props
}) => {
  return (
    <Container {...props} data-image-card>
      <style href="@ossy/design-system/image-card" precedence="high">
      {`
        [data-image-card] {
          --color-gray-40: hsl(0, 0%, 40%);
          --color-gray-60: hsl(0, 0%, 60%);
          --space-inset-s: 8px 8px 8px 8px;
          --space-inset-squish-s: 4px 8px 4px 8px;
          --space-inset-stretch-s: 12px 8px 12px 8px;
        
          display: block;
          padding: var(--space-inset-s);
          transition: transform .3s ease, opacity .3s ease;
        }
        
        [data-image-card] * {
          box-sizing: border-box;
        }
        
        [data-image-card] .oskw-inner-content {
          display: block;
          text-decoration: none;
          background: hsl(0, 0%, 100%);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
          transition: transform .3s ease;
          border-radius: 10px;
          overflow: hidden;
        }
        
        [data-image-card] .oskw-inner-content:hover {
          transform: scale(1.01);
        }
        
        [data-image-card] .oskw-inner-content img {
          border: none;
          display: block;
        }
        
        [data-image-card] .oskw-info {
          padding: var(--space-inset-stretch-s);
          line-height: 1.5;
          font-size: .9rem;
          font-family: sans-serif;
        }
        
        [data-image-card] .oskw-info .oskw-title {
          font-size: 1rem;
          color: var(--color-gray-40);
        }
        
        [data-image-card] .oskw-info .oskw-date { color: var(--color-gray-60); },
        
        [data-image-card] .oskw-img-wrapper {
          width: 100%;
          height: auto;
          overflow: hidden;
        }
        
        [data-image-card] .oskw-img-wrapper img {
          width: 100%;
          height: auto;
        }
        
      `}
      </style>
      <a className="oskw-inner-content" href={href} target={target}>
        <div className="oskw-body">
          <div className="oskw-img-wrapper">
            <Image
              src={src}
              alt={title}
              placeholderSrc={placeholderSrc}
            />
          </div>
          {(!!title || !!subTitle) && (
            <header className="oskw-info">
              { !!title && <h5 className="oskw-title">{title}</h5> }
              { !!subTitle && <span className="oskw-date">{subTitle}</span> }
            </header>
          )}
        </div>
      </a>
    </Container>
  )

}
