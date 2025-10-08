import React, {
  useEffect,
  useRef,
  useState,
} from 'react'

// Tries to stack the columns into even heights
const spreadEven = (imgDataObjects, numberOfColumns) => {
  const reducer = (totalHeight, curImgObj) => totalHeight + curImgObj.height;
  const totalStackHeight = imgDataObjects.reduce(reducer, 0);
  const desiredColumnHeight = Math.floor(totalStackHeight / numberOfColumns);
  const arrayCopy = imgDataObjects.slice(0);
  const output = [];

  if (numberOfColumns === 1) {
    return [arrayCopy];
  }
  else {
    while ( numberOfColumns > 0 ) {
      let columnHeight = 0;
      let cutListAt = 1;

      arrayCopy.forEach((item, index) => {
        if (columnHeight < desiredColumnHeight ) {
          columnHeight += item.height;
          cutListAt = index;
        }
      });

      output.push({
        columnHeight,
        columnItems: arrayCopy.splice(0, cutListAt)
      });

      numberOfColumns -= 1;
    }

    // Handle Leftovers
    arrayCopy.forEach(item => {
      output.sort((a, b) => a.columnHeight - b.columnHeight);
      output[0].columnHeight += item.height;
      output[0].columnItems.push(item);
    });

  }
   return  output.map(item => item.columnItems);
}

