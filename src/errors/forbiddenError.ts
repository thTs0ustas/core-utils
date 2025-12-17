import { baseError } from "./baseError";
import { StatusCodes } from "./utils/statusCodes";

export const forbiddenError = (code: string, message = "Forbidden") => {
  const name = "ForbiddenError" as const;
  const status = StatusCodes.FORBIDDEN;

  return {
    status,
    name,
    ...baseError(code, message),
  };
};

export type ForbiddenError = ReturnType<typeof forbiddenError>;
