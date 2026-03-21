import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';
import { GLOBALS_UPDATED, SET_GLOBALS } from 'storybook/internal/core-events';

function applyManagerTheme(globals) {
  if (!globals) return;
  const mode = globals.theme === 'dark' ? 'dark' : 'light';
  addons.setConfig({
    theme: mode === 'dark' ? themes.dark : themes.light,
  });
}

/**
 * Keep the whole Storybook shell (sidebar, toolbar, docs chrome) in sync with the
 * @storybook/addon-themes global `theme` (light / dark) for every story and MDX page.
 *
 * SET_GLOBALS fires when the preview first sends globals (including docs-only routes);
 * GLOBALS_UPDATED fires when the user toggles the theme.
 */
addons.register('ossy-sync-manager-theme', () => {
  addons.setConfig({ theme: themes.light });

  const channel = addons.getChannel();
  channel.on(SET_GLOBALS, ({ globals }) => applyManagerTheme(globals));
  channel.on(GLOBALS_UPDATED, ({ globals }) => applyManagerTheme(globals));
});
