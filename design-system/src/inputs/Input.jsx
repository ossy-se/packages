import React from 'react'
import { View } from '../view'
import { Text } from '../text'
import { Button } from '../button'

export const Input = props => (
  <>
    <style href="@ossy/design-system/input" precedence='high'>
    {`
      [data-component="input"] {
        padding: 8px 16px;
        border-width: 2px;
        border-style: solid;
        border-color: hsla(0, 0%, 75%, .1);
        border-radius: 5px;
        font-size: 16px;
        box-shadow: 0 3px 6px hsla(0, 0%, 75%, 1);
      }

      [data-component="input"][disabled] {
        cursor: not-allowed;
        color: hsl(0, 0%, 85%);
        background-color: hsl(0, 0%, 85%);
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
        font-family: sans-serif;
        line-height: 1;
        font-size: 16px;
        border: none;
        background-color: transparent;
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
        padding: 8px 16px;
        border-width: 1px;
        border-style: solid;
        border-color: hsl(0, 0%, 90%);
        border-radius: 99999px;
        font-size: 16px;
        line-height: 1;
      }

      [data-component="input2"]:focus {
        outline: none;
        boxShadow: 0 0 0 2px hsl(199, 98%, 43%);
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
        height: 120px;
        width: 100%;
        font-family: sans-serif;
        padding: 8px 16px;
        border-width: 1px;
        border-style: solid;
        border-color: hsl(0, 0%, 90%);
        border-radius: 16px;
        font-size: 16px;
        line-height: 1;
      }
      
      [data-component="textarea"]:focus {
        outline: none;
        box-shadow: 0 0 0 2px hsl(199, 98%, 43%);
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
        padding: 8px 16px;
        border-width: 1px;
        border-wtyle: solid;
        border-color: hsl(0, 0%, 90%);
        border-radius: 99999px;
        font-size: 16px;
        line-height: 1;
      }

      [data-component="input2"]:focus {
        outline: none;
        boxShadow: 0 0 0 2px hsl(199, 98%, 43%);
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
