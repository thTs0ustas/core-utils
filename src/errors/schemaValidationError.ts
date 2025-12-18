import { ZodError, ZodIssue } from "zod";
import { StatusCodes } from "./utils/statusCodes";
import { baseError } from "./baseError";

export const schemaValidationError = (error: ZodError) => {
  const name = "InvalidRequestError";
  const status = StatusCodes.BAD_REQUEST;

  return {
    name,
    status,
    ...baseError("ValidationError", "Invalid Request Parameters"),
    serializeErrors() {
      return error.issues.map((err: ZodIssue) => ({
        code: err.code,
        field: err.path.at(err.path.length - 1) as string,
        message: err.message,
      }));
    },
  };
};

export type SchemaValidationError = ReturnType<typeof schemaValidationError>;
