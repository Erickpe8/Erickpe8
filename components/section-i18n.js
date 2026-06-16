import { onLocaleChange } from "./i18n.js";

export function bindLocale(element, render) {
  const run = () => render.call(element);
  element._localeUnsub = onLocaleChange(run);
  run();
}

export function unbindLocale(element) {
  element._localeUnsub?.();
  element._localeUnsub = null;
}
