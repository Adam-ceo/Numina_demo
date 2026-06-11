import fs from "node:fs/promises";
import { pathToFileURL } from "node:url";

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
await fs.writeFile("dist/index.html", html);
await fs.rm("dist-ssr", { recursive: true, force: true });
