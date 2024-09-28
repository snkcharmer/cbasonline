"use server";

import { getClientLogin } from "@/data/client";
import { ClientLoginSchema } from "@/schemas";
import * as z from "zod";
import { signIn } from "@/auth";
import { DEFAULT_CLIENT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { ApiTrainee, Trainee } from "@/types";

export const login = async (values: z.infer<typeof ClientLoginSchema>) => {
  const validatedFields = ClientLoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { code, trid } = validatedFields.data;

  //   const existingUser = await getClientLogin(trid, code);
  //   console.log(existingUser);
  //   if (!existingUser || !existingUser.trid) {
  //     return { error: "Please contact administrator." };
  //   } else {

  try {
    await signIn("credentials", {
      trid,
      code,
      role: "client",
      redirectTo: DEFAULT_CLIENT_LOGIN_REDIRECT,
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

export const getTrainees = async (
  trid: number
): Promise<Trainee | undefined> => {
  try {
    const res = await fetch(`http://localhost/cbas/api/trainee/?trid=${trid}}`);
    // console.log(trid);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
