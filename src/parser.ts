import { TDIFData, TDIFLiteralType } from "./types";
import { typeCheck } from "./utils/types";

export default function parse(content: string): TDIFData {
  const lines = content.split("\n");
  const data: TDIFData = {};

  lines.forEach((line) => {
    const trimmed = line.trim();
    const colonIndex = trimmed.indexOf(":");
    const equalsIndex = trimmed.indexOf("=");
    const semicolonIndex = trimmed.indexOf(";");

    if (colonIndex !== -1 && equalsIndex !== -1 && semicolonIndex !== -1) {
      const key = trimmed.substring(0, colonIndex).trim();
      const type = trimmed.substring(colonIndex + 1, equalsIndex).trim();
      const value = trimmed.substring(equalsIndex + 1, semicolonIndex).trim();
      let parsedValue: TDIFLiteralType = null;

      if (type === "str") {
        typeCheck(value, type);
        parsedValue = value.slice(1, -1);
      } else if (
        type === "int" ||
        type === "unt" ||
        type === "num"
      ) {
        typeCheck(value, type);
        parsedValue = parseInt(value, 10);
      } else if (type === "float") {
        typeCheck(value, type);
        parsedValue = parseFloat(value);
      }

      data[key] = {
        value: parsedValue,
        type: type,
      };
    }
  });

  return data;
}
