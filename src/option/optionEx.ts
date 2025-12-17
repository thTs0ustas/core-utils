import { fromOption } from "./fromOption";
import { None } from "./none";
import { Some } from "./some";
import { Option } from "./type";

const getElement = <T>(arr: T[], index: number): Option<T> => {
  if (index < 0 || index >= arr.length || arr[index] === undefined) {
    return None;
  }
  return Some<T>(arr[index]);
};

const getKey = <T extends object, K extends keyof T>(
  obj: T,
  key: K,
): Option<T[K]> => {
  if (!(key in obj) || obj[key] === undefined) {
    return None;
  }
  return Some<T[K]>(obj[key]);
};

// Example usages:
fromOption(getElement([10, 20, 30], 1), {
  onNone: () => console.log("No element"),
  onSome: console.log,
});

fromOption(getKey({ a: 1, b: 2 }, "v" as "a"), {
  onNone: () => console.log("No value"),
  onSome: console.log,
});
