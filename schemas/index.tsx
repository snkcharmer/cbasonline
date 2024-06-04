import * as z from "zod";

export const ClientLoginSchema = z.object({
  trid: z.number().min(10, {
    message: "Trainee ID is Required",
  }),
  code: z.number().min(8, {
    message: "Schedule Code is required",
  }),
});
