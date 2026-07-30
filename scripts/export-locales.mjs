import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const esPath = path.join(root, "assets", "locales", "es.json");
const enPath = path.join(root, "assets", "locales", "en.json");

if (!existsSync(esPath) || !existsSync(enPath)) {
  console.error("Faltan assets/locales/es.json o en.json");
  process.exit(1);
}

const es = JSON.parse(readFileSync(esPath, "utf8"));
const en = JSON.parse(readFileSync(enPath, "utf8"));

console.log(
  `Locales listos: es (${Object.keys(es).length} secciones), en (${Object.keys(en).length} secciones).`,
);
console.log(
  "Edita es.json / en.json y ejecuta npm run locales:generate para actualizar fr, de, it, pt, ja.",
);
