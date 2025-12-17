export type ApiResponseType<T> = {
  data: T;
  status: number;
  headers?: Headers;
};
