import React from 'react'
import { View } from '../view'
import { Text } from '../text'
import { Button } from '../button'

export const Input = props => (
  <>
    <style href="@ossy/design-system/input" precedence='high'>
    {`
      [data-component="input"] {
        box-sizing: border-box;
        max-width: 100%;
        min-width: 0;
        padding: var(--space-s, 8px) var(--space-m, 16px);
        border-width: 1px;
        border-style: solid;
        border-color: var(--separator-primary);
        border-radius: var(--space-xs, 5px);
        font-size: var(--text-default-font-size, 16px);
        font-family: var(--text-default-font-family, sans-serif);
        font-weight: var(--text-default-font-weight, 400);
        line-height: var(--text-default-line-height, 1.5);
        color: var(--text-default-color, CanvasText);
        background-color: var(--surface-primary);
        box-shadow: none;
      }

      [data-component="input"]::placeholder {
        color: color-mix(in srgb, var(--text-default-color) 42%, transparent);
      }

      [data-component="input"]:focus {
        outline: none;
        border-color: var(--color-accent);
        box-shadow: 0 0 0 1px var(--color-accent);
      }

      [data-component="input"][disabled] {
        cursor: not-allowed;
        opacity: 0.55;
        color: color-mix(in srgb, var(--text-default-color) 65%, transparent);
        background-color: color-mix(in srgb, var(--surface-primary) 80%, transparent);
        border-color: var(--separator-primary);
      }
    `}
    </style>
    <input data-component="input" {...props}/>
  </>
)

export const InputTitle = props => (
  <>
    <style href="@ossy/design-system/input-title" precedence='high'>
    {`
      [data-component="input-title"] {
        box-sizing: border-box;
        max-width: 100%;
        min-width: 0;
        font-family: var(--text-default-font-family, sans-serif);
        line-height: var(--title-primary-line-height, 1.2);
        font-size: var(--title-primary-font-size, 1.5rem);
        font-weight: var(--title-primary-font-weight, 900);
        letter-spacing: var(--title-primary-letter-spacing, 0);
        color: var(--title-primary-color, var(--text-default-color));
        border: none;
        background-color: transparent;
      }

      [data-component="input-title"]::placeholder {
        color: color-mix(in srgb, var(--text-default-color) 45%, transparent);
      }

      [data-component="input-title"]:focus {
        outline: none;
      }
    `}
    </style>
    <input data-component="input-title" {...props}/>
  </>
)

export const Input2 = props => (
  <>
    <style href="@ossy/design-system/input2" precedence='high'>
    {`
      [data-component="input2"] {
        box-sizing: border-box;
        max-width: 100%;
        min-width: 0;
        padding: var(--space-s, 8px) var(--space-m, 16px);
        border-width: 1px;
        border-style: solid;
        border-color: var(--separator-primary);
        border-radius: var(--roundess-rounded, 99999px);
        font-size: var(--text-default-font-size, 16px);
        font-family: var(--text-default-font-family, sans-serif);
        font-weight: var(--text-default-font-weight, 400);
        line-height: 1;
        color: var(--text-default-color, CanvasText);
        background-color: var(--surface-primary);
      }

      [data-component="input2"]::placeholder {
        color: color-mix(in srgb, var(--text-default-color) 42%, transparent);
      }

      [data-component="input2"]:focus {
        outline: none;
        border-color: var(--color-accent);
        box-shadow: 0 0 0 1px var(--color-accent);
      }

      [data-component="input2"]:disabled {
        cursor: not-allowed;
        opacity: 0.55;
        color: color-mix(in srgb, var(--text-default-color) 65%, transparent);
        background-color: color-mix(in srgb, var(--surface-primary) 80%, transparent);
      }
    `}
    </style>
    <input data-component="input2" {...props}/>
  </>
)

export const Textarea = props => (
  <>
    <style href="@ossy/design-system/textarea" precedence='high'>
    {`
      [data-component="textarea"] {
        box-sizing: border-box;
        height: 120px;
        width: 100%;
        max-width: 100%;
        font-family: var(--text-default-font-family, sans-serif);
        padding: var(--space-s, 8px) var(--space-m, 16px);
        border-width: 1px;
        border-style: solid;
        border-color: var(--separator-primary);
        border-radius: var(--space-m, 16px);
        font-size: var(--text-default-font-size, 16px);
        font-weight: var(--text-default-font-weight, 400);
        line-height: var(--text-default-line-height, 1.5);
        color: var(--text-default-color, CanvasText);
        background-color: var(--surface-primary);
        resize: vertical;
      }

      [data-component="textarea"]::placeholder {
        color: color-mix(in srgb, var(--text-default-color) 42%, transparent);
      }
      
      [data-component="textarea"]:focus {
        outline: none;
        border-color: var(--color-accent);
        box-shadow: 0 0 0 1px var(--color-accent);
      }

      [data-component="textarea"]:disabled {
        cursor: not-allowed;
        opacity: 0.55;
        color: color-mix(in srgb, var(--text-default-color) 65%, transparent);
        background-color: color-mix(in srgb, var(--surface-primary) 80%, transparent);
      }
    `}
    </style>
    <textarea data-component="textarea" {...props}/>
  </>
)

export const Select = props => (
  <>
  <style href="@ossy/design-system/input2" precedence='high'>
    {`
      [data-component="input2"] {
        box-sizing: border-box;
        max-width: 100%;
        min-width: 0;
        padding: var(--space-s, 8px) var(--space-m, 16px);
        border-width: 1px;
        border-style: solid;
        border-color: var(--separator-primary);
        border-radius: var(--roundess-rounded, 99999px);
        font-size: var(--text-default-font-size, 16px);
        font-family: var(--text-default-font-family, sans-serif);
        font-weight: var(--text-default-font-weight, 400);
        line-height: 1;
        color: var(--text-default-color, CanvasText);
        background-color: var(--surface-primary);
      }

      [data-component="input2"]:focus {
        outline: none;
        border-color: var(--color-accent);
        box-shadow: 0 0 0 1px var(--color-accent);
      }

      [data-component="input2"]:disabled {
        cursor: not-allowed;
        opacity: 0.55;
        color: color-mix(in srgb, var(--text-default-color) 65%, transparent);
        background-color: color-mix(in srgb, var(--surface-primary) 80%, transparent);
      }
    `}
    </style>
    <select data-component="input2" {...props}/>
  </>
)

export const Upload = ({
  icon = 'math-plus',
  text = 'Upload',
  surface = 'primary',
  style = {},
  ...props
}) => {
  const id = 'ossy-upload-input'

  return (
    <>
      <View
        as="label"
        htmlFor={id}
        selectable
        surface={surface}
        inset="l"
        roundness="m"
        gap="s"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          ...style
        }}
      >
        <Button prefix="math-plus" variant="cta" style={{ padding: 'var(--space-m)' }} />
        <Text>{text}</Text>
      </View>
      <input id={id} type="file" style={{ display: 'none' }} {...props}/>
    </>
  )
}
