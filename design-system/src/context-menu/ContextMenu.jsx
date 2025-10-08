import React from 'react'
import { Button } from '../button'
import { View } from '../view'

const ContextMenuItem = ({...props}) => {
  return (
    <Button variant="command" style={{ justifyContent: 'flex-start', gap: 'var(--space-s)', padding: 'var(--space-xs) var(--space-s)' }} {...props}/>
  )
}

const ContextMenuSeparator = ({ className = '', ...props}) =>
  <li className={`context-menu__separator ${className}`} {...props}>
  </li>

export const ContextMenu = ({
  surface = 'primary',
  children,
  ...props
}) => (
  <View data-context-menu style={{ display: 'inline-flex', minWidth: '150px' }} gap="xs" surface={surface} {...props}>
    <style href="@ossy/design-system/context-menu" precedence="high">
    {`
      [data-context-menu] {
        border-radius: var(--space-s);
        box-shadow: 1px 1px 10px hsla(0, 0%, 30%, .2);
        border: 1px solid hsl(0, 0%, 90%);
        padding: var(--space-s) var(--space-xs);
        list-style: none;
        min-width: 150px;
      }
    
      [data-context-menu] .context-menu__separator {
        height: 1px;
        background-color: hsl(0, 0%, 95%);
      }
    `}
    </style>
    {children}
  </View>
)

ContextMenu.Item = ContextMenuItem
ContextMenu.Separator = ContextMenuSeparator
