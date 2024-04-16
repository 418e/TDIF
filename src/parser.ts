import { TDIFData } from "./types";
import typeCheck from "./utils/typeCheck";

export default function parse(content: string): TDIFData {
  const lines = content.split("\n");
  const data: TDIFData = {};

  lines.forEach((line) => {
    const trimmed = line.trim();
    const spaceIndex = trimmed.indexOf(" ");
    const equalsIndex = trimmed.indexOf("=");

    if (spaceIndex !== -1 && equalsIndex !== -1) {
      const type = trimmed.substring(0, spaceIndex).trim();
      const key = trimmed.substring(spaceIndex + 1, equalsIndex).trim();
      const value = trimmed.substring(equalsIndex + 1).trim();
      let parsedValue: any = null;

      if (type === "str") {
        typeCheck({ value, type });
        parsedValue = value.slice(1, -1);
      } else if (type === "int" || type === "unt" || type === "num") {
        typeCheck({ value, type });
        parsedValue = parseInt(value, 10);
      } else if (type === "float") {
        typeCheck({ value, type });
        parsedValue = parseFloat(value);
      } else if (type === "bool" || type === "true" || type === "false") {
        if (value === "true" || value === "false") {
          typeCheck({ value, type });
          parsedValue = JSON.parse(value);
        } else {
          // invalid boolean operator
        }
      }

      data[key] = {
        value: parsedValue,
        type,
      };
    }
  });

  return data;
}
