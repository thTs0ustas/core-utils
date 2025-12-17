import { Option } from "./type";

export const Some = <T>(value: T): Option<T> => ({
  _tag: "Some",
  value,
});
