import { FileMeta } from "../types";
/**
 * Reads a Genus file and returns its content along with metadata.
 *
 * @param {string} filePath - The path to the Genus file.
 * @returns {FileMeta} An object containing the file's data and path.
 *
 * @example
 * ```ts
 * import {readAsync} frin "genus-format";
 *
 * readAsync("user.gen").then((e) => {
 * console.log(e.data);
 * });
 * ```
 *
 * @version v0.0.5
 */
export default function readAsync(filePath: string): Promise<FileMeta>;
