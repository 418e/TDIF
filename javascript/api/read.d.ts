import { FileMeta } from "../types";
/**
 * Reads a Genus file and returns its content along with metadata.
 *
 * @param {string} filePath - The path to the Genus file.
 * @returns {FileMeta} An object containing the file's data and path.
 *
 * @example
 * ```ts
 * import {read} frin "genus-format";
 *
 * const file = read("user.gen");
 * console.log(file.data);
 * ```
 *
 * @version v0.0.4
 */
export default function read(filePath: string): FileMeta;
