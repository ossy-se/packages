import React from 'react'
import {
  PageSection,
  Title,
  Text,
  Button,
  View
} from "@ossy/design-system"

const ThemeSection = ({
  title,
  titleVariant = 'secondary',
  titleAs = 'h2',
  text,
  children,
  maxWidth = 'l',
  ...props
}) => (
  <PageSection
    maxWidth={maxWidth}
    {...props}
    style={{ padding: 'var(--space-xl) var(--space-m)', borderBottom: '1px solid var(--separator-primary)'}}
  >
    <Title as={titleAs} variant={titleVariant} style={{ marginBottom: 'var(--space-m)' }}>
      {title}
    </Title>
    <Text style={{ maxWidth: '600px', marginBottom: 'var(--space-xl)' }}>
      {text}
    </Text>

    {children}
  </PageSection>
)

export const ThemeDisplay = ({
  theme = {}
}) => {

  return (
    <>

      <ThemeSection
        title="Theme overview"
        titleVariant="primary"
        titleAs="h1"
        text={`
          Here you can find an overview of our patterns, colors, and components.
          Keep in mind that this is only an overview, for usage examples and documentation go to
          our Storybook page.
        `}
      />

      <ThemeSection
        title="Colors"
        text={`
          Here you can find an overview of our patterns, colors, and components.
          Keep in mind that this is only an overview, for usage examples and documentation go to
          our Storybook page.
        `}
      >

        <View layout="row-wrap" gap="xl">
          {
            Object.entries(theme.color).map(([name]) => (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                gap: 'var(--space-l)',
              }}>
                <div variant={name} style={{
                  width: '200px',
                  height: 'var(--space-xl)',
                  backgroundColor: `var(--color-${name})`,
                  boxShadow: '2px 2px 10px 0 hsla(0, 0%, 90%, .8)',
                  borderRadius: 'var(--space-xs)'
                }}>
                </div>
                <Text>
                  {name}
                </Text>
              </div>
            ))
          }
        </View>

      </ThemeSection>

      <ThemeSection
        title="Spacing"
        text={`
          Here you can find an overview of our patterns, colors, and components.
          Keep in mind that this is only an overview, for usage examples and documentation go to
          our Storybook page.
        `}
      >

        <View layout="row" gap="xl">
          {
            Object.entries(theme.space).map(([name, space]) => (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
                <div style={{
                  background: `var(--button-cta-background)`,
                  width: '20px',
                  height: space,
                  borderRadius: 'var(--space-xxs)',
                  marginBottom: 'var(--space-m)'
                }}/>
                <Text>{name} - {space}</Text>
              </div>
            ))
          }
        </View>

      </ThemeSection>

      <ThemeSection
        title="Content sizes (max width)"
        text={`
          Here you can find an overview of our patterns, colors, and components.
          Keep in mind that this is only an overview, for usage examples and documentation go to
          our Storybook page.
        `}
      >

        <View gap="s">
          {
            Object.entries(theme['max-width']).map(([name, maxWidth]) => (
              <View layout="row" gap="l">
                <Text style={{ flexBasis: '90px'}}>{name} - {maxWidth}</Text>
                <div style={{
                  background: `var(--color-accent)`,
                  width: '100%',
                  maxWidth: `calc(var(--max-width-${name}) / 2)`,
                  height: '20px',
                  borderRadius: 'var(--space-xxs)'
                }}/>
              </View>

            ))
          }
        </View>

      </ThemeSection>

      <ThemeSection
        title="Surfaces"
        text={`
          Here you can find an overview of our patterns, colors, and components.
          Keep in mind that this is only an overview, for usage examples and documentation go to
          our Storybook page.
        `}
      >

        <View layout="row-wrap" gap="xl">
          {
            Object.entries(theme.surface).map(([name, surface]) => (
              <div style={{
                background: `var(--surface-${name})`,
                width: '300px',
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 'var(--space-s)',
                border: '1px solid var(--separator-primary)',
                // boxShadow: '2px 2px 10px 0 hsla(0, 0%, 90%, .8)'
              }}>
                <Text>{name}</Text>
              </div>
            ))
          }
        </View>
      </ThemeSection>

      <ThemeSection
        title="Separators"
        text={`
          Here you can find an overview of our patterns, colors, and components.
          Keep in mind that this is only an overview, for usage examples and documentation go to
          our Storybook page.
        `}
      >

        <View layout="row" gap="xl">
          {
            Object.entries(theme.separator).map(([name]) => (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                gap: 'var(--space-l)',
                marginBottom: 'var(--space-xl)'
              }}>
                <div variant={name} style={{ width: '300px', height: '1px', backgroundColor: `var(--separator-${name})` }}>
                </div>
                <Text>
                  {name}
                </Text>
              </div>
            ))
          }
        </View>

      </ThemeSection>

      <ThemeSection
        title="Typography"
        text={`
          Here you can find an overview of our patterns, colors, and components.
          Keep in mind that this is only an overview, for usage examples and documentation go to
          our Storybook page.
        `}
      >

        <Title variant="tertiary" style={{ marginBottom: 'var(--space-m)'}}>
          Titles
        </Title>

        <View
          layout="row-wrap"
          gap="xl"
          placeItems="center"
          style={{ marginBottom: 'var(--space-xl)' }}
        >
          {
            Object.entries(theme.title)
            .filter(([name]) => name !== 'default')
            .map(([name]) => (
              <div style={{
                padding: 'var(--space-l)',
                borderRadius: 'var(--space-s)',
                border: '1px solid var(--separator-primary)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Title variant={name}>
                  {name}
                </Title>
              </div>
            ))
          }
        </View>

        <Title variant="tertiary" style={{ marginBottom: 'var(--space-m)'}}>
          Text
        </Title>

        <View layout="row" gap="xl" placeItems="center">
          {
            Object.entries(theme.text)
            .map(([name]) => (
              <div style={{
                padding: 'var(--space-l)',
                borderRadius: 'var(--space-s)',
                border: '1px solid var(--separator-primary)'
              }}>
                <Text variant={name}>
                  {name}
                </Text>
              </div>
            ))
          }
        </View>

      </ThemeSection>

      <ThemeSection
        title="Buttons"
        text={`
          Here you can find an overview of our patterns, colors, and components.
          Keep in mind that this is only an overview, for usage examples and documentation go to
          our Storybook page.
        `}
      >

        <View layout="row-wrap" gap="xl" alignItems="center" justifyContent="flex-start">
          {
            Object.entries(theme.button).map(([name]) => (
              <Button variant={name} style={{ flexGrow: '0', flexShrink: '0' }}>
                {name}
              </Button>
            ))
          }
        </View>

      </ThemeSection>

    </>
  )
}
