"use server";

import { AdminLoginSchema } from "@/schemas";
import * as z from "zod";
import { signIn } from "@/auth";
import { DEFAULT_ADMIN_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof AdminLoginSchema>) => {
  const validatedFields = AdminLoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { username, password } = validatedFields.data;

  // console.log(validatedFields.data);

  try {
    await signIn("credentials", {
      username,
      password,
      role: "admin",
      redirectTo: DEFAULT_ADMIN_LOGIN_REDIRECT,
    });
    return { success: "Logged" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials! " };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
