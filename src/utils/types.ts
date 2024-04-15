import { exit } from "process";
import { TDIFLiteralType, TDIFType } from "../types";

export function typeCheck(value: TDIFLiteralType, type: TDIFType) {
  function typeError(T: TDIFType) {
    console.error(`\x1b[31minvalid value (${value}): expected "${T}"\x1b[0m`);
    exit(1);
  }

  let valueType = typeof value;
  if (valueType === "string" && !isNaN(Number(value))) {
    valueType = "number";
  } else if (valueType === "boolean") {
    valueType = "boolean";
  }

  switch (type) {
    case "str":
      if (valueType !== "string") {
        typeError(type);
      }
      break;
    case "int":
      if (valueType !== "number") {
        typeError(type);
      } else if (typeof value === "string" && parseInt(value) < 0) {
        typeError("int");
      }
      break;
    case "unt":
      if (valueType !== "number") {
        typeError(type);
      } else if (typeof value === "string" && parseInt(value) >= 0) {
        typeError("unt");
      } else {
      }
      break;
    case "float":
      if (valueType !== "number") {
        typeError(type);
      } else if (
        typeof value === "string" &&
        Number.isInteger(parseFloat(value))
      ) {
        typeError("float");
      }
      break;
    case "num":
      if (valueType !== "number") {
        typeError(type);
      }
      break;
    case "bool":
      if (valueType !== "boolean") {
        typeError(type);
      }
      break;
    case "true":
      if (valueType !== "boolean" || value !== true) {
        typeError(type);
      }
      break;
    case "false":
      if (valueType !== "boolean" || value !== false) {
        typeError(type);
      }
      break;
  }
}
