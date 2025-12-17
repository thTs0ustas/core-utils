import { Option } from "./type";

export const None: Option<never> = { _tag: "None" };
