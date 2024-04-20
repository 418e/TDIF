import { FileMeta } from "../types";
/**
 * @param {FileMeta} file
 * file you would like to edit
 * @param {string} key
 * name of the key you would like to edit
 * @param {any} newValue
 * new value of the you would like to edit
 * @returns {void}
 *
 * @example
 * ```ts
 * import {read, edit} from "genus-format";
 *
 * const file = read("user.gen");
 * edit(file, "name", "luke");
 * ```
 *
 * @version v0.0.4
 */
export default function edit(file: FileMeta, key: string, newValue: any): void;
