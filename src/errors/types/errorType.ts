import { ErrorName } from "./errorNames";
import { StatusCode } from "./statusCodes";

export type ErrorType = {
  name: ErrorName;
  status: StatusCode;
  message: string;
  getCode: () => string;
  getMessage: () => string;
  serializeErrors: () => { code: string; message: string }[];
};
