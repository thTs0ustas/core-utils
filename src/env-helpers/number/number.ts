/**
 *
 * @param value a string value that should be converted to a number
 * @param defaultTo a default value to return if the input value is not a number
 * @returns a decimal number based on the input value or a default value
 */
export const number = (value: string | undefined, defaultTo: number) =>
  parseInt(value || '', 10) || defaultTo;
