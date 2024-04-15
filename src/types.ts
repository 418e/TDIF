export type TDIFLiteralType = string | number | boolean | true | false | null;

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

export type TDIFObject = {
  value: TDIFLiteralType;
  type: TDIFType;
};

export interface TDIFData {
  [key: string]: TDIFObject;
}

export interface FileMeta {
  data: TDIFData;
  path: string;
}
