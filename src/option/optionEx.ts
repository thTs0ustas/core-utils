import { unwrap } from "./unwrap";
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
//
// Simple case with an existing element

const output1 = getElement([10, 20, 30], 1); // Option<number>
const output2 = getKey({ a: "1", b: "2" }, "a"); // Option<string>

// A way of handling non-existing element
//
unwrap(output1, {
  onNone: () => console.log("No element"),
  onSome: console.log,
});

unwrap(output2, {
  onNone: () => console.log("No value"),
  onSome: console.log,
});
