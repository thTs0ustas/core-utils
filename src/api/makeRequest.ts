import { ApiResponseType } from "../api/serializeResponse";
import { Error } from "../result/error";
import { Ok } from "../result/ok";
import { Result } from "../result/types";

type Options = RequestInit;

/**
 *
 * @param timeout - Timeout in milliseconds
 * @returns { controller, cancelTimeout } - Returns a function to clear the timeout
 */
const createAbortController = (
  timeout: number,
): {
  controller: AbortController;
  cancelTimeout: () => void;
} => {
  const controller = new AbortController();
  const timeoutId = setTimeout(
    () =>
      controller.abort({
        status: 504,
        message: "Abort Controller Timeout Reached",
      }),
    timeout,
  );

  const cancelTimeout = () => clearTimeout(timeoutId);

  return { controller, cancelTimeout };
};

/**
 * @param url - The URL to make the request to
 * @param options - The options to pass to the fetch request
 * @param timeout - The timeout in milliseconds that will be used to abort the request
 * @returns {Promise} - Returns a promise that resolves with the response or rejects with an error
 */
export const makeRequest = async <T, E>(
  url: string,
  options?: Options,
  timeout = 15000,
): Promise<Result<ApiResponseType<T>, E>> => {
  const { controller, cancelTimeout } = createAbortController(timeout);

  const fetchOptions = {
    ...options,
    headers: options?.headers
      ? options.headers
      : new Headers([["Content-Type", "application/json"]]),
    signal: controller.signal,
  };

  try {
    const res = await fetch(url, fetchOptions);
    if (!res.ok) return Error<E>(res.status as E);

    const data = (await res.json()) as T;
    return Ok<ApiResponseType<T>>({
      data,
      status: res.status,
      // headers: res.headers,
    });
  } catch (error) {
    return Error<E>(error as E);
  } finally {
    cancelTimeout();
  }
};
