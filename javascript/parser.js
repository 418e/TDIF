"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeCheck_1 = require("./type_system/typeCheck");
function parse(content) {
    var lines = content.split("\n");
    var data = {};
    var stack = [data];
    var currentIndentation = 0;
    function parseLine(trimmed) {
        var spaceIndex = trimmed.indexOf(" ");
        var equalsIndex = trimmed.indexOf("=");
        if (spaceIndex !== -1 && equalsIndex !== -1) {
            var type = trimmed.substring(0, spaceIndex).trim();
            var key = trimmed.substring(spaceIndex + 1, equalsIndex).trim();
            var value = trimmed.substring(equalsIndex + 1).trim();
            var parsedValue = null;
            (0, typeCheck_1.default)({ value: value, type: type });
            if (type === "str") {
                parsedValue = value.slice(1, -1);
            }
            else if (type === "int" || type === "unt" || type === "num") {
                parsedValue = parseInt(value, 10);
            }
            else if (type === "float") {
                parsedValue = parseFloat(value);
            }
            else {
                parsedValue = JSON.parse(value);
            }
            var currentObject = stack[stack.length - 1];
            currentObject[key] = parsedValue; // Directly assign the parsed value
        }
    }
    lines.forEach(function (line) {
        var trimmed = line.trim();
        var indentation = Math.round((line.trimEnd().length - trimmed.length) / 4);
        if (trimmed.startsWith("obj")) {
            var objectName = trimmed.split(" ")[1];
            var newObject = {};
            stack[stack.length - 1][objectName] = { value: newObject, type: "obj" };
            stack.push(newObject);
            currentIndentation = indentation;
        }
        else {
            while (indentation - currentIndentation < 1) {
                stack.pop();
                currentIndentation -= 1;
            }
            parseLine(trimmed);
        }
    });
    return data;
}
exports.default = parse;
