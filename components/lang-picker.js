import { getLocale, setLocale, t } from "./i18n.js";
import { getLocaleCatalog } from "./i18n-languages.js";

/** ISO 639 → ISO 3166-1 alpha-2 para banderas (flag-icons) */
const LANG_TO_FLAG = {
  es: "es",
  en: "us",
  fr: "fr",
  de: "de",
  it: "it",
  pt: "pt",
  ja: "jp",
};

function flagCountryForLanguage(code) {
  const normalized = String(code).toLowerCase();
  return LANG_TO_FLAG[normalized] ?? "un";
}

function flagMarkupForLanguage(code) {
  const country = flagCountryForLanguage(code);
  return `<span class="lang-picker-option-flag-wrap" aria-hidden="true"><span class="lang-picker-option-flag fi fis fi-${country}"></span></span>`;
}

function globeIconMarkup() {
  return `<svg
    class="lang-picker-globe"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>`;
}

export function langPickerMarkup() {
  return `
    <div class="lang-picker" data-lang-picker>
      <button
        type="button"
        class="lang-picker-trigger"
        data-lang-trigger
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-label="${t("nav.langSelector")}"
      >
        ${globeIconMarkup()}
      </button>
      <div
        class="lang-picker-panel hidden"
        data-lang-panel
        role="dialog"
        aria-label="${t("nav.langSelector")}"
      >
        <div class="lang-picker-search-wrap">
          <input
            type="search"
            class="lang-picker-search"
            data-lang-search
            placeholder="${t("nav.searchLang")}"
            autocomplete="off"
          />
        </div>
        <p class="lang-picker-status" data-lang-status hidden>${t("nav.loadingLangs")}</p>
        <ul class="lang-picker-list" data-lang-list role="listbox" aria-label="${t("nav.langSelector")}"></ul>
      </div>
    </div>`;
}

export function setupLangPicker(host) {
  const root = host.querySelector("[data-lang-picker]");
  const trigger = host.querySelector("[data-lang-trigger]");
  const panel = host.querySelector("[data-lang-panel]");
  const search = host.querySelector("[data-lang-search]");
  const status = host.querySelector("[data-lang-status]");
  const list = host.querySelector("[data-lang-list]");

  if (!root || !trigger || !panel || !search || !status || !list) return null;

  let languages = getLocaleCatalog(getLocale());
  let filtered = languages.slice();
  let isOpen = false;

  const showStatus = (message, { hideList = false } = {}) => {
    status.textContent = message;
    status.hidden = false;
    if (hideList) list.hidden = true;
  };

  const setPanelOpen = (open) => {
    isOpen = open;
    panel.classList.toggle("hidden", !open);
    trigger.setAttribute("aria-expanded", String(open));
    if (open) {
      languages = getLocaleCatalog(getLocale());
      filterList(search.value || "");
      search.focus({ preventScroll: true });
    } else {
      search.value = "";
      filterList("");
    }
  };

  const markActiveOption = () => {
    const active = getLocale().toLowerCase();
    list.querySelectorAll("[data-lang-code]").forEach((btn) => {
      const code = btn.dataset.langCode;
      const isActive = active === String(code).toLowerCase();
      btn.classList.toggle("lang-picker-option-active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
    });
  };

  const renderList = (items) => {
    list.innerHTML = items
      .map(({ code, name }) => {
        const isActive =
          getLocale().toLowerCase() === String(code).toLowerCase();
        return `
          <li role="presentation">
            <button
              type="button"
              class="lang-picker-option${isActive ? " lang-picker-option-active" : ""}"
              data-lang-code="${code}"
              role="option"
              aria-selected="${isActive}"
            >
              ${flagMarkupForLanguage(code)}
              <span class="lang-picker-option-name">${name}</span>
            </button>
          </li>`;
      })
      .join("");
  };

  const filterList = (query) => {
    const q = query.trim().toLowerCase();
    filtered = q
      ? languages.filter(
          ({ code, name }) =>
            name.toLowerCase().includes(q) || code.toLowerCase().includes(q),
        )
      : languages.slice();
    status.hidden = true;
    list.hidden = filtered.length === 0;
    if (filtered.length) renderList(filtered);
    markActiveOption();
  };

  const onTriggerClick = (event) => {
    event.stopPropagation();
    const next = !isOpen;
    setPanelOpen(next);
  };

  const onDocumentClick = (event) => {
    if (!isOpen || root.contains(event.target)) return;
    setPanelOpen(false);
  };

  const onKeydown = (event) => {
    if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      setPanelOpen(false);
      trigger.focus({ preventScroll: true });
    }
  };

  const onSearchInput = () => filterList(search.value);

  const onListClick = async (event) => {
    const button = event.target.closest("[data-lang-code]");
    if (!button) return;

    const code = button.dataset.langCode;
    if (getLocale().toLowerCase() === String(code).toLowerCase()) return;

    try {
      await setLocale(code);
      setPanelOpen(false);
      trigger.focus({ preventScroll: true });
    } catch {
      showStatus(t("nav.langsError"));
      list.hidden = false;
      if (filtered.length) renderList(filtered);
    }
  };

  trigger.addEventListener("click", onTriggerClick);
  search.addEventListener("input", onSearchInput);
  list.addEventListener("click", onListClick);
  document.addEventListener("click", onDocumentClick);
  document.addEventListener("keydown", onKeydown);

  return () => {
    trigger.removeEventListener("click", onTriggerClick);
    search.removeEventListener("input", onSearchInput);
    list.removeEventListener("click", onListClick);
    document.removeEventListener("click", onDocumentClick);
    document.removeEventListener("keydown", onKeydown);
    setPanelOpen(false);
  };
}
