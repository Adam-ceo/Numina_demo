import fs from "node:fs/promises";
import { pathToFileURL } from "node:url";

const { render } = await import(pathToFileURL("./dist-ssr/entry-server.js").href);
const html = await fs.readFile("dist/index.html", "utf8");
const marker = '<div id="root">';
if (!html.includes(marker + "</div>")) throw new Error("root div not found in dist/index.html");
await fs.writeFile("dist/index.html", html.replace(marker + "</div>", marker + render() + "</div>"));
await fs.rm("dist-ssr", { recursive: true, force: true });
