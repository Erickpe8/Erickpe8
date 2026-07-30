/**
 * Genera fr, de, it, pt, ja desde es.json (solo en tu PC, no en el sitio).
 * Usa el endpoint público client=gtx de Google Translate.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  flattenMessages,
  unflattenMessages,
} from "../components/i18n-translate.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const localesDir = path.join(root, "assets", "locales");
const targets = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ["fr", "de", "it", "pt", "ja", "ko", "zh"];

const REQUEST_DELAY_MS = 350;

const esPath = path.join(localesDir, "es.json");
if (!existsSync(esPath)) {
  console.error("Falta assets/locales/es.json");
  process.exit(1);
}

const esTree = JSON.parse(readFileSync(esPath, "utf8"));

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

async function translateGoogle(text, target) {
  const { shielded, tokens } = shieldPlaceholders(text);
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "es");
  url.searchParams.set("tl", target);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", shielded);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Google translate HTTP ${response.status}`);
  }

  const payload = await response.json();
  const translated = payload[0]?.map((row) => row[0]).join("") ?? text;
  return unshieldPlaceholders(translated, tokens);
}

async function translateTree(esSource, target) {
  const flat = flattenMessages(esSource);
  const translatedFlat = [];

  for (let i = 0; i < flat.length; i += 1) {
    const [pathKey, text] = flat[i];
    try {
      const value = await translateGoogle(text, target);
      translatedFlat.push([pathKey, value]);
    } catch (error) {
      console.warn(`  Falló "${pathKey}": ${error.message}`);
      translatedFlat.push([pathKey, text]);
    }
    if (i < flat.length - 1) await delay(REQUEST_DELAY_MS);
  }

  return unflattenMessages(translatedFlat);
}

console.log(`Origen: ${flattenMessages(esTree).length} textos`);

for (const locale of targets) {
  const outPath = path.join(localesDir, `${locale}.json`);
  console.log(`\nTraduciendo → ${locale}…`);
  const tree = await translateTree(esTree, locale);
  writeFileSync(outPath, JSON.stringify(tree, null, 2), "utf8");
  console.log(`  Guardado: assets/locales/${locale}.json`);
}

console.log("\nListo.");
