import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { AdminLoginSchema, ClientLoginSchema } from "./schemas";
import { getClientLogin } from "./data/client";
import { getAdminLogin } from "./data/admin";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials) {
        // console.log(credentials);
        if (credentials.role == "client") {
          const validatedFields = ClientLoginSchema.safeParse(credentials);

          if (validatedFields.success) {
            const { trid, code } = validatedFields.data;

            const user = await getClientLogin(trid, code);
            if (!user) {
              throw new Error("User not found.");
            } else {
              return {
                name: String(user.trid),
                email: String(user.code) + ":" + "qwejnmhcjnrXaseqw",
                role: "client",
              };
            }
          }
        }

        if (credentials.role == "admin") {
          const validatedFields = AdminLoginSchema.safeParse(credentials);

          if (validatedFields.success) {
            const { username, password } = validatedFields.data;

            const user = await getAdminLogin(username);
            if (user !== null) {
              if (user.name !== null && user.password !== null) {
                const passwordsMatch = await bcrypt.compare(
                  password,
                  user.password
                );

                if (!passwordsMatch) {
                  return null;
                } else {
                  return {
                    name: username,
                    email: user.name + ":" + "lkazmxcnqweSasjqw",
                    role: "admin",
                  };
                }
              }
            } else {
              return null;
            }
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
