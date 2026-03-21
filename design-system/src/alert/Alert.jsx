import React from 'react'

const VARIANTS = new Set(['neutral', 'info', 'success', 'warning', 'danger'])

/**
 * Theme-aware callout: tinted surface from `--surface-base` + semantic `--alert-tone`,
 * accent start border, no hard-coded light-mode grays.
 */
export const Alert = ({
  variant = 'neutral',
  title,
  icon,
  children,
  as: Element = 'div',
  role: roleProp,
  ...props
}) => {
  const v = VARIANTS.has(variant) ? variant : 'neutral'
  const role =
    roleProp ?? (v === 'danger' ? 'alert' : 'status')
  const live = v === 'danger' ? 'assertive' : 'polite'

  return (
    <>
      <style href="@ossy/design-system/alert" precedence="high">
        {`
          [data-alert] {
            --alert-tone: var(--separator-primary);
            box-sizing: border-box;
            display: flex;
            gap: 12px;
            align-items: flex-start;
            margin: 0;
            padding: 14px 16px 14px 14px;
            border-radius: 14px;
            border: 1px solid
              color-mix(in srgb, var(--alert-tone) 28%, var(--separator-primary));
            border-left-width: 4px;
            border-left-color: var(--alert-tone);
            background: color-mix(in srgb, var(--alert-tone) 10%, var(--surface-base));
            color: var(--text-default-color, inherit);
            font-family: var(--text-default-font-family, inherit);
            font-size: var(--text-default-font-size, 0.9375rem);
            font-weight: var(--text-default-font-weight, 500);
            line-height: var(--text-default-line-height, 1.55);
            box-shadow: none;
          }

          [data-alert-variant="neutral"] {
            --alert-tone: var(--separator-primary);
            background: color-mix(
              in srgb,
              var(--surface-primary) 35%,
              var(--surface-base)
            );
          }

          [data-alert-variant="info"] {
            --alert-tone: var(--color-info);
          }

          [data-alert-variant="success"] {
            --alert-tone: var(--color-accent);
          }

          [data-alert-variant="warning"] {
            --alert-tone: hsl(38, 92%, 44%);
          }

          [data-alert-variant="danger"] {
            --alert-tone: var(--color-danger);
          }

          [data-alert-icon] {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.375rem;
            height: 1.375rem;
            margin-top: 0.1em;
            color: var(--alert-tone);
          }

          [data-alert-icon] svg {
            width: 100%;
            height: 100%;
            display: block;
            fill: currentColor;
          }

          [data-alert-body] {
            flex: 1;
            min-width: 0;
          }

          [data-alert-title] {
            display: block;
            font-weight: 700;
            font-size: 0.8125rem;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin: 0 0 6px;
            color: inherit;
            opacity: 0.92;
          }
        `}
      </style>
      <Element
        data-alert
        data-alert-variant={v}
        role={role}
        aria-live={live}
        {...props}
      >
        {icon != null ? (
          <span data-alert-icon aria-hidden="true">
            {icon}
          </span>
        ) : null}
        <span data-alert-body>
          {title != null && title !== '' ? (
            <span data-alert-title>{title}</span>
          ) : null}
          {children}
        </span>
      </Element>
    </>
  )
}
