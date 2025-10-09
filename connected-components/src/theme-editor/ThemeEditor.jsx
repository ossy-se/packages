import { useState, useMemo, useCallback, useEffect } from 'react'
import { useResource } from '@ossy/sdk-react'
import { Overlay, Button, useTheme, View, Text } from '@ossy/design-system'

const overlayStyles = {
  background: 'transparent',
  display: 'content',
  pointerEvents: 'none'
}

const blobStyles = {
  boxShadow: '2px 2px 5px hsla(0, 0%, 0%, .2)',
  borderRadius: '999px',
  position: 'absolute',
  right: 'var(--space-m)',
  bottom: 'var(--space-m)',
  cursor: 'pointer',
  transition: 'transform .5s',
  pointerEvents: 'auto',
  padding: 'var(--space-m)'
}

const editorContainerStyles = {
  position: 'absolute',
  right: '0',
  top: '0',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'stretch',
  padding: '8px 32px'
}

const editorStyles = {
  width: '100%',
  maxWidth: '350px',
  height: '100%',
  boxShadow: '2px 2px 5px hsla(0, 0%, 0%, .2)',
  padding: '16px 16px 76px 16px',
  overflowX: 'none',
  overflowY: 'auto',
  pointerEvents: 'auto'
}

const ThemeSwitcher = () => {
  const { activeTheme, setTheme, themes } = useTheme()
  return (
    <View gap="s">
      <Text>Theme</Text>
      <View layout="row-wrap" gap="s">
        {
          themes.map(themeName => <Button variant={themeName === activeTheme ? 'tag-active' : 'tag'} onClick={() => setTheme(themeName)}>{themeName}</Button>)
        }
      </View>
    </View>
  )
}

export const ThemeEditor = () => {
  const { updateResourceContent } = useResource('PCX53TaGviq4_8KvK-VOp')
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [viewCount, setViewCount] = useState(0)
  // const [theme, temporarilyUpdateTheme] = useTheme()
  const theme = {}
  const temporarilyUpdateTheme = () => {}

  const toggleStyles = useMemo(() => !isEditorOpen
    ? blobStyles
    : { ...blobStyles, transform: 'rotate(-45deg)' }, [isEditorOpen])

  const onToggle = useCallback(() => {
    setIsEditorOpen(!isEditorOpen)
  }, [isEditorOpen, setIsEditorOpen])

  const onThemeChange = (event) => {

    const name = event.target.dataset.name
    const updatedValue = event.target.value

    if (!name) return
    if (!updatedValue) return

    temporarilyUpdateTheme(theme => ({
      ...theme,
      [name]: updatedValue
    }))

  }

  const onSaveTheme = event => {
    event.preventDefault()
    updateResourceContent(theme)
  }

  useEffect(() => {
    if (!isEditorOpen) return
    const views = document.querySelectorAll('[data-view]')
    views.forEach(view => view.style.border = '1px solid red')
    setViewCount(views.length)
  }, [isEditorOpen])

  return (
    <Overlay isVisible={true} style={overlayStyles}>

      {
        isEditorOpen && (
          <div style={editorContainerStyles}>
            <View surface="primary" roundness="m" gap="m" style={editorStyles}>
              <View as="form" gap="s" onSubmit={onSaveTheme} onChange={onThemeChange}>
                {Object.entries(theme).map(([name, value]) => (
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontFamily: 'sans-serif', marginBottom: '4px', fontWeight: 'bold' }}>{name}</label>
                    <input value={value} data-name={name} style={{ width: '100%', padding: '4px' }}/>
                  </div>
                ))}
                <Button type="submit" variant="cta">
                  Save
                </Button>
              </View>
              <ThemeSwitcher/>
              <Text>Views: {viewCount}</Text>
            </View>
          </div>
        )
      }

      <Button variant="cta" prefix="math-plus" style={toggleStyles} onClick={onToggle} />

    </Overlay>
  )
}
