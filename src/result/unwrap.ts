import { type Result } from "./types";

type MatchResultHandlers<T, E> = {
  ok: (value: T) => void;
  fail: (error: E) => void;
};

const unwrap = <T, E>(
  result: Result<T, E>,
  match: MatchResultHandlers<T, E>,
) => {
  if (result[1] == null) {
    return match.ok(result[0] as T);
  } else {
    return match.fail(result[1] as E);
  }
};

export { unwrap };
