import * as Joi from "joi";
import { DatabaseSchema } from "./database.schema";


export const validationSchema = Joi.object({
    ...DatabaseSchema
});