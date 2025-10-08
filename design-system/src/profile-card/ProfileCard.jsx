import React from 'react'
import { Icon2 } from '../icons/Icon2.jsx'
import { Button } from '../button'
import { Text } from '../text'
import { Title } from '../title'
import { Card } from '../card'
import { Tags } from '../tags'

export const ProfileCard = ({
  name = '',
  role = '',
  image = '',
  links = [],
  summary = '',
  tags = [],
  activeTags = [],
  translations = {},
  onTagClick = () => {},
  ...props
}) => (
  <Card data-scroll data-profile-card {...props}>

    <style href="@ossy/design-system/profile-card" precedence="high">
    {`
      [data-profile-card] {
        min-height: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-l);
        scrollbar-width: none;
        overflow-y: auto;
      }


      [data-profile-card]::-webkit-scrollbar {
        display: none;
      }

      [data-profile-card] .titles {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-s);
        text-align: center'
      }

      [data-profile-card] .tags {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-m);
        max-width: 600px;
      }

      [data-profile-card] img {
        border-radius: 50%;
        width: 50%;
        max-width: 200px;
        height: auto;
        margin: 0 auto;
      }
    `}
    </style>

    <img src={image} alt={name} />

    <div className="titles">
      <Title as="h1" variant="primary">{name}</Title>
      <Title as="h2" variant="lead">{role}</Title>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-m)'}}>
      {
        links.map(x => (
          <Button
            style={{ justifyContent: 'flex-start' }}
            {...x}
            variant={x.variant || 'link'}
            key={x.label}
          >
            {x.icon && <Icon2 name={x.icon}/>}
            {x.label}
          </Button>
        ))
      }
    </div>

    <div>
      {
        summary
          .split('\n\n')
          .map(paragraph => (
            <Text key={paragraph} style={{ maxWidth: '600px', textAlign: 'left' }}>
              {paragraph}
            </Text>
          ))
      }
    </div>

    {
      !!tags.length && (
        <div className="tags">
          <Title as="h3" variant="secondary">{translations.tags}</Title>
          <Tags
            tags={tags.sort((a, b) => a.localeCompare(b))}
            activeTags={activeTags}
            onSelect={onTagClick}
            style={{ textAlign: 'center' }}
          />
        </div>
      )
    }

  </Card>
)
