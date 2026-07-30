const MYMEMORY_ENDPOINT = "https://api.mymemory.translated.net/get";
const SOURCE_LANG = "es";
const MAX_CHUNK = 480;
const REQUEST_DELAY_MS = 600;
const RATE_LIMIT_RETRY_MS = 2500;

const TARGET_LANG_MAP = {
  "zh-hans": "zh-CN",
  "zh-hant": "zh-TW",
  "pt-br": "pt-BR",
};

export class TranslationRateLimitError extends Error {
  constructor() {
    super("translation rate limit");
    this.name = "TranslationRateLimitError";
  }
}

export function isTranslationRateLimitError(error) {
  return error instanceof TranslationRateLimitError;
}

export function toTranslationTarget(code) {
  const normalized = String(code).toLowerCase();
  if (TARGET_LANG_MAP[normalized]) return TARGET_LANG_MAP[normalized];
  if (normalized.includes("-")) return code;
  return normalized.split("-")[0];
}

export function flattenMessages(tree, prefix = "") {
  const entries = [];
  for (const [key, value] of Object.entries(tree)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") entries.push([path, value]);
    else if (value && typeof value === "object") {
      entries.push(...flattenMessages(value, path));
    }
  }
  return entries;
}

export function unflattenMessages(entries) {
  const root = {};
  for (const [path, value] of entries) {
    const parts = path.split(".");
    let node = root;
    for (let i = 0; i < parts.length - 1; i += 1) {
      if (!node[parts[i]]) node[parts[i]] = {};
      node = node[parts[i]];
    }
    node[parts[parts.length - 1]] = value;
  }
  return root;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function shieldPlaceholders(text) {
  const tokens = [];
  const shielded = text.replace(/\{\{(\w+)\}\}/g, (_, name) => {
    const token = `⟦${tokens.length}⟧`;
    tokens.push({ token, name });
    return token;
  });
  return { shielded, tokens };
}

function unshieldPlaceholders(text, tokens) {
  let result = text;
  for (const { token, name } of tokens) {
    result = result.split(token).join(`{{${name}}}`);
  }
  return result;
}

function chunkText(text, maxLen = MAX_CHUNK) {
  if (text.length <= maxLen) return [text];
  const chunks = [];
  let rest = text;
  while (rest.length > maxLen) {
    let splitAt = rest.lastIndexOf(" ", maxLen);
    if (splitAt < maxLen / 2) splitAt = maxLen;
    chunks.push(rest.slice(0, splitAt).trim());
    rest = rest.slice(splitAt).trim();
  }
  if (rest) chunks.push(rest);
  return chunks;
}

async function translateChunk(text, target, attempt = 0) {
  const { shielded, tokens } = shieldPlaceholders(text);
  const params = new URLSearchParams({
    q: shielded,
    langpair: `${SOURCE_LANG}|${target}`,
  });

  const response = await fetch(`${MYMEMORY_ENDPOINT}?${params.toString()}`);

  if (response.status === 429) {
    if (attempt < 1) {
      await delay(RATE_LIMIT_RETRY_MS);
      return translateChunk(text, target, attempt + 1);
    }
    throw new TranslationRateLimitError();
  }

  if (!response.ok) {
    throw new Error(`translation request failed: ${response.status}`);
  }

  const payload = await response.json();
  if (payload.quotaFinished) throw new TranslationRateLimitError();

  const translated = payload.responseData?.translatedText ?? text;
  return unshieldPlaceholders(translated, tokens);
}

async function translateText(text, target) {
  const chunks = chunkText(text);
  const parts = [];
  for (const chunk of chunks) {
    parts.push(await translateChunk(chunk, target));
  }
  return parts.join(" ");
}

export async function translateMessageTree(sourceTree, targetLocale, options = {}) {
  const requestDelayMs = options.requestDelayMs ?? REQUEST_DELAY_MS;
  const target = toTranslationTarget(targetLocale);
  if (target === SOURCE_LANG) {
    return {
      tree: JSON.parse(JSON.stringify(sourceTree)),
      rateLimited: false,
    };
  }

  const flat = flattenMessages(sourceTree);
  const translatedFlat = [];
  let rateLimited = false;

  for (let i = 0; i < flat.length; i += 1) {
    const [path, text] = flat[i];

    if (rateLimited) {
      translatedFlat.push([path, text]);
      continue;
    }

    try {
      const value = await translateText(text, target);
      translatedFlat.push([path, value]);
      if (i < flat.length - 1) await delay(requestDelayMs);
    } catch (error) {
      if (isTranslationRateLimitError(error)) {
        rateLimited = true;
        translatedFlat.push([path, text]);
        for (let j = i + 1; j < flat.length; j += 1) {
          translatedFlat.push(flat[j]);
        }
        break;
      }
      translatedFlat.push([path, text]);
    }
  }

  return {
    tree: unflattenMessages(translatedFlat),
    rateLimited,
  };
}
