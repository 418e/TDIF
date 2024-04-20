"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function test(file, msg, expr) {
    file.rules.push({
        msg: msg,
        expr: expr,
    });
    if (!expr) {
        console.error("\u001B[31m\u274C | failed: \"".concat(msg, "\"\u001B[0m"));
    }
    else {
        console.log("\u001B[32m\u2705 | success \"".concat(msg, "\"\u001B[0m"));
    }
}
exports.default = test;
