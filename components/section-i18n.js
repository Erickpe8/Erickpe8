import { onLocaleChange, whenI18nReady } from "./i18n.js";

export function bindLocale(element, render) {
  const run = () => {
    render.call(element);
    if (document.documentElement.classList.contains("play-entrance-animations")) {
      element.querySelectorAll(".fade-in").forEach((el) => el.classList.add("visible"));
    }
  };
  element._localeUnsub = onLocaleChange(run);
  whenI18nReady().then(run);
}

export function unbindLocale(element) {
  element._localeUnsub?.();
  element._localeUnsub = null;
}
