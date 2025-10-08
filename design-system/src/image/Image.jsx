import React, { useState, useRef, useEffect } from 'react'

export const Image = ({
  placeholderSrc,
  src,
  alt,
  style,
  ...props
}) => {
  const imageRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // check if image is already loaded, the onLoad event will not be triggered
    if (imageRef.current && imageRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div style={style} data-image>

      <style href="@ossy/design-system/image" precedence="high" >
      {`
        [data-image] {
          position: relative;
          overflow: hidden;
        }

        [data-image] .placeholder,
        [data-image] .source {
          object-fit: contain;
          object-position: center center;
          transition: opacity .3s ease, filter .3s ease;
          line-height: 1;
          display: block;
        }

        [data-image] .placeholder {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          width: 100%;
          height: 100%;
          filter: blur(20);
          opacity: 1;
        }

        [data-image] .source {
          filter: blur(20);
          opacity: 0;
          width: 100%;
          height: 100%;
        }

        [data-image] [data-loaded="true"].source {
          opacity: 1;
          filter: blur(0);
        }

        [data-image] [data-loaded="true"].placeholder {
          opacity: 0;
          filter: blur(0);
        }

      `}
      </style>

      { !placeholderSrc ? null :
          <img data-loaded={loaded} className="placeholder" src={placeholderSrc} alt={alt}  />
      }

      <img
        className="source"
        data-loaded={loaded}
        ref={imageRef}
        src={src}
        alt={alt}
        {...props}
        onLoad={(e) => { setLoaded(true) }}
      />

    </div>
  )
}
