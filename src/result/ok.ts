import { Result } from "./types";

/*
 * Creates a Result representing a successful value.
 * @param value - The success value to be encapsulated in the Result.
 * @returns A Result with the success value and undefined for the error value.
 */
export const Ok = <T>(value: T): Result<T, never> => [value, undefined];
