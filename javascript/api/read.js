"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var parser_1 = require("../parser");
/**
 * Reads a Genus file and returns its content along with metadata.
 *
 * @param {string} filePath - The path to the Genus file.
 * @returns {FileMeta} An object containing the file's data and path.
 *
 * @example
 * ```ts
 * import {read} frin "genus-format";
 *
 * const file = read("user.gen");
 * console.log(file.data);
 * ```
 *
 * @version v0.0.4
 */
function read(filePath) {
    var content = (0, fs_1.readFileSync)(filePath, "utf-8");
    return {
        data: (0, parser_1.default)(content),
        path: filePath,
        rules: [],
    };
}
exports.default = read;
