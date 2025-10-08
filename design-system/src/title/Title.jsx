import React from 'react'

export const Title = ({
  as: Element = 'h1',
  variant='default',
  ...props
}) => {

  return (
    <>
      <style href={`@ossy/design-system/title/${variant}`} precedence='high'>
      {`
        [data-title-variant="${variant}"] {
          --max-width: var(--title-${variant}-max-width, var(--title-default-max-width, 100%));
          --color: var(--title-${variant}-color, var(--foreground, inherit));
          --font-family: var(--title-${variant}-font-family, var(--title-default-font-family, sans-serif));
          --font-size: var(--title-${variant}-font-size, var(--title-default-font-size, 2rem));
          --font-weight: var(--title-${variant}-font-weight, var(--title-default-font-weight, 700));
          --line-height: var(--title-${variant}-line-height, var(--title-default-line-height, 1));
          --text-shadow: var(--title-${variant}-text-shadow, var(--title-default-text-shadow, none));
          --letter-spacing: var(--title-${variant}-letter-spacing, var(--title-default-letter-spacing, normal));
        }
      `}
      </style>
      <style href="@ossy/design-system/title" precedence='high'>
      {`
        [data-title] {
          display: block;
          box-sizing: border-box;
          margin: 0,

          color: var(--foreground);
          line-height: var(--line-height);
          font-family: var(--font-family);
          font-size: var(--font-size);
          font-weight: var(--font-weight);
          text-shadow: var(--text-shadow);
          letter-spacing: var(--letter-spacing);
        }
      `}
      </style>
      <Element {...props} data-title data-title-variant={variant}/>
    </>
  )
}
