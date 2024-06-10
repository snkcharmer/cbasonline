import { db } from "@/lib/db";

export const getClientLogin = async (trid: string, code: string) => {
  const tridInt = Number(trid);
  const codeInt = Number(code);

  try {
    const user = await db.grade.findFirst({
      where: { trid: tridInt, code: codeInt },
    });
    return user;
  } catch (error) {
    return null;
  }
};
