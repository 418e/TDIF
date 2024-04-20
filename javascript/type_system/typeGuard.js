"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.implArrayValue = exports.isArrayValue = exports.implFalseValue = exports.isFalseValue = exports.implTrueValue = exports.isTrueValue = exports.implBoolValue = exports.isBoolValue = exports.implFloatValue = exports.isFloatValue = exports.implNumValue = exports.isNumValue = exports.implUntValue = exports.isUntValue = exports.implIntValue = exports.isIntValue = exports.implStrValue = exports.isStrValue = void 0;
function isStrValue(value) {
    return value.type === "str";
}
exports.isStrValue = isStrValue;
function implStrValue(value) {
    if (isStrValue(value)) {
        return value;
    }
    return null;
}
exports.implStrValue = implStrValue;
function isIntValue(value) {
    var parsed = JSON.parse(value.value);
    return (typeof parsed === "number" &&
        value.type === "int" &&
        parsed >= 0 &&
        Number.isInteger(parsed));
}
exports.isIntValue = isIntValue;
function implIntValue(value) {
    if (isIntValue(value)) {
        return value;
    }
    return null;
}
exports.implIntValue = implIntValue;
function isUntValue(value) {
    var parsed = JSON.parse(value.value);
    return (typeof parsed === "number" &&
        value.type === "unt" &&
        parsed < 0 &&
        Number.isInteger(parsed));
}
exports.isUntValue = isUntValue;
function implUntValue(value) {
    if (isUntValue(value)) {
        return value;
    }
    return null;
}
exports.implUntValue = implUntValue;
function isNumValue(value) {
    var parsed = JSON.parse(value.value);
    return typeof parsed === "number" && value.type === "num";
}
exports.isNumValue = isNumValue;
function implNumValue(value) {
    if (isNumValue(value)) {
        return value;
    }
    return null;
}
exports.implNumValue = implNumValue;
function isFloatValue(value) {
    var parsed = JSON.parse(value.value);
    return (typeof parsed === "number" &&
        value.type === "float" &&
        !Number.isInteger(parsed));
}
exports.isFloatValue = isFloatValue;
function implFloatValue(value) {
    if (isFloatValue(value)) {
        return value;
    }
    return null;
}
exports.implFloatValue = implFloatValue;
function isBoolValue(value) {
    var parsed = JSON.parse(value.value);
    return typeof parsed === "boolean" && value.type === "bool";
}
exports.isBoolValue = isBoolValue;
function implBoolValue(value) {
    if (isBoolValue(value)) {
        return value;
    }
    return null;
}
exports.implBoolValue = implBoolValue;
function isTrueValue(value) {
    var parsed = JSON.parse(value.value);
    return (typeof parsed === "boolean" && value.type === "bool" && parsed === true);
}
exports.isTrueValue = isTrueValue;
function implTrueValue(value) {
    if (isTrueValue(value)) {
        return value;
    }
    return null;
}
exports.implTrueValue = implTrueValue;
function isFalseValue(value) {
    var parsed = JSON.parse(value.value);
    return (typeof parsed === "boolean" && value.type === "bool" && parsed === true);
}
exports.isFalseValue = isFalseValue;
function implFalseValue(value) {
    if (isFalseValue(value)) {
        return value;
    }
    return null;
}
exports.implFalseValue = implFalseValue;
function isArrayValue(value) {
    var parsed = JSON.parse(value.value);
    return (typeof parsed === "object" &&
        Array.isArray(parsed) &&
        value.type.trim().endsWith("[]"));
}
exports.isArrayValue = isArrayValue;
function implArrayValue(value) {
    if (isArrayValue(value)) {
        return value;
    }
    return null;
}
exports.implArrayValue = implArrayValue;
