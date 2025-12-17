import { baseError } from "./baseError";
import { StatusCodes } from "./utils/statusCodes";

export const unauthorizedError = (
  code: string,
  message: string = "Unauthorized",
) => {
  const name = "UnauthorizedError" as const;
  const status = StatusCodes.UNAUTHORIZED;

  return {
    status,
    name,
    ...baseError(code, message),
  };
};

export type UnauthorizedError = ReturnType<typeof unauthorizedError>;
