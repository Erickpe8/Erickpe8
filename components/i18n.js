import {
  detectBrowserLocale,
  SUPPORTED_LOCALE_CODES,
} from "./i18n-languages.js";

const messages = {};
const listeners = new Set();
const loadingListeners = new Set();
let currentLocale = "es";
let initialized = false;
let bootstrapPromise = null;
let localeLoading = false;

const STORAGE_KEY = "portfolio-locale";
const USER_PICKED_KEY = "portfolio-locale-user-picked";

async function loadLocale(code) {
  if (messages[code]) return messages[code];

  const moduleUrl = new URL(`../assets/locales/${code}.js`, import.meta.url);
  const version = document.querySelector('meta[name="asset-version"]')?.content?.trim();
  if (version && version !== "dev") {
    moduleUrl.searchParams.set("v", version);
  }
  const module = await import(moduleUrl.href);
  messages[code] = module.default;
  return messages[code];
}

function notifyLocaleLoading(value) {
  localeLoading = value;
  loadingListeners.forEach((callback) => {
    try {
      callback(value);
    } catch (error) {
      console.error("Error en listener de carga de idioma:", error);
    }
  });
}

export function isLocaleLoading() {
  return localeLoading;
}

export function onLocaleLoading(callback) {
  loadingListeners.add(callback);
  return () => loadingListeners.delete(callback);
}

function resolveMessage(locale, key) {
  const parts = key.split(".");
  let value = messages[locale];
  for (const part of parts) {
    value = value?.[part];
  }
  return value;
}

async function ensureLocaleBundle(locale) {
  return loadLocale(locale);
}

async function detectPreferredLocale() {
  if (localStorage.getItem(USER_PICKED_KEY) === "1") {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LOCALE_CODES.includes(saved)) return saved;
  }
  const detected = await detectBrowserLocale();
  return SUPPORTED_LOCALE_CODES.includes(detected) ? detected : "es";
}

export function getLocale() {
  return currentLocale;
}

export function normalizeLocale(code) {
  if (!code) return null;
  const raw = String(code);
  if (SUPPORTED_LOCALE_CODES.includes(raw)) return raw;
  const lower = raw.toLowerCase();
  for (const locale of SUPPORTED_LOCALE_CODES) {
    if (locale.toLowerCase() === lower) return locale;
  }
  return null;
}

export function revealSections() {
  document.documentElement.classList.remove("play-entrance-animations");
  document.querySelectorAll(".fade-in").forEach((el) => el.classList.add("visible"));
}

export async function setLocale(locale) {
  const target = normalizeLocale(locale);
  if (!target) return;

  if (target === currentLocale && messages[target]) {
    return;
  }

  const needsFetch = !messages[target];
  if (needsFetch) {
    notifyLocaleLoading(true);
    document.documentElement.classList.add("is-locale-loading");
  }

  try {
    await ensureLocaleBundle(target);
    currentLocale = target;
    localStorage.setItem(STORAGE_KEY, target);
    localStorage.setItem(USER_PICKED_KEY, "1");
    applyDocumentLocale();
    listeners.forEach((callback) => {
      try {
        callback(currentLocale);
      } catch (error) {
        console.error("Error al cambiar idioma:", error);
      }
    });
    revealSections();
  } catch (error) {
    console.error("Error al cambiar idioma:", error);
    throw error;
  } finally {
    if (needsFetch) {
      notifyLocaleLoading(false);
      document.documentElement.classList.remove("is-locale-loading");
    }
  }
}

export function t(key, vars = {}) {
  let value = resolveMessage(currentLocale, key) ?? resolveMessage("es", key);
  if (typeof value !== "string") return key;
  return value.replace(/\{\{(\w+)\}\}/g, (_, name) => String(vars[name] ?? ""));
}

export function onLocaleChange(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function applyDocumentLocale() {
  document.documentElement.lang = currentLocale;
  document.title = t("meta.title");

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t("meta.description"));
}

async function bootstrapI18n() {
  if (initialized) return;
  initialized = true;

  try {
    currentLocale = await detectPreferredLocale();
  } catch (error) {
    console.error("No se pudo detectar idioma:", error);
    currentLocale = "es";
  }

  notifyLocaleLoading(true);
  document.documentElement.classList.add("is-locale-loading");
  try {
    await ensureLocaleBundle(currentLocale);
    if (!messages.es) await loadLocale("es");
  } catch (error) {
    console.error("No se pudo cargar el idioma inicial:", error);
    currentLocale = "es";
    await loadLocale("es");
  } finally {
    notifyLocaleLoading(false);
    document.documentElement.classList.remove("is-locale-loading");
  }

  applyDocumentLocale();
}

export function whenI18nReady() {
  if (!bootstrapPromise) bootstrapPromise = bootstrapI18n();
  return bootstrapPromise;
}

export function initI18n() {
  whenI18nReady();
}

export function formatExperience(startDate) {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (now.getDate() < startDate.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts = [];
  if (years > 0) {
    parts.push(`${years} ${t(years === 1 ? "time.year" : "time.years")}`);
  }
  if (months > 0) {
    parts.push(`${months} ${t(months === 1 ? "time.month" : "time.months")}`);
  }

  return parts.length ? parts.join(` ${t("time.and")} `) : t("time.lessThanMonth");
}

initI18n();
