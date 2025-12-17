import { baseError } from "./baseError";
import { StatusCodes } from "./utils/statusCodes";

export const notFoundError = (code: string, message = "Unauthorized") => {
  const name = "NotFoundError" as const;
  const status = StatusCodes.NOT_FOUND;

  return {
    status,
    name,
    ...baseError(code, message),
  };
};

export type NotFoundError = ReturnType<typeof notFoundError>;
