import z from "zod";
import { schemaValidationError } from "./errors/schemaValidationError";

const schema = z.object({
  BASE_URL: z.string().url(),
});

const res = schema.safeParse(process.env);

if (!res.success) {
  console.error(schemaValidationError(res.error).serializeErrors());
  process.exit(1);
}

export const BASE_URL = res.data.BASE_URL;
