"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var typeCheck_1 = require("../type_system/typeCheck");
/**
 * @param {FileMeta} file
 * file you would like to edit
 * @param {string} key
 * name of the key you would like to edit
 * @param {any} newValue
 * new value of the you would like to edit
 * @returns {void}
 *
 * @example
 * ```ts
 * import {read, edit} from "genus-format";
 *
 * const file = read("user.gen");
 * edit(file, "name", "luke");
 * ```
 *
 * @version v0.0.4
 */
function edit(file, key, newValue) {
    var data = file.data;
    var newObj = {
        value: newValue,
        type: data[key].type,
    };
    data[key] = newObj;
    (0, typeCheck_1.default)(newObj);
    var newContent = Object.entries(data)
        .map(function (_a) {
        var k = _a[0], v = _a[1];
        return "".concat(v.type, " ").concat(k, " = ").concat(typeof v.value === "string" ? "\"".concat(v.value, "\"") : v.value, ";");
    })
        .join("\n");
    (0, fs_1.writeFileSync)(file.path, newContent);
}
exports.default = edit;
