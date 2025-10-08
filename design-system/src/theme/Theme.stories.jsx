import React from 'react'
import { Theme, useTheme } from './Theme'

export default {
  title: 'Base/Theme',
  component: Theme,
}

const Story = (args) => (
  <div id={args.elementSelector.replace('#', '')}>
    <Theme {...args}>
      <div style={{
        width: '50px',
        height: '50px',
        background: 'var(--surface-primary)',
      }}/>
    </Theme>
  </div>
)

const ThemeSwitcher = () => {
  const { activeTheme, setTheme, themes } = useTheme()
  return (
    <div>
      <div>Active theme: {activeTheme}</div>
      {
        themes.map(themeName => <button onClick={() => setTheme(themeName)}>{themeName}</button>)
      }
    </div>
  )
}

const MultiThemeStory = (args) => (
  <div id={args.elementSelector.replace('#', '')}>
    <Theme {...args}>
      <div style={{
        width: '50px',
        height: '50px',
        background: 'var(--surface-primary)',
      }}/>
      <ThemeSwitcher/>
    </Theme>
  </div>
)

export const SingleTheme = Story.bind({})
SingleTheme.args = {
  elementSelector: "#single-theme-root",
  theme: {
    "surface-primary": 'tomato'
  }
}

export const MultipleThemes = MultiThemeStory.bind({})
MultipleThemes.args = {
  elementSelector: "#multi-theme-root",
  theme: 'light',
  themes: {
    light: {
      "surface-primary": 'lightblue'
    },
    dark: {
      "surface-primary": 'hsl(0, 0%, 20%)'
    },
    tomato: {
      "surface-primary": 'tomato'
    }
  }
}
