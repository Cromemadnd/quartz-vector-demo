import test from "node:test"
import assert from "node:assert/strict"
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { execFileSync } from "node:child_process"
import { pathToFileURL } from "node:url"
import { clonePluginRepository } from "./gitLoader"

test("clones pinned historical commits as well as branches and tags", () => {
  const root = mkdtempSync(join(tmpdir(), "quartz-plugin-pin-"))
  const source = join(root, "source")
  const run = (...args: string[]) =>
    execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim()
  try {
    run("init", "--initial-branch=main", source)
    run("-C", source, "config", "user.name", "Plugin test")
    run("-C", source, "config", "user.email", "plugin-test@example.invalid")
    writeFileSync(join(source, "version.txt"), "first")
    run("-C", source, "add", ".")
    run("-C", source, "commit", "-m", "first")
    const first = run("-C", source, "rev-parse", "HEAD")
    run("-C", source, "tag", "v1")
    writeFileSync(join(source, "version.txt"), "second")
    run("-C", source, "commit", "-am", "second")
    const latest = run("-C", source, "rev-parse", "HEAD")
    for (const [ref, expected] of [
      [first, first],
      ["main", latest],
      ["v1", first],
    ]) {
      const target = join(root, ref)
      clonePluginRepository(pathToFileURL(source).href, target, ref)
      assert.equal(run("-C", target, "rev-parse", "HEAD"), expected)
      assert.equal(
        readFileSync(join(target, "version.txt"), "utf8"),
        expected === first ? "first" : "second",
      )
    }
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})
