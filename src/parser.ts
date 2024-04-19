import { GenusData } from "./types";
import typeCheck from "./type_system/typeCheck";

export default function parse(content: string): GenusData {
  const lines = content.split("\n");
  const data: GenusData = {};
  let stack: GenusData[] = [data];
  let currentIndentation = 0;

function parseLine(trimmed: string) {
  const spaceIndex = trimmed.indexOf(" ");
  const equalsIndex = trimmed.indexOf("=");

  if (spaceIndex !== -1 && equalsIndex !== -1) {
    const type = trimmed.substring(0, spaceIndex).trim();
    const key = trimmed.substring(spaceIndex + 1, equalsIndex).trim();
    const value = trimmed.substring(equalsIndex + 1).trim();
    let parsedValue: any = null;
    typeCheck({ value, type });

    if (type === "str") {
      parsedValue = value.slice(1, -1);
    } else if (type === "int" || type === "unt" || type === "num") {
      parsedValue = parseInt(value, 10);
    } else if (type === "float") {
      parsedValue = parseFloat(value);
    } else {
      parsedValue = JSON.parse(value);
    }

    const currentObject = stack[stack.length - 1];
    currentObject[key] = parsedValue; // Directly assign the parsed value
  }
}

  lines.forEach((line) => {
    const trimmed = line.trim();
    const indentation = Math.round(
      (line.trimEnd().length - trimmed.length) / 4
    );

    if (trimmed.startsWith("obj")) {
      const objectName = trimmed.split(" ")[1];
      const newObject: GenusData = {};
      stack[stack.length - 1][objectName] = { value: newObject, type: "obj" };
      stack.push(newObject);
      currentIndentation = indentation;
    } else {
     
        while (indentation - currentIndentation < 1) {
          stack.pop();
          currentIndentation -= 1;
        }
      
      parseLine(trimmed);
    }
  });

  return data;
}
