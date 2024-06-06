import { setTheme } from '@fluentui/web-components';
import { webLightTheme } from '@fluentui/tokens';
import '@fluentui/web-components/button.js';
import '@fluentui/web-components/menu.js';
import '@fluentui/web-components/menu-item.js';
import '@fluentui/web-components/menu-button.js';

setTheme(webLightTheme);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
  <fluent-button>Click me</fluent-button>
  <fluent-menu>
    <fluent-menu-button slot="trigger">Menu</fluent-menu-button>
    <fluent-menu-item>Item 1</fluent-menu-item>
    <fluent-menu-item>Item 2</fluent-menu-item>
  </fluent-menu>
`;
