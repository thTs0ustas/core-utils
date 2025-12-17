import type { Result } from "./types";

/*
 * Creates a Result representing an error.
 * @param e - The error value to be encapsulated in the Result.
 * @returns A Result with the error value and undefined for the success value.
 */
export const Error = <E>(e: E): Result<never, E> => [undefined, e];
