import { db } from "@/lib/db";

export const getGradesByCode = async (
  code: number | undefined,
  submodid: number | undefined
) => {
  // console.log(code);
  // console.log(submodid);
  try {
    const record = await db.grade.findMany({
      where: { code: code, submodid: submodid },
      include: {
        trainee: true,
      },
    });
    return record;
  } catch (error) {
    return error;
  }
};
