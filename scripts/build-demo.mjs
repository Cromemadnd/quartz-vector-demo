import { readFileSync, writeFileSync, existsSync } from "node:fs"
import { spawnSync } from "node:child_process"

// Quartz discovers its config under this filename. Restore the developer's
// configuration even if plugin installation or the build fails.
const configPath = new URL("../quartz.config.yaml", import.meta.url)
const englishPath = new URL("../quartz.config.en.yaml", import.meta.url)
const original = readFileSync(configPath)
const preview = process.argv.includes("--serve")
const commandArgs = process.argv.slice(2).filter((arg) => arg !== "--serve")
let status = 1
try {
  writeFileSync(configPath, readFileSync(englishPath))
  const install = spawnSync(
    process.execPath,
    ["--import", "tsx", "quartz/plugins/loader/install-plugins.ts"],
    { stdio: "inherit" },
  )
  if (install.error) throw install.error
  if (install.status === 0) {
    const result = spawnSync(
      process.execPath,
      ["quartz/bootstrap-cli.mjs", "build", ...(preview ? ["--serve"] : []), ...commandArgs],
      { stdio: "inherit" },
    )
    if (result.error) throw result.error
    status = result.status ?? 1
    if (status === 0 && !preview && existsSync("public")) writeFileSync("public/.nojekyll", "")
  } else status = install.status ?? 1
} finally {
  writeFileSync(configPath, original)
}
process.exitCode = status
