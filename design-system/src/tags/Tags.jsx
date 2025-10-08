import React from 'react'
import { Button } from '../button'
import { View } from '../view'

export const Tag = ({
  onSelect = () => {},
  active,
  ...props
}) => (
  <li>
    <Button
      variant={active ? 'tag-active' : 'tag'}
      onClick={() => onSelect(props.children)}
      {...props}
    />
  </li>
)

const alphabeticalAscending = (a, b) => {
  return a.localeCompare(b)
}

export const Tags = ({
  tags = [],
  activeTags = [],
  size = 'm',
  gap = 's',
  onSelect,
  ...props
}) => {
  const sortedTags = [...tags].sort(alphabeticalAscending)

  return (
    <>

    <style href="@ossy/design-system/tags" precedence="low">
    {`
      [data-tags] {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        user-select: none;
        padding: 0;
        margin: 0;
      }

      [data-tags] [data-size="m"] {
        padding: var(--space-s) var(--space-m)
      }

      [data-tags] [data-size="s"] {
        padding: var(--space-xs) var(--space-m)
      }
    `}
    </style>

    <meta name="keywords" content={tags.join(',')} />

    <View as="ul" layout="row-wrap" data-tags  gap={gap} {...props}>      
      {sortedTags.map(tag => (
        <Tag
          key={tag}
          active={activeTags.includes(tag)}
          data-size={size}
          onSelect={onSelect}
        >{tag}
        </Tag>
      ))}
    </View>
    </>
  )
}
