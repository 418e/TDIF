import { writeFileSync, readFileSync } from "fs";
import { exit } from "process";

type TDIFLiteralType = string | number | null;
type TDIFType = "str" | "int" | "int?" | string;
interface TDIFData {
  [key: string]: {
    value: TDIFLiteralType;
    type: TDIFType;
  };
}

function typeCheck(value: TDIFLiteralType, type: TDIFType) {
  function error() {
    console.error(
      `\x1b[31minvalid value (${value}): expected "${type}"\x1b[0m`
    );
    exit(1);
  }
  let valueType = typeof value;
  if (valueType === "string" && !isNaN(Number(value))) {
    valueType = "number";
  }
  switch (type) {
    case "str":
      if (valueType !== "string") {
        error();
      }
      break;
    case "int":
      if (valueType !== "number") {
        error();
      }
      break;
    case "int?":
      if (valueType !== "number" || value !== "null") {
        error();
      }
      break;
  }
}

function parseTDIF(content: string): TDIFData {
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
        typeCheck(value, "str");
        parsedValue = value.slice(1, -1);
      } else if (type === "int") {
        typeCheck(value, "int");
        parsedValue = parseInt(value, 10);
      } else if (type === "int?") {
        typeCheck(value, "int?");
        parsedValue = value === "null" ? null : parseInt(value, 10);
      }

      data[key] = {
        value: parsedValue,
        type: type,
      };
    }
  });

  return data;
}

interface File {
  data: TDIFData;
  path: string;
}
function read(filePath: string): File {
  const content = readFileSync(filePath, "utf-8");
  return {
    data: parseTDIF(content),
    path: filePath,
  };
}

function edit(file: File, key: string, newValue: TDIFLiteralType): void {
  let data = file.data;
  data[key] = {
    value: newValue,
    type: data[key].type,
  };
  typeCheck(newValue, data[key].type);

  const newContent = Object.entries(data)
    .map(
      ([k, v]) =>
        `${k}: ${v.type} = ${
          typeof v.value === "string" ? `"${v.value}"` : v.value
        };`
    )
    .join("\n");
  writeFileSync(file.path, newContent);
}

export { read, edit };
