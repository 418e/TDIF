export type TDIFType =
  | "str"
  | "int"
  | "unt"
  | "float"
  | "num"
  | "bool"
  | "true"
  | "false"
  | string;

export interface TDIFData {
  [key: string]: TDIFValue<any>;
}

export interface Rule {
  msg: string;
  expr: boolean;
}

export interface FileMeta {
  data: TDIFData;
  path: string;
  rules: Rule[];
}

export type TDIFValue<T> = {
  value: T;
  type: TDIFType;
};
