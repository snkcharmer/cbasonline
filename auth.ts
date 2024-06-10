import NextAuth, { DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { db } from "./lib/db";

declare module "next-auth" {
  interface Session {
    user: {
      /** The user's postal address. */
      address: string;
      role: string;
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async jwt({ token, user }) {
      if (!token.sub) return token;

      // const existingUser = await getUserById(token.sub);

      // if (!existingUser) return token;

      // token.role = user.role;
      // token.customField = "test";

      return token;
    },
    async session({ token, session }) {
      // console.log({ sessionToken: token, session });

      // if (session.user) session.user.customField = token.customField;
      // return session;
      // console.log({ sessionToken: token });
      // if (token.sub && session.user) {
      //   session.user.role = token.role;
      // }
      // console.log(session);
      const role = token.email?.split(":");
      if (role != undefined) {
        session.user.role = role[1];
        session.user.email = role[0];
      }

      return session;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
  secret: process.env.NEXTAUTH_SECRET,
});
