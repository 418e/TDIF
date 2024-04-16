import { FileMeta } from "../types";
/**
 * Pushes and verifies rules inside file metadata
 *
 * @param {FileMeta} file - The path to the TDIF file.
 * @param {string} msg
 * @param {() => boolean} expr
 * @returns {void}
 *
 * @example
 * ```ts
 * import {read, rules} frin "tdif";
 * import { implIntValue, isIntValue } from "tdif/utils";
 *
 * const file = read("user.tdif");
 * let age = file.data["age"];
 * rules.add(file, "age is more than 18", isIntValue(age) && implIntValue(age)!?.value > 18);
 * ```
 *
 * @version v0.0.4
 */
function add(file: FileMeta, msg: string, expr: boolean) {
  file.rules.push({
    msg,
    expr,
  });
  if (!expr) {
    console.error(`\x1b[31m❌ | rule "${msg}": failure\x1b[0m`);
  } else {
    console.log(`\x1b[32m✅ | rule "${msg}": success\x1b[0m`);
  }
}
const rules = {
  add,
};
export default rules;
