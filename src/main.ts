import { setThemeFor } from '@fluentui/web-components';
import { webLightTheme } from '@fluentui/tokens';
import { setTheme } from '@phoenixui/web-components';
import { phoenixLightThemeWin11 } from '@phoenixui/themes';
import '@fluentui/web-components/button.js';
import '@fluentui/web-components/divider.js';
import '@phoenixui/web-components/button.js';
import '@phoenixui/web-components/divider.js';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
  <div id="fluent" style="display: flex; flex-direction: row; align-items: center; gap: 24px;">
    <fluent-button>Click me</fluent-button>
    <fluent-divider orientation="vertical"></fluent-divider>
    <fluent-button appearance="primary">Click me</fluent-button>
  </div>
  <div id="phoenix" style="display: flex; flex-direction: row; align-items: center; gap: 24px;">
    <phx-button>Click me</phx-button>
    <phx-divider orientation="vertical"></phx-divider>
    <phx-button appearance="primary">Click me</phx-button>
  </div>
`;

setThemeFor(document.querySelector('#fluent')!, webLightTheme);
setTheme(phoenixLightThemeWin11);
