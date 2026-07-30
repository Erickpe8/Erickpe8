export const LOCALE_CATALOG = [
  { code: "es", name: "Español" },
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "pt", name: "Português" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "zh", name: "中文" },
];

export const SUPPORTED_LOCALE_CODES = LOCALE_CATALOG.map((entry) => entry.code);

export function resolveBuiltinLocale(browserLang) {
  const lower = String(browserLang).toLowerCase();
  if (lower.startsWith("es")) return "es";
  if (lower.startsWith("en")) return "en";
  return null;
}

export function matchBrowserToSupportedLocale(browserLang) {
  const lower = String(browserLang).trim().toLowerCase();
  const aliases = {
    "zh-cn": "zh",
    "zh-hans": "zh",
    "zh-sg": "zh",
    "ko-kr": "ko",
  };
  if (aliases[lower]) return aliases[lower];

  for (const code of SUPPORTED_LOCALE_CODES) {
    if (code.toLowerCase() === lower) return code;
    if (lower.startsWith(`${code.toLowerCase()}-`)) return code;
  }
  const base = lower.split("-")[0];
  if (SUPPORTED_LOCALE_CODES.includes(base)) return base;
  return null;
}

export async function detectBrowserLocale() {
  const candidates = navigator.languages?.length
    ? navigator.languages
    : [navigator.language || "es"];

  for (const lang of candidates) {
    const builtin = resolveBuiltinLocale(lang);
    if (builtin) return builtin;
    const matched = matchBrowserToSupportedLocale(lang);
    if (matched) return matched;
  }

  return "es";
}

export function getLocaleCatalog(uiLocale = "es") {
  try {
    const display = new Intl.DisplayNames([uiLocale], { type: "language" });
    return LOCALE_CATALOG.map(({ code, name }) => ({
      code,
      name: display.of(code) ?? name,
    }));
  } catch {
    return LOCALE_CATALOG.map((entry) => ({ ...entry }));
  }
}
