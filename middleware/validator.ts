import { Validator } from "jsonschema";
import Schema from "./bookMagSchema";

var validator = new Validator();

export const bookValidator = (schema: any) =>
  validator.validate(schema, Schema);
