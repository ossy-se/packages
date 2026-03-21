import React from 'react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { initialGlobals as themesAddonInitialGlobals } from '@storybook/addon-themes/preview';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { themes } from 'storybook/theming';
import { Theme } from '@ossy/design-system';
import { CloudLight, CloudDark } from '@ossy/themes';

/**
 * Fills the preview iframe with the active Cloud theme surface so components
 * are not shown on Storybook’s default white canvas (especially in dark mode).
 * Listed first so it sits inside the Theme provider (innermost decorator).
 */
const withCloudThemeCanvas = (Story) => (
  <div
    className="ossy-sb-theme-canvas"
    style={{
      boxSizing: 'border-box',
      minHeight: '100vh',
      width: '100%',
      margin: 0,
      padding: '16px',
      background: 'var(--surface-base)',
      color: 'var(--text-default-color, CanvasText)',
    }}
  >
    <Story />
  </div>
);

function docsThemeMode(context) {
  // Docs receive Storybook’s DocsContext (store + channel), not story render context.
  // `context.globals` is undefined here; live globals live on the preview store.
  const globals =
    context?.store?.userGlobals?.get?.() ?? context?.globals ?? {};
  return globals.theme === 'dark' ? 'dark' : 'light';
}

/**
 * MDX / autodocs: Storybook docs theme + Cloud CSS variables + base gradient fill.
 * Preview hooks (e.g. useGlobals) are not valid here — read globals from DocsContext.store.
 */
function OssyDocsContainer(props) {
  const { context, children, theme: _themeFromParams } = props;
  const mode = docsThemeMode(context);
  const docsTheme = mode === 'dark' ? themes.dark : themes.light;
  const cloud = mode === 'dark' ? CloudDark : CloudLight;

  return (
    <Theme theme={cloud}>
      {/*
        Storybook’s docs shell uses a ~1000px-wide .sbdocs-content, which clips
        --surface-base gradients. Paint the gradient on the full-width wrapper and
        keep the inner column transparent with a readable measure.
      */}
      <style>
        {`
          .sbdocs.sbdocs-wrapper {
            background: var(--surface-base) !important;
          }
          .sbdocs.sbdocs-content {
            max-width: none !important;
            flex: 1 1 auto;
            min-width: 0;
            width: 100%;
          }
          .ossy-sb-docs-surface {
            box-sizing: border-box;
            width: 100%;
            max-width: min(62.5rem, 100%);
            margin-inline: auto;
            min-height: 100%;
            background: transparent;
          }
        `}
      </style>
      <DocsContainer context={context} theme={docsTheme}>
        <div
          className="ossy-sb-docs-surface"
          style={{
            color: 'var(--text-default-color, CanvasText)',
          }}
        >
          {children}
        </div>
      </DocsContainer>
    </Theme>
  );
}

/** @type { import('@storybook/react').Preview } */
const preview = {
  initialGlobals: {
    ...themesAddonInitialGlobals,
    theme: 'light',
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [['Overview'], ['App', ['Getting Started']], ['Pages', ['Introduction']], 'Types', ['Design System', ['Layout', 'Feedback', 'Navigation', 'Actions', 'Display', 'Other', 'Inputs', 'Base']], '*'],
      },
    },
    docs: {
      container: OssyDocsContainer,
    },
  },
  decorators: [
    withCloudThemeCanvas,
    withThemeFromJSXProvider({
      themes: {
        light: CloudLight,
        dark: CloudDark,
      },
      defaultTheme: 'light',
      Provider: Theme,
    }),
  ],
  tags: ['autodocs'],
};

export default preview;
