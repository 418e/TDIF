"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process_1 = require("process");
var typeGuard_1 = require("./typeGuard");
function typeCheck(value) {
    function typeError(T) {
        console.error("\u001B[31munexpected type for ".concat(value.value, ": ").concat(T, "\u001B[0m"));
        (0, process_1.exit)(1);
    }
    switch (value.type) {
        case "str":
            if (!(0, typeGuard_1.isStrValue)(value)) {
                typeError(value.type);
            }
            break;
        case "int":
            if (!(0, typeGuard_1.isIntValue)(value)) {
                typeError(value.type);
            }
            break;
        case "unt":
            if (!(0, typeGuard_1.isUntValue)(value)) {
                typeError(value.type);
            }
            break;
        case "float":
            if (!(0, typeGuard_1.isFloatValue)(value)) {
                typeError(value.type);
            }
            break;
        case "num":
            if (!(0, typeGuard_1.isNumValue)(value)) {
                typeError(value.type);
            }
            break;
        case "bool":
            if (!(0, typeGuard_1.isBoolValue)(value)) {
                typeError(value.type);
            }
            break;
        case "true":
            if (!(0, typeGuard_1.isTrueValue)(value)) {
                typeError(value.type);
            }
            break;
        case "false":
            if (!(0, typeGuard_1.isFalseValue)(value)) {
                typeError(value.type);
            }
            break;
        default:
            if (value.type.trim().endsWith("[]")) {
                var arrType_1 = value.type.trim().slice(0, -2);
                if (!(0, typeGuard_1.isArrayValue)(value)) {
                    typeError(value.type);
                }
                else {
                    JSON.parse(value.value).forEach(function (item) {
                        typeCheck({
                            value: item,
                            type: arrType_1,
                        });
                    });
                }
            }
            else {
                console.error("\u001B[31minvalid type: ".concat(value.type, "\u001B[0m"));
                (0, process_1.exit)(1);
            }
    }
}
exports.default = typeCheck;
