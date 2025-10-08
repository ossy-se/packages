import React from 'react'
import { Icon2 } from '../icons/Icon2.jsx'
import { Button } from '../button'
import { Text } from '../text'
import { Title } from '../title'
import { Card } from '../card'
import { Tags } from '../tags'

export const ResumeExperience = ({
  title,
  subTitle,
  date,
  description,
  website,
  github,
  tags = [],
  ...props
}) =>
  <Card data-resume-experience {...props}>

    <style>
    {`
      [data-resume-experience] {
        display: grid;
        flex-direction: column;
        gap: var(--space-m);
        page-break-inside: avoid;
      }


      [data-resume-experience] header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

      },

      @media print {
        box-shadow: none;
        marginBottom: 8px !important
      }
    `}
    </style>


    <header>
      <div>
        <Title as="h3" variant="secondary">{title}</Title>
        <Title as="h4" variant="lead">{subTitle}</Title>
        <Text as="span">{date}</Text>
      </div>
    </header>

    {
      (!!description || !!props.children) && (
        <Text>
          {!!description ? description : props.children}
        </Text>
      )
    }

    {
      (!!website || !!github) && (
        <div>
          {
            !!website && (
              <Button variant="link" href={website} target="_blank">
                <Icon2 name="globe-alt"/>
                Visit website
              </Button>
            )
          }
          {
            !!github && (
              <Button variant="link" href={github} target="_blank">
                <Icon2 name="git-fork" style={{ with: '22px', height: '22px' }}/>
                GitHub
              </Button>
            )
          }
        </div>
      )
    }

    {
      !!tags && !!tags.length && <Tags tags={tags}/>
    }
  </Card>
