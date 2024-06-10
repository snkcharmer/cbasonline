import { db } from "@/lib/db";

export const getAdminLogin = async (username: string) => {
  try {
    const user = await db.login.findFirst({
      where: { username },
    });
    return user;
  } catch (error) {
    return null;
  }
};
