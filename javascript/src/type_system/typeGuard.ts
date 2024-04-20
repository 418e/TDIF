import { GenusValue } from "../types";

export function isStrValue(
  value: GenusValue<any>
): value is GenusValue<string> {
  return value.type === "str";
}

export function implStrValue(
  value: GenusValue<any>
): GenusValue<string> | null {
  if (isStrValue(value)) {
    return value;
  }
  return null;
}

export function isIntValue(
  value: GenusValue<any>
): value is GenusValue<number> {
  let parsed = JSON.parse(value.value);
  return (
    typeof parsed === "number" &&
    value.type === "int" &&
    parsed >= 0 &&
    Number.isInteger(parsed)
  );
}

export function implIntValue(
  value: GenusValue<any>
): GenusValue<number> | null {
  if (isIntValue(value)) {
    return value;
  }
  return null;
}

export function isUntValue(
  value: GenusValue<any>
): value is GenusValue<number> {
  let parsed = JSON.parse(value.value);
  return (
    typeof parsed === "number" &&
    value.type === "unt" &&
    parsed < 0 &&
    Number.isInteger(parsed)
  );
}

export function implUntValue(
  value: GenusValue<any>
): GenusValue<number> | null {
  if (isUntValue(value)) {
    return value;
  }
  return null;
}

export function isNumValue(
  value: GenusValue<any>
): value is GenusValue<number> {
  let parsed = JSON.parse(value.value);
  return typeof parsed === "number" && value.type === "num";
}

export function implNumValue(
  value: GenusValue<any>
): GenusValue<number> | null {
  if (isNumValue(value)) {
    return value;
  }
  return null;
}

export function isFloatValue(
  value: GenusValue<any>
): value is GenusValue<number> {
  let parsed = JSON.parse(value.value);
  return (
    typeof parsed === "number" &&
    value.type === "float" &&
    !Number.isInteger(parsed)
  );
}

export function implFloatValue(
  value: GenusValue<any>
): GenusValue<number> | null {
  if (isFloatValue(value)) {
    return value;
  }
  return null;
}

export function isBoolValue(
  value: GenusValue<any>
): value is GenusValue<boolean> {
  let parsed = JSON.parse(value.value);
  return typeof parsed === "boolean" && value.type === "bool";
}

export function implBoolValue(
  value: GenusValue<any>
): GenusValue<boolean> | null {
  if (isBoolValue(value)) {
    return value;
  }
  return null;
}

export function isTrueValue(
  value: GenusValue<any>
): value is GenusValue<boolean> {
  let parsed = JSON.parse(value.value);
  return (
    typeof parsed === "boolean" && value.type === "bool" && parsed === true
  );
}

export function implTrueValue(
  value: GenusValue<any>
): GenusValue<boolean> | null {
  if (isTrueValue(value)) {
    return value;
  }
  return null;
}

export function isFalseValue(
  value: GenusValue<any>
): value is GenusValue<boolean> {
  let parsed = JSON.parse(value.value);
  return (
    typeof parsed === "boolean" && value.type === "bool" && parsed === true
  );
}

export function implFalseValue(
  value: GenusValue<any>
): GenusValue<boolean> | null {
  if (isFalseValue(value)) {
    return value;
  }
  return null;
}

export function isArrayValue<T>(
  value: GenusValue<any>
): value is GenusValue<T[]> {
  let parsed = JSON.parse(value.value);
  return (
    typeof parsed === "object" &&
    Array.isArray(parsed) &&
    value.type.trim().endsWith("[]")
  );
}

export function implArrayValue<T>(
  value: GenusValue<any>
): GenusValue<T[]> | null {
  if (isArrayValue<T>(value)) {
    return value;
  }
  return null;
}
