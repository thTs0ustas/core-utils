import { StatusCodes } from "../utils/statusCodes";

export type StatusCode = (typeof StatusCodes)[keyof typeof StatusCodes];
