import { exit } from "process";
import { GenusType, GenusValue } from "../types";
import {
  isArrayValue,
  isBoolValue,
  isFalseValue,
  isFloatValue,
  isIntValue,
  isNumValue,
  isStrValue,
  isTrueValue,
  isUntValue,
} from "./typeGuard";

export default function typeCheck(value: GenusValue<any>) {
  function typeError(T: GenusType) {
    console.error(`\x1b[31munexpected type for ${value.value}: ${T}\x1b[0m`);
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
    default:
      if (value.type.trim().endsWith("[]")) {
        let arrType = value.type.trim().slice(0, -2);
        if (!isArrayValue(value)) {
          typeError(value.type);
        } else {
          (JSON.parse(value.value as unknown as string) as unknown[]).forEach(
            (item) => {
              typeCheck({
                value: item,
                type: arrType,
              });
            }
          );
        }
      } else {
        console.error(`\x1b[31minvalid type: ${value.type}\x1b[0m`);
        exit(1);
      }
  }
}
