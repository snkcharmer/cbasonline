"use server";

import { Assessment, TExamCode } from "@/types";

export const getQuestions = async ({
  code,
  submodid = 0,
}: TExamCode): Promise<Assessment> => {
  const res = await fetch(
    `http://localhost/cbas/api/questions/?code=${code}&submodid=${submodid}}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};
