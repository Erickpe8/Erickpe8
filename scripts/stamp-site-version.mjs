/**
 * Inyecta versión de despliegue en index.html para cache-busting.
 * - meta asset-version
 * - ?v= en main.js y entradas de módulos
 * - carpeta de componentes versionada (site/c-<version>/)
 *
 * Uso: BUILD_VERSION=<sha> node scripts/stamp-site-version.mjs site/index.html
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";

const htmlPath = process.argv[2] || process.env.HTML_PATH || "site/index.html";

function resolveVersion() {
  const fromEnv = process.env.BUILD_VERSION?.trim();
  if (fromEnv) return fromEnv.slice(0, 12);
  try {
    return execSync("git rev-parse --short HEAD", { encoding: "utf8" }).trim();
  } catch {
    return String(Date.now());
  }
}

const version = resolveVersion();
const componentsDir = `c-${version}`;
const siteRoot = htmlPath.replace(/[/\\]index\.html$/i, "");

if (siteRoot && existsSync(`${siteRoot}/components`)) {
  console.error(
    "Usa carpeta versionada c-<sha> en el deploy; no copies components/ sin versionar."
  );
  process.exit(1);
}

if (siteRoot && !existsSync(`${siteRoot}/${componentsDir}`)) {
  console.error(`No existe ${siteRoot}/${componentsDir}`);
  process.exit(1);
}

let html = readFileSync(htmlPath, "utf8");

if (!html.includes("name=\"asset-version\"")) {
  console.error("index.html no tiene meta asset-version");
  process.exit(1);
}

html = html.replace(
  /<meta\s+name="asset-version"\s+content="[^"]*"\s*\/?>/i,
  `<meta name="asset-version" content="${version}" />`
);

html = html.replace(/src="\.\/components\//g, `src="./${componentsDir}/`);

html = html.replace(/src="(\.\/[^"?]+)"/g, (match, path) => {
  if (match.includes("?v=")) return match;
  return `src="${path}?v=${version}"`;
});

writeFileSync(htmlPath, html, "utf8");
console.log(`Cache-bust v=${version} components=./${componentsDir}/ → ${htmlPath}`);
