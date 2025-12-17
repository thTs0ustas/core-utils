import { makeRequest } from "../api/makeRequest";
import { internalServerError } from "../errors/internalServerError";
import z from "zod";
import { schemaValidationError } from "../errors/schemaValidationError";
import { BASE_URL } from "../config";
import { unwrap } from "./unwrap";

// A too detailed schema for demonstration purposes
const pokeSchema = z.object({
  abilities: z.array(z.object({})),
  base_experience: z.number(),
  forms: z.array(z.object({})),
  game_indices: z.array(z.object({})),
  height: z.number(),
  held_items: z.array(z.object({})),
  id: z.number(),
  is_default: z.boolean(),
  location_area_encounters: z.string(),
});

type PokeType = z.infer<typeof pokeSchema>;

const resultExample = async () =>
  unwrap(await makeRequest<PokeType, Error>(`${BASE_URL}ditto`), {
    ok: (ok) => {
      const parseResult = pokeSchema.safeParse(ok.data);

      if (!parseResult.success) {
        return schemaValidationError(parseResult.error).serializeErrors();
      }
      return {
        status: ok.status,
        data: ok.data,
      };
    },
    fail: (error) => {
      if (error) {
        return internalServerError(
          "500",
          "Failed to fetch data",
        ).serializeErrors();
      }
      return [undefined, error] as const;
    },
  });

// or
//
// const resultExample = async () => {
//   const [ok, error] = await makeRequest<PokeType, Error>(`${BASE_URL}ditto`);

//   if (error) {
//     return internalServerError("500", "Failed to fetch data").serializeErrors();
//   }

//   const parseResult = pokeSchema.safeParse(ok.data);

//   if (!parseResult.success) {
//     return schemaValidationError(parseResult.error).serializeErrors();
//   }

//   return {
//     status: ok.status,
//     data: ok.data,
//   };
// };

resultExample().then(console.log);
