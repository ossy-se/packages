import React from 'react'
import {
  Title,
  Text,
  Image,
  Stack,
  Card,
  Guide,
  Button,
  View
} from "@ossy/design-system"
import { Hero } from './Hero.jsx'
import { Footer } from './Footer.jsx'

export const LandingPage2020 = [

  {
    id: "about",
    surface: 'decorated',
    style: {
      padding: 'var(--space-xxl) var(--space-m)'
    },
    render: ({ about, socialProof }) => (
      <>
        <View alignItems="stretch" justifyContent="center" style={{ marginBottom: 'var(--space-xl)'}}>
          {
            about.columns.map(({ name, role, imgSrc, text }) => (
              <div key={name} style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <Image
                  key={name}
                  src={imgSrc}
                  style={{
                    borderRadius: '50%',
                    width: '100%',
                    maxWidth: '200px',
                    height: 'auto',
                    margin: '0 auto',
                    marginBottom: 'var(--space-l)'
                  }}
                />

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-s)',
                  alignItems: 'center',
                  marginBottom: 'var(--space-l)'
                }}>
                  <Title as="h1" variant="primary">{name}</Title>
                  <Title as="h2" variant="lead">{role}</Title>
                </div>

                <Text style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                  {text}
                </Text>
              </div>
            ))
          }
        </View>

        <Text variant="small" style={{ marginBottom: 'var(--space-l)', textAlign: 'center' }}>
          {socialProof.title}
        </Text>

        <View layout="row" justifyContent="space-between" gap="m">

          {
            socialProof.columns.map(({ title, logo }) => (
              <div key={title} style={{

                textAlign: 'center'
              }}>
                <Card>
                  <Image src={logo} style={{
                    height: '20px',
                    width: 'auto'
                  }} />
                </Card>
              </div>
            ))
          }

        </View>
      </>
    )
  },

  {
    id: "hero",
    surface: "primary",
    style: {
      padding: 'var(--space-xxl) var(--space-m) var(--space-xl)',
    },
    render: ({ hero }) => <Hero {...hero}/>
  },

  {
    id: "services",
    surface: "primary",
    maxWidth: "large",
    layout: "row",
    placeContent: "stretch space-around",
    gap: "xl",
    style: {
      borderBottom: '1px solid var(--separator-primary)',
      padding: 'var(--space-xxl) var(--space-m)'
    },
    render: ({ services }) => (
      <>
        {
          services.map(({ title, text }) => (
            <div key={title} style={{ textAlign: 'center' }}>
              <Title variant="tertiary" style={{ marginBottom: 'var(--space-m)' }}>
                {title}
              </Title>
              <Text style={{ maxWidth: '600px' }}>
                {text}
              </Text>
            </div>
          ))
        }
      </>
    )
  },

  {
    id: "projects",
    surface: "primary",
    style: {
      padding: 'var(--space-xxl) var(--space-m) var(--space-xl)',
      minHeight: '60vh'
    },
    render: ({ projects }) => (
      <>
        <Guide
          title={projects.title}
          titleVariant="display"
          text={projects.text}
          style={{ textAlign: 'left', maxWidth: '600px', marginBottom: 'var(--space-xl)' }}
        />
        {projects.categories.map(({ title, text, links }) => (
          <div style={{ marginBottom: 'var(--space-xl)'}}>
            <Title title={title} variant="tertiary" style={{ marginBottom: 'var(--space-l)'}}>
              {title}
            </Title>
            <Text>
              {text}
            </Text>
            <Stack>
              {
                links.map(buttons => (
                  <Stack horizontal style={{ marginBottom: 'var(--space-m)' }}>
                    {
                      buttons.map(button => <Button {...button} variant="link" target="_blank" style={{ marginRight: 'var(--space-m)'}}/>)
                    }
                  </Stack>
                ))
              }
            </Stack>
          </div>
        ))}
      </>
    )
  },

  {
    id: "contact",
    surface: 'accent',
    style: {
      padding: 'var(--space-xxl) var(--space-m)',
      borderBottom: '1px solid var(--separator-primary)'
    },
    render: ({ contact }) => <Footer columns={contact.columns} />
  }

]
