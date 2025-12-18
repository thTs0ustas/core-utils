import { Monad } from "./type";

function exists<T>(val: T): val is Exclude<T, null | undefined> {
  return val !== undefined && val !== null;
}
export interface OptionPattern<T, O> {
  Some: (val: T) => O;
  None: () => O;
}

type OptionFunction<T, U> = (value: T) => Option<U>;

export class Option<T> implements Monad<T> {
  private constructor(private readonly value: T) {}

  static apply<T>(value: T): Option<T> {
    if (exists(value)) {
      return new Option<T>(value);
    } else {
      return new Option<T>(null as T);
    }
  }

  static none<T>(): Option<T> {
    return Option.apply<T>(null as T);
  }
  static some<T>(value: T): Option<T> {
    return Option.apply<T>(value);
  }

  chain<U>(fn: (value: T) => Option<U>) {
    if (!exists(this.value)) {
      return Option.none<U>();
    }
    return fn(this.value as T) as Option<U>;
  }
  map<U>(fn: (value: T) => U): Option<U> {
    if (!exists(this.value)) {
      return Option.none();
    }
    return Option.some(fn(this.value));
  }

  unwrap() {
    return this.value;
  }
  unwrap_or<P>(orValue: P) {
    if (!exists(this.value)) {
      return orValue;
    }

    return this.value;
  }

  match<O>({ Some, None }: OptionPattern<T, O>) {
    if (!exists(this.value)) {
      return None();
    }

    return Some(this.value);
  }
}

const arr = ["a", "b", "c"];
const obj = { a: 1 };
const getElement =
  (index: number) =>
  <T>(arr: T[]) =>
    Option.apply(arr[index] as T);

const getKey = <T extends object, K extends keyof T>(
  obj: T,
  key: K,
): Option<T[K]> => Option.apply(obj[key]);

const res = Option.apply(arr)
  .chain(getElement(0))
  .chain((el) => getKey(obj, el as keyof typeof obj))
  .map((v) => v * 10)
  .map((v) => `Value is: ${v}`);

// Just unwrap the value
console.log(res.unwrap());
console.log(res.unwrap_or("No Value"));

// Match the options and handle it individually
res.match({
  None: () => console.log("No Value for match"),
  Some: (v) => console.log(v),
});
