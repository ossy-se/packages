import React from 'react'

export const Breadcrumbs = ({
  divider = '/',
  as: Element = 'div',
  ...props
}) => (
  <>
    <style href="@ossy/design-system/breadcrumbs" precedence='high'>
    {`
      [data-breadcrumbs] {
        display: inline-flex;
        overflow: hidden;
        background-color: transparent;
        height: 34px;
        transition: background-color .3s ease;
      }
      [data-breadcrumbs] [data-breadcrumb-item] {
        display: inline-flex;
        justify-content: center;
        align-items: stretch;
        cursor: pointer;
        font-family: sans-serif;
        font-size: 18px;
        line-height: 1;
      }
      [data-breadcrumbs] [data-breadcrumb-divider] {
        content: '/';
        padding: 0 4px;
        color: var(--separator-primary);
        display: flex;
        align-items: center;
      }
    `}
    </style>
    <Element data-breadcrumbs {...props}>
    {
      React.Children.map(
        React.Children.toArray(props.children).filter(x => x),
        (child, i) => (
          <div data-breadcrumb-item>
            { i !== 0 && <span data-breadcrumb-divider>{divider}</span>}
            {child}
          </div>
        )
      )
    }
    </Element>
  </>
)
