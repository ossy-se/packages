import React from 'react'

export const Text = ({
  as: Element = 'p',
  variant = 'default',
  maxWidth = 'full',
  text,
  children,
  ...props
}) => {
  return (
    <>
      <style href={`@ossy/design-system/max-width/${maxWidth}`} precedence='high'>
      {`
        [data-max-width="${maxWidth}"] {
          maxWidth: var(--max-width-${maxWidth})
        }
      `}
      </style>
      <style href="@ossy/design-system/text" precedence='high'>
      {`
        [data-text] {
          display: block;
          box-sizing: border-box;
          color: var(--color);
          font-family: var(--font-family);
          font-size: var(--font-size);
          font-weight: var(--font-weight);
          line-height: var(--line-height);
          letter-spacing: var(--letter-spacing);
          margin: 0;
          margin-bottom: var(--margin-bottom);
        }

        [data-text]:last-of-type {
          marginBottom: 0
        }
      `}
      </style>
      <style href={`@ossy/design-system/text/${variant}`} precedence='high'>
      {`
        [data-text-variant="${variant}"] {
          --max-width: var(--text-${variant}-max-width, var(--text-default-max-width, 100%));
          --color: var(--text-${variant}-color, var(--foreground, inherit));
          --font-family: var(--text-${variant}-font-family, var(--text-default-font-family, sans-serif));
          --font-size: var(--text-${variant}-font-size, var(--text-default-font-size, 2rem));
          --font-weight: var(--text-${variant}-font-weight, var(--text-default-font-weight, 400));
          --line-height: var(--text-${variant}-line-height, var(--text-default-line-height, 1.6));
          --margin-bottom: var(--text-${variant}-margin-bottom, var(--text-default-margin-bottom, 0));
          --letter-spacing: var(--text-${variant}-letter-spacing, var(--text-default-letter-spacing));
        }
      `}
      </style>
      <Element data-text data-text-variant={variant} children={children || text} {...props} />
    </>
  )
}