export const ColumnGallery = ({
  columnMinWidth = 250,
  minNumberOfColumns = 2,
  items = [],
  ...props
}) => {
  const containerRef = useRef()
  const childrenRef = useRef()

  const [width, setWidth] =  useState(0)
  const [columns, setColumns] =  useState([])
  const [prevNumberOfColumns, setPrevNumberOfColumns] =  useState(0)

  useEffect(() => {

    if (!items.length) return

    let numberOfColumns = Math.floor((width / columnMinWidth));

    numberOfColumns = numberOfColumns < minNumberOfColumns
      ? minNumberOfColumns
      : numberOfColumns;

    const columnCountDifference = Math.abs(numberOfColumns - prevNumberOfColumns);

    if (columnCountDifference > 0) {
      setColumns(spreadEven(items, numberOfColumns))
      setPrevNumberOfColumns(numberOfColumns)
    }

  }, [width, items, columnMinWidth, minNumberOfColumns, prevNumberOfColumns])

  useEffect(() => {

    const setContainerWidth = () => {
      setWidth(containerRef.current.offsetWidth);
    }

    setContainerWidth()

    window.addEventListener('resize', setContainerWidth)

    return () => {
      window.removeEventListener('resize', setContainerWidth)
    }

  }, [])

  return (
    <div ref={containerRef} data-column-gallery className="gallery-container">
      <style href="@ossy/design-system/column-gallery" precedence="high">
      {`
        [data-column-gallery] {
          --color-gray-40: hsl(0, 0%, 40%);
          --color-gray-60: hsl(0, 0%, 60%);
          --color-gray-85: hsl(0, 0%, 85%);
          --color-gray-98: hsl(0, 0%, 98%);

          --color-digital-blue: hsl(193, 83%, 52%);

          --color-highlight: var(--color-digital-blue);

          --space-xxs: 2px;
          --space-xs: 4px;
          --space-s: 8px;
          --space-m: 16px;
          --space-l: 32px;
          --space-xl: 64px;
          --space-xxl: 128px;

          --space-inset-xxs: 2px 2px 2px 2px;
          --space-inset-xs: 4px 4px 4px 4px;
          --space-inset-s: 8px 8px 8px 8px;
          --space-inset-m: 16px 16px 16px 16px;
          --space-inset-l: 32px 32px 32px 32px;
          --space-inset-xl: 64px 64px 64px 64px;
          --space-inset-xxl: 128px 128px 128px 128px;

          --space-inset-squish-s: 4px 8px 4px 8px;
          --space-inset-squish-m: 8px 16px 8px 16px;
          --space-inset-squish-l: 16px 32px 16px 32px;

          --space-inset-stretch-s: 12px 8px 12px 8px;
          --space-inset-stretch-m: 24px 16px 24px 16px;

          --space-inline-xxs: 0px 2px 0px 0px;
          --space-inline-xs: 0px 4px 0px 0px;
          --space-inline-s: 0px 8px 0px 0px;
          --space-inline-m: 0px 16px 0px 0px;
          --space-inline-l: 0px 32px 0px 0px;
          --space-inline-xl: 0px 64px 0px 0px;
          --space-inline-xxl: 0px 128px 0px 0px;

          --space-inline-reverse-xxs: 0px 0px 0px 2px;
          --space-inline-reverse-xs: 0px 0px 0px 4px;
          --space-inline-reverse-s: 0px 0px 0px 8px;
          --space-inline-reverse-m: 0px 0px 0px 16px;
          --space-inline-reverse-l: 0px 0px 0px 32px;
          --space-inline-reverse-xl: 0px 0px 0px 64px;
          --space-inline-reverse-xxl: 0px 0px 0px 128px;

          --space-stack-xxs: 0px 0px 2px 0px;
          --space-stack-xs: 0px 0px 4px 0px;
          --space-stack-s: 0px 0px 8px 0px;
          --space-stack-m: 0px 0px 16px 0px;
          --space-stack-l: 0px 0px 32px 0px;
          --space-stack-xl: 0px 0px 64px 0px;
          --space-stack-xxl: 0px 0px 128px 0px;

          display: block;

          height: auto;
          width: 99%;
          margin: 0 auto;
        }

        [data-column-gallery].gallery-container {
          height: auto;
          width: 99%;
          margin: 0 auto;
        }
        
        [data-column-gallery] .header-search {
          padding: var(--space-inset-m);
          background: hsl(0, 0%, 100%);
        }
        
        [data-column-gallery] .header-search input {
          width: 100%;
          padding: var(--space-inset-stretch-s);
          background: hsl(0, 0%, 95%);
          border: 1px solid hsl(0, 0%, 95%);
          border-radius: 3px;
          box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .18);
        
          color: var(--color-gray-40);
          font-size: 1rem;
        
        }
        
        [data-column-gallery] .header-search input:focus  {
          border: 1px solid var(--color-highlight);
          outline: none;
          box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, .20);
        }

        [data-column-gallery] .oskw-gallery {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        [data-column-gallery] .oskw-gallery * {
          margin: 0;
          padding: 0;
          'box-sizing: border-box;
        }
        
        [data-column-gallery] .oskw-gallery .oskw-card-group: {
          width: 100%;
          height: 100%;
          padding: var(--space-inset-s);
          position: relative;
        }
        
        [data-column-gallery] .oskw-gallery .oskw-card-group  .oskw-column {
          display: inline-block;
        }
        
        [data-column-gallery] .oskw-gallery .oskw-img-wrapper {
          width: 100%;
          height: auto;
          overflow: hidden;
        }
        
        [data-column-gallery] .oskw-gallery .oskw-img-wrapper img {
          width: 100%;
          height: auto;
        }
        
        [data-column-gallery] .oskw-gallery .oskw-info-message {
          width: 100%;
          color: var(--color-gray-40);
          'text-align': center;
          padding: var(--space-inset-stretch-m);
        }

        @media ( min-width: 700px ) {

          [data-column-gallery] .header-search {
            padding: var(--space-inset-stretch-m);
            display: flex;
            justify-content: center;
          }
        
          [data-column-gallery] .header-search div {
            display: inline-block;
            margin: 0 auto;
          }
        
          [data-column-gallery] .header-search input {
            width: 350px;
          }
        
          [data-column-gallery] .header-search input:focus {
            border: 1px solid var(--color-highlight);
            outline: none;
            box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, .20);
          }
        
        }
        
        @supports (display: flex) and (flex: 1) {

          [data-column-gallery] .oskw-gallery .oskw-card-group {
            display: flex;
          }
        
          [data-column-gallery] .oskw-gallery .oskw-card-group .oskw-column {
            flex: 1;
          }

        }
        
      `}
      </style>
      <div id='oskw-gallery' className="oskw-gallery">
        { columns.length !== 0 && (
          <div className="oskw-card-group">
            { columns.map((column, i) => (
                <div className="oskw-column" key={i}>
                  {/* todo replace with children **/}
                  {column.map(imgData => (
                    <ImageCard
                      key={imgData.url}
                      title={imgData.title}
                      src={imgData.url}
                      link={imgData.link}
                      dateTaken={imgData.dateTaken}
                    />
                  ))}
                </div>
            ))}
          </div>
        ) }
      </div>
    </div>
  )
}
