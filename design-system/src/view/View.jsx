import React from 'react'

export const View = ({
  surface = 'neutral',
  selectable,
  layout = 'column',
  alignItems,
  justifyContent,
  gap,
  roundness,
  inset,
  as: Container = 'div',
  style = {},
  ...props
}) => {

  return (
    <>
      <style href="@ossy/design-system/view" precedence="high">
      {`
        [data-view] {
          maxWidth: 100%;
        }
      `}
      </style>
      <style href="@ossy/design-system/patterns" precedence="high">
      {`
          [data-roundness="none"] { border-radius: var(--roundess-none, 0) }
          [data-roundness="xs"] { border-radius: var(--roundess-xs, var(--space-xs)) }
          [data-roundness="s"] { border-radius: var(--roundess-s, var(--space-s)) }
          [data-roundness="m"] { border-radius: var(--roundess-m, var(--space-m)) }
          [data-roundness="l"] { border-radius: var(--roundess-l, var(--space-l)) }
          [data-roundness="rounded"] { border-radius: var(--roundess-rounded, 99999px) }

          [data-inset="none"] { padding: var(--space-none) }
          [data-inset="xs"] { padding: var(--space-xs) }
          [data-inset="s"] { padding: var(--space-s) }
          [data-inset="m"] { padding: var(--space-m) }
          [data-inset="l m"] { padding: var(--space-l) var(--space-m) }
          [data-inset="stretch-m"] { padding: var(--space-s) var(--space-m) }
          [data-inset="l"] { padding: var(--space-l) }
          [data-inset="xl"] { padding: var(--space-xl) }
          [data-inset="xxl"] { padding: var(--space-xxl) }
      `}
      </style>

      <style href="@ossy/design-system/layout/column" precedence="high">
      {`
        [data-layout="column"] {
          display: flex;
          flex-direction: column;
        }
      `}
      </style>

      <style href="@ossy/design-system/layout/row" precedence="high">
      {`
        [data-layout="row"] {
          display: flex;
          flex-direction: row;
        }
      `}
      </style>

      <style href="@ossy/design-system/layout/row-wrap" precedence="high">
      {`
        [data-layout="row-wrap"] {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
      `}
      </style>

      <style href="@ossy/design-system/layout/off-center" precedence="high">
      {`
        [data-layout="off-center"] {
          display: grid;
          grid-template-rows: 1fr max-content 2fr;
          grid-template-columns: 1fr;
          grid-template-areas: "."
                               "content"
                               ".";
        }

        [data-layout="off-center"] [slot="content"] {
          grid-area: content;
        }
      `}
      </style>

      <style href="@ossy/design-system/layout/off-center-s" precedence="high">
      {`
        [data-layout="off-center-s"] {
          height: 100%;
          width: 100%;
          max-width: 100%;
          display: grid;
          grid-template-rows: auto 1fr minmax(400px, min-content) 2.2fr auto;
          grid-template-columns: auto 1fr minmax(min(350px, 100vw), min-content) 1fr auto;
          grid-template-areas: "header header header header header"
                               "sidebar-primary . . . sidebar-secondary"
                               "sidebar-primary . content . sidebar-secondary"
                               "sidebar-primary . . . sidebar-secondary"
                               "footer footer footer footer footer";
        }

        [data-layout="off-center-s"] [slot="header"] {
          grid-area: header;
        }

        [data-layout="off-center-s"] [slot="content"] {
          grid-area: content;
        }

        [data-layout="off-center-s"] [slot="sidebar-primary"] {
          grid-area: sidebar-primary;
        }

        [data-layout="off-center-s"] [slot="sidebar-secondary"] {
          grid-area: sidebar-secondary;
        }

        [data-layout="off-center-s"] [slot="footer"] {
          grid-area: footer;
        }
      `}
      </style>

      <style href="@ossy/design-system/layout/off-center-m" precedence="high">
      {`
        [data-layout="off-center-m"] {
          height: 100%;
          width: 100%;
          max-width: 100%;
          display: grid;
          grid-template-rows: auto 1fr minmax(650px, min-content) 2.2fr auto;
          grid-template-columns: auto 1fr minmax(min(1100px, 100%), min-content) 1fr auto;
          grid-template-areas: "header header header header header"
                               "sidebar-primary . . . sidebar-secondary"
                               "sidebar-primary . content . sidebar-secondary"
                               "sidebar-primary . . . sidebar-secondary"
                               "footer footer footer footer footer";
        }

        [data-layout="off-center-m"] [slot="header"] {
          grid-area: header;
        }

        [data-layout="off-center-m"] [slot="content"] {
          grid-area: content;
        }

        [data-layout="off-center-m"] [slot="sidebar-primary"] {
          grid-area: sidebar-primary;
        }

        [data-layout="off-center-m"] [slot="sidebar-secondary"] {
          grid-area: sidebar-secondary;
        }

        [data-layout="off-center-m"] [slot="footer"] {
          grid-area: footer;
        }
      `}
      </style>

      <style href="@ossy/design-system/layout/vertical-top" precedence="high">
      {`
        [data-layout="vertical-top"] {
          display: grid;
          grid-template-rows: .05fr max-content 1fr;
          grid-template-columns: 1fr;
          grid-template-areas: "."
                               "content"
                               ".";
        }

        [data-layout="vertical-top"] [slot="content"] {
          grid-area: content;
        }
      `}
      </style>

      <style href="@ossy/design-system/layout/vertical-top-m" precedence="high">
      {`
        [data-layout="vertical-top-m"] {
          height: 100%;
          width: 100%;
          max-width: 100%;
          display: grid;
          grid-template-rows: auto 1fr minmax(650px, min-content) 3r auto;
          grid-template-columns: auto 1fr minmax(1100px, min-content) 1fr auto;
          grid-template-areas: "header header header header header"
                               "sidebar-primary . . . sidebar-secondary"
                               "sidebar-primary . content . sidebar-secondary"
                               "sidebar-primary . . . sidebar-secondary"
                               "footer footer footer footer footer";
        }

        [data-layout="vertical-top-m"] [slot="header"] {
          grid-area: header;
        }

        [data-layout="vertical-top-m"] [slot="content"] {
          grid-area: content;
        }

        [data-layout="vertical-top-m"] [slot="sidebar-primary"] {
          grid-area: sidebar-primary;
        }

        [data-layout="vertical-top-m"] [slot="sidebar-secondary"] {
          grid-area: sidebar-secondary;
        }

        [data-layout="vertical-top-m"] [slot="footer"] {
          grid-area: footer;
        }
      `}
      </style>

      <style href="@ossy/design-system/layout/split-even" precedence="high">
      {`
        [data-layout="split-even"] {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-template-rows: auto;
          grid-auto-flow: column;
        }
      `}
      </style>

      <style href="@ossy/design-system/layout/page" precedence="high">
      {`
        [data-layout="page"] {
          height: 100%;
          width: 100%;
          max-width: 100%;
          display: grid;
          grid-template-rows: auto 1fr auto;
          grid-template-columns: auto 1fr auto;
          grid-template-areas: "header header header"
                               "sidebar-primary content sidebar-secondary"
                               "footer footer footer";
        }

        [data-layout="page"] [slot="header"] {
          grid-area: header;
        }

        [data-layout="page"] [slot="content"] {
          grid-area: content;
        }

        [data-layout="page"] [slot="sidebar-primary"] {
          grid-area: sidebar-primary;
        }

        [data-layout="page"] [slot="sidebar-secondary"] {
          grid-area: sidebar-secondary;
        }

        [data-layout="page"] [slot="footer"] {
          grid-area: footer;
        }
      `}
      </style>

      <style href="@ossy/design-system/layout/sidebar" precedence="high">
      {`
        [data-layout="sidebar"] {
          height: 100%;
          width: 100%;
          max-width: 100%;
          display: grid;
          grid-template-rows: auto 1fr auto;
          grid-template-columns: auto 1fr auto;
          grid-template-areas: "sidebar-primary header header"
                               "sidebar-primary content sidebar-secondary"
                               "sidebar-primary footer footer";
        }

        [data-layout="sidebar"] [slot="header"] {
          grid-area: header;
        }

        [data-layout="sidebar"] [slot="content"] {
          grid-area: content;
        }

        [data-layout="sidebar"] [slot="sidebar-primary"] {
          grid-area: sidebar-primary;
        }

        [data-layout="sidebar"] [slot="sidebar-secondary"] {
          grid-area: sidebar-secondary;
        }

        [data-layout="sidebar"] [slot="footer"] {
          grid-area: footer;
        }
      `}
      </style>

      <Container
        data-view
        data-surface={surface}
        data-selectable={selectable}
        data-roundness={roundness}
        data-layout={layout}
        data-inset={inset}
        style={{
          gap: gap ? `var(--space-${gap})` : undefined,
          alignItems,
          justifyContent,
          minWidth: '0',
          minHeight: '0',
          ...style
        }}
        {...props}
        
      />
    </>
  )
}