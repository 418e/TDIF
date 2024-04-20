import { FileMeta } from "../types";
/**
 * Pushes and verifies rules inside file metadata
 *
 * @param {FileMeta} file - The path to the Genus file.
 * @param {string} msg
 * @param {boolean} expr
 * @returns {void}
 *
 * @example
 * ```ts
 * import {read, test} frin "genus-format";
 * import { implIntValue, isIntValue } from "genus-format/utils";
 *
 * const file = read("user.gen");
 * let age = file.data["age"];
 * test(file, "age is more than 18", isIntValue(age) && implIntValue(age)!?.value > 18);
 * ```
 *
 * @version v0.0.5
 */
export default function test(file: FileMeta, msg: string, expr: boolean): void {
  file.rules.push({
    msg,
    expr,
  });
  if (!expr) {
    console.error(`\x1b[31m❌ | failed: "${msg}"\x1b[0m`);
  } else {
    console.log(`\x1b[32m✅ | success "${msg}"\x1b[0m`);
  }
}
