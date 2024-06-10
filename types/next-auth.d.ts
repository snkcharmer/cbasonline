import { User as PrismaUser, UserRole } from "@prisma/client";
import NextAuth, { DefaultSession, User } from "next-auth";
import { JWT } from "next-auth/jwt";

type UserWithoutPassword = Omit<PrismaUser, "password">;

declare module "next-auth" {
  interface Session {
    user: PrismaUser & DefaultSession["user"];
  }
  interface User extends UserWithoutPassword {}
}

declare module "next-auth/jwt" {
  interface JWT {
    user: PrismaUser;
  }
}
