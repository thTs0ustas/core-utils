import { Option } from "./type";

type MatchOptionHandlers<T> = {
  onSome: (value: T) => void;
  onNone: () => void;
};

export const fromOption = <T>(
  option: Option<T>,
  handlers: MatchOptionHandlers<T>,
) => {
  switch (option._tag) {
    case "Some":
      return handlers.onSome(option.value);
    case "None":
      return handlers.onNone();
  }
};
