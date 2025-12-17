const mapping = {
  true: true,
  false: false,
};
/**
 *
 * @param value a string value that should be converted to a boolean
 * @param defaultTo a default value to return if the input value is not 'true' or 'false'
 * @returns a boolean value based on the input value or a default value
 */
export const boolean = (value: string | undefined, defaultTo = false) =>
  mapping[value as 'true' | 'false'] ?? defaultTo;
