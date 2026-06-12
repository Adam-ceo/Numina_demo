import fs from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { createHash } from "node:crypto";

const { render } = await import(pathToFileURL("./dist-ssr/entry-server.js").href);
let html = await fs.readFile("dist/index.html", "utf8");
const marker = '<div id="root">';
if (!html.includes(marker + "</div>")) throw new Error("root div not found in dist/index.html");
html = html.replace(marker + "</div>", marker + render() + "</div>");
const cssTag = html.match(/<link rel="stylesheet"[^>]*href="\/(assets\/[^"]+\.css)"[^>]*>/);
if (cssTag) {
  const css = await fs.readFile(`dist/${cssTag[1]}`, "utf8");
  html = html.replace(cssTag[0], `<style>${css}</style>`);
}
const entryTag = html.match(/<script type="module" crossorigin src="(\/assets\/[^"]+\.js)"><\/script>/);
if (entryTag) {
  const mods = [...html.matchAll(/\s*<link rel="modulepreload" crossorigin href="(\/assets\/[^"]+\.js)">/g)];
  for (const m of mods) html = html.replace(m[0], "");
  const hrefs = JSON.stringify(mods.map((m) => m[1]));
  const js =
    `(function(){var d=document,done=false;function inject(){if(done)return;done=true;` +
    `${hrefs}.forEach(function(h){var l=d.createElement("link");l.rel="modulepreload";l.crossOrigin="";l.href=h;d.head.appendChild(l)});` +
    `var s=d.createElement("script");s.type="module";s.crossOrigin="";s.src=${JSON.stringify(entryTag[1])};d.head.appendChild(s)}` +
    `function after(){requestAnimationFrame(function(){setTimeout(inject,0)})}` +
    `try{new PerformanceObserver(function(l,o){if(l.getEntriesByName("first-contentful-paint").length){o.disconnect();after()}}).observe({type:"paint",buffered:true})}catch(e){addEventListener("load",after)}` +
    `setTimeout(inject,3000)})()`;
  const loader = `<script>${js}</script>`;
  html = html.replace(entryTag[0], loader);
  const hash = createHash("sha256").update(js).digest("base64");
  const csp = `default-src 'self'; script-src 'self' 'sha256-${hash}' 'unsafe-hashes' 'sha256-1jAmyYXcRq6zFldLe/GCgIDJBiOONdXjTLgEFMDnDSM='; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' https://images.unsplash.com; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-src 'none'`;
  const charsetMarker = '<meta charset="UTF-8" />';
  if (!html.includes(charsetMarker)) throw new Error("charset meta not found in dist/index.html");
  html = html.replace(charsetMarker, charsetMarker + '\n    <meta http-equiv="Content-Security-Policy" content="' + csp + '" />');
}
await fs.writeFile("dist/index.html", html);
await fs.rm("dist-ssr", { recursive: true, force: true });
