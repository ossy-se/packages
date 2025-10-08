import React from 'react'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import atomOneLight from './styles/atom-one-light'
import { View, Button, Title, Text } from "@ossy/design-system"

const defaultComponents = {
  'h1': ({ node, ...props }) => <Title id={asId(props.children)} as="h1" variant="primary" {...props} style={{ marginBottom: 'var(--space-l)' }} />,
  'h2': ({ node, ...props }) => <Title id={asId(props.children)} as="h2" variant="secondary" {...props} style={{ marginBottom: 'var(--space-m)', marginTop: 'var(--space-l)' }} />,
  'h3': ({ node, ...props }) => <Title id={asId(props.children)} as="h3" variant="tertiary" {...props} style={{ marginBottom: 'var(--space-m)' }} />,
  'h4': ({ node, ...props }) => <Title id={asId(props.children)} as="h4" variant="tertiary" {...props} style={{ marginBottom: 'var(--space-m)' }} />,
  'h5': ({ node, ...props }) => <Title id={asId(props.children)} as="h5" variant="tertiary" {...props} style={{ marginBottom: 'var(--space-m)' }} />,
  'p': ({ node, ...props }) => <Text {...props} style={{ marginBottom: 'var(--space-m)' }} />,
  'ul': ({ node, ...props }) => <ul {...props} style={{ listStyle: 'inside', paddingLeft: 'var(--space-l)' }} />,
  'li': ({ node, ...props }) => <Text as="li" {...props} style={{ marginBottom: 'var(--space-m)' }}/>,
  'a': ({ node, ...props }) => <Button as={props.href ? 'a' : 'button'} {...props} variant="link" />,
  code: ({ node, className, ...props }) => {
    const [_, language] = /language-(\w+)/.exec(className || '') || []
    const inline = !language

    if (inline) {
      return (
        <View inset="xs" surface="secondary" roundness="s" style={{ display: 'inline-block' }} {...props} >
          <SyntaxHighlighter
            style={{
              display: 'inline',
              ...atomOneLight,
              "hljs": {
                display: 'inline',
                "color": "#383a42",
                "background": "transparent"
            }}}
            language={language}
            {...props}
          />
        </View>
      )
    }

    return (
      <View inset="m" surface="secondary" roundness="m" data-component="MarkdownViewer">
      <style href="@ossy/design-system-extras/markdown-viewer/MarkdownViewer" precedence="high">
      {`
        [data-component="MarkdownViewer"] {
          margin: var(--space-s) 0;
        }

        [data-component="MarkdownViewer"] pre {
          margin: 0;
        }
      `}
        </style>
        <SyntaxHighlighter
          style={{
            ...atomOneLight,
            "hljs": {
              "display": "block",
              "overflowX": "auto",
              "color": "#383a42",
              "background": "transparent"
          }}}
          language={language}
          {...props}
        />
      </View>
    )

  }
}

function asId(str) {
  if (!str) return ''
  return str.toLowerCase().replace(/\s+/g, '-');
}

export const MarkdownViewer = ({
  markdown,
  children,
  components = {},
  ...props
}) =>
  <ReactMarkdown
    children={markdown || children}
    components={{ ...defaultComponents, ...components }}
    {...props}
  />
