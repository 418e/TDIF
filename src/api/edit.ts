import { writeFileSync } from "fs";
import { typeCheck } from "../utils/types";
import { FileMeta, TDIFLiteralType, TDIFObject } from "../types";
/**
 * @param {FileMeta} file
 * file you would like to edit
 * @param {string} key
 * name of the key you would like to edit
 * @param {TDIFLiteralType} newValue
 * new value of the you would like to edit
 * @returns `void`
 *
 * @example
 * ```ts
 * import {read, edit} from "tdif";
 *
 * const file = read("user.tdif");
 * edit(file, "name", "luke");
 * ```
 *
 * @version v0.0.3
 */
export default function edit(
  file: FileMeta,
  key: string,
  newValue: TDIFLiteralType
): void {
  let data = file.data;
  data[key] = {
    value: newValue,
    type: data[key].type,
  };
  typeCheck(newValue, data[key].type);

  const newContent = Object.entries(data)
    .map(
      ([k, v]: [string, TDIFObject]) =>
        `${v.type} ${k} = ${
          typeof v.value === "string" ? `"${v.value}"` : v.value
        };`
    )
    .join("\n");
  writeFileSync(file.path, newContent);
}
