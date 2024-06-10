import * as z from "zod";

export const ClientLoginSchema = z.object({
  trid: z.string().min(9, {
    message: "Trainee ID is Invalid",
  }),
  code: z.string().min(8, {
    message: "Schedule Code is Invalid",
  }),
});

export const AdminLoginSchema = z.object({
  username: z.string().min(3, {
    message: "Username is Invalid",
  }),
  password: z.string().min(5, {
    message: "Password is Invalid",
  }),
});
