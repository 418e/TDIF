"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var edit_1 = require("./api/edit");
var read_1 = require("./api/read");
var readAsync_1 = require("./api/readAsync");
var test_1 = require("./api/test");
exports.default = { read: read_1.default, readAsync: readAsync_1.default, edit: edit_1.default, test: test_1.default };
