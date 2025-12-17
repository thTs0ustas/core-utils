/*
 * A Result type that can either be a success with a value of type T
 * or an error with a value of type E.
 *
 * @template T - The type of the success value.
 * @template E - The type of the error value.
 */

type Ok<T> = [T, undefined];
type Fail<E> = [undefined, E];
export type Result<T, E> = Ok<T> | Fail<E>;

// type OkPattern<T, O> = (value: T) => O;
// type FailPattern<E, O> = (error: E) => O;
// export interface IResultPattern<T, E, O> {
//   ok: OkPattern<T, O>;
//   fail: FailPattern<E, O>;
// }

// export interface IResult<T, E> {
//   unwrap?: () => T;
//   unwrapFail?: () => E;
//   unwrapOr?: (defaultValue: T) => T;

//   map<U>(fn: (value: T) => U): IResult<U, E>;
//   flatMap<U>(fn: (value: T) => IResult<U, E>): IResult<U, E>;
//   match<O>(pattern: IResultPattern<T, E, O>): O;
// }

// export const ok = <T, E = never>(value: T): IResult<T, E> =>
//   okResultMonad<T, E>(value);
// export const fail = <E = unknown, T = never>(error: E): IResult<T, E> =>
//   failResultMonad<T, E>(error);

// const okResultMonad = <T, E = never>(value: T): IResult<T, E> => ({
//   // unwrap: () => value,
//   map: <U>(fn: (args: T) => U) => okResultMonad<U, E>(fn(value)),
//   flatMap: <U>(fn: (value: T) => IResult<U, E>) => fn(value),
//   match: <O>(pattern: IResultPattern<T, E, O>) => pattern.ok(value),
// });

// const failResultMonad = <T = never, E = unknown>(error: E): IResult<T, E> => ({
//   unwrapFail: () => error,
//   // unwrapOr: (defaultValue: T): T => defaultValue,
//   map: <U>() => failResultMonad<U, E>(error),
//   flatMap: <U>() => failResultMonad<U, E>(error),
//   match: <O>(pattern: IResultPattern<T, E, O>) => pattern.fail(error),
// });
