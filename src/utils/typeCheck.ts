import { exit } from "process";
import { TDIFType, TDIFValue } from "../types";
import {
  isBoolValue,
  isFalseValue,
  isFloatValue,
  isIntValue,
  isNumValue,
  isStrValue,
  isTrueValue,
  isUntValue,
} from "./typeGuard";

export default function typeCheck(value: TDIFValue<any>) {
  function typeError(T: TDIFType) {
    console.error(`\x1b[31minvalid value (${value}): expected "${T}"\x1b[0m`);
    exit(1);
  }

  switch (value.type) {
    case "str":
      if (!isStrValue(value)) {
        typeError(value.type);
      }
      break;
    case "int":
      if (!isIntValue(value)) {
        typeError(value.type);
      }
      break;
    case "unt":
      if (!isUntValue(value)) {
        typeError(value.type);
      }
      break;
    case "float":
      if (!isFloatValue(value)) {
        typeError(value.type);
      }
      break;
    case "num":
      if (!isNumValue(value)) {
        typeError(value.type);
      }
      break;
    case "bool":
      if (!isBoolValue(value)) {
        typeError(value.type);
      }
      break;
    case "true":
      if (!isTrueValue(value)) {
        typeError(value.type);
      }
      break;
    case "false":
      if (!isFalseValue(value)) {
        typeError(value.type);
      }
      break;
  }
}
