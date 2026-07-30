import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const localesDir = path.join(root, "assets", "locales");

for (const file of readdirSync(localesDir)) {
  if (!file.endsWith(".json")) continue;
  const code = file.replace(/\.json$/, "");
  const data = JSON.parse(readFileSync(path.join(localesDir, file), "utf8"));
  const out = `export default ${JSON.stringify(data, null, 2)};\n`;
  writeFileSync(path.join(localesDir, `${code}.js`), out, "utf8");
  console.log(`assets/locales/${code}.js`);
}

console.log("Listo.");
