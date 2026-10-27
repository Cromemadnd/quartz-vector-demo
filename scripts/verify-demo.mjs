import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import { resolve } from "node:path"

const root = resolve("public")
const origin = "https://cromemadnd.github.io"
const prefix = "/quartz-vector-demo/"
const pages = [
  "index",
  "features/index-en",
  "features/index",
  "features/infobox-en",
  "features/infobox",
  "features/navigation",
  "features/long-page",
  "features/formatting",
  "tags/index",
  "404",
]
for (const slug of pages) {
  const html = readFileSync(resolve(root, `${slug}.html`), "utf8")
  assert.match(html, /<html[^>]*lang="en"/, `${slug}: English interface`)
  if (slug !== "404")
    assert.match(
      html,
      /not affiliated with, sponsored by, or endorsed by the Wikimedia Foundation/,
      `${slug}: independent identity notice`,
    )
  assert.ok(!html.includes("safasf.asf"), `${slug}: placeholder domain`)
  const current = new URL(
    `${prefix}${slug === "index" ? "" : slug.replace(/\/index$/, "/")}`,
    origin,
  )
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const value = match[1].replaceAll("&amp;", "&")
    if (!value || value.startsWith("#")) continue
    const url = new URL(value, current)
    if (url.origin !== origin) continue
    const siteRoot = url.pathname === prefix.slice(0, -1)
    assert.ok(
      siteRoot || url.pathname.startsWith(prefix),
      `${slug}: escaped project path: ${value}`,
    )
    const relative = siteRoot ? "" : decodeURIComponent(url.pathname.slice(prefix.length))
    const path = resolve(root, relative)
    assert.ok(path === root || path.startsWith(`${root}/`), `${slug}: unsafe path`)
    assert.ok(
      [path, `${path}.html`, resolve(path, "index.html")].some(existsSync),
      `${slug}: missing local target: ${value}`,
    )
  }
}
assert.ok(
  !existsSync(resolve(root, "CNAME")),
  "GitHub project site must not emit a custom-domain CNAME",
)
const index = JSON.parse(readFileSync(resolve(root, "static/contentIndex.json"), "utf8"))
assert.ok(
  index["features/infobox-en"] && index["features/infobox"],
  "search index includes both languages",
)
console.log(
  `Verified ${pages.length} pages, English identity notices, bilingual search entries, and project-subpath links.`,
)
