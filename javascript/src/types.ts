export type GenusType =
  | "str"
  | "int"
  | "unt"
  | "float"
  | "num"
  | "bool"
  | "true"
  | "false"
  | string;

export interface GenusData {
  [key: string]: GenusValue<any>;
}

export interface Rule {
  msg: string;
  expr: boolean;
}

export interface FileMeta {
  data: GenusData;
  path: string;
  rules: Rule[];
}

export type GenusValue<T> = {
  value: T;
  type: GenusType;
};
