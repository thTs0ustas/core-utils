/**
 * Splits a comma separated string into an array of strings.
 *
 * @param value - The string to split.
 * @returns An array of strings.
 * @example list("0.0.0.0, 127.0.0.1, 192.168.0.1") => ["0.0.0.0", "127.0.0.1", "192.168.0.1"]
 */
export const list = (value: string | undefined) =>
  value ? value.trim().split(/\s*,\s*/) : [];
