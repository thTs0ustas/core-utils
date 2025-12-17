export const baseError = (code: string, message: string) => ({
  message,
  getCode: () => code,
  getMessage: () => message,
  serializeErrors: () => ({ code, message }),
});
