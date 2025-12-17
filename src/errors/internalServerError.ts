import { baseError } from "./baseError";
import { StatusCodes } from "./utils/statusCodes";

export const internalServerError = (
  code: string,
  message = "Encountered an Internal server error.",
) => {
  const name = "InternalServerError" as const;
  const status = StatusCodes.INTERNAL_SERVER_ERROR;

  return {
    status,
    name,
    ...baseError(code, message),
  };
};

export type InternalServerError = ReturnType<typeof internalServerError>;
