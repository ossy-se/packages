
import React from 'react'
import { Icon2 } from '../icons/Icon2.jsx'

export const Button = ({
  type,
  as = 'button',
  prefix,
  suffix,
  variant = 'default',
  href,
  params,
  label,
  children,
  onClick = () => {},
  ...props
}) => {
  const Element = !!href ? 'a' : as

  return (
    <>
      <style href={`@ossy/design-system/button`} precedence='high'>
      {`
        [data-button] {
          box-sizing: border-box;
          cursor: pointer;
          line-height: 1;
          outline: none;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `}
      </style>
      <style href={`@ossy/design-system/button/${variant}`} precedence='medium'>
      {`
        [data-button-variant="${variant}"] {
          text-decoration: var(--button-${variant}-text-decoration, var(--button-default-text-decoration, none));
          gap: var(--button-${variant}-gap, var(--button-default-gap, 8px));
          font-family: var(--button-${variant}-font-family, var(--button-default-font-family, sans-serif));
          border-radius: var(--button-${variant}-border-radius, var(--button-default-border-radius));
          font-size: var(--button-${variant}-font-size, var(--button-default-font-size, 16px));
          padding: var(--button-${variant}-padding, var(--button-default-padding, 8px 24px));
          font-weight: var(--button-${variant}-font-weight, var(--button-default-font-weight, bold));
          letter-spacing: var(--button-${variant}-letter-spacing, var(--button-default-letter-spacing));
          border-width: var(--button-${variant}-border-width, var(--button-default-border-width));
          border-style: var(--button-${variant}-border-style, var(--button-default-border-style));
          border-color: var(--button-${variant}-border-color, var(--button-default-border-color));
          color: var(--button-${variant}-color, var(--foreground, var(--button-default-color)));
          fill: var(--button-${variant}-color, var(--button-default-color));
          background: var(--button-${variant}-background, var(--button-default-background));
          box-shadow: var(--button-${variant}-box-shadow, var(--button-default-box-shadow, none));
          transition: var(--button-${variant}-transition, var(--button-default-transition, background-color .3s, color .3s, fill .3s, border-default-color .3s));
          text-transform: var(--button-${variant}-text-transform, vat(--button-default-text-transform));
        }

        [data-button-variant="${variant}"]:hover {
          text-decoration: var(--button-${variant}-text-decoration-hover, var(--button-default-text-decoration-hover, var(--button-default-text-decoration)));
          background: var(--button-${variant}-background-hover, var(--button-default-background-hover));
          color: var(--button-${variant}-color-hover, var(--button-default-color-hover));
          fill: var(--button-${variant}-color-hover, var(--button-default-color-hover));
          border-color: var(--button-${variant}-border-color-hover, var(--button-default-border-color-hover, var(--button-${variant}-border-color, var(--button-default-border-color))));
          box-shadow: var(--button-${variant}-box-shadow-hover, var(--button-${variant}-box-shadow, var(--button-default-box-shadow, none)));
        }

        [data-button-variant="${variant}"]:focus {
          borderColor: var(--button-${variant}-border-color-focus, var(--button-default-border-color-focus, hsl(199, 98%, 43%)));
        }

        [data-button-variant="${variant}"]:focus {
          borderColor: var(--button-${variant}-border-color-focus, var(--button-default-border-color-focus, hsl(199, 98%, 43%)));
        }

        [data-button-variant="${variant}"]:disabled {
          background: var(--button-${variant}-background-disabled, var(--button-default-background-disabled));
          color: var(--button-${variant}-color-disabled, var(--button-default-color-disabled));
          fill: var(--button-${variant}-color-disabled, var(--button-default-color-disabled));
          border: var(--button-${variant}-border-disabled, var(--button-default-border-disabled), var(--button-default-border));
          box-shadow: var(--button-${variant}-box-shadow, var(--button-default-box-shadow, none));
          cursor: not-allowed;
        }
      `}
      </style>
      <Element
        type={type || 'button'}
        href={href}
        data-params={params}
        onClick={onClick}
        data-button
        data-button-variant={variant}
        {...props}
      >
        {prefix && typeof prefix === 'string' ? <Icon2 name={prefix} size="s" /> : <Icon2 size="s" {...prefix} /> }
        {label || children}
        {suffix && typeof suffix === 'string' ? <Icon2 name={suffix} size="s" /> : <Icon2 size="s" {...suffix} /> }
      </Element>
    </>
  )
}
