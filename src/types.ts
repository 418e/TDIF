export type TDIFLiteralType = string | number | null;

export type TDIFType = "str" | "int" | "unt" | "float" | "num" | string;

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
