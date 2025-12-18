export const baseError = (code: string, message: string) => ({
  getCode: () => code,
  getMessage: () => message,
  serializeErrors: () => ({ code, message }),
});
