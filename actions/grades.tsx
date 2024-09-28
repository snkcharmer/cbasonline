"use server";

import { getGradesByCode } from "@/data/grade";
import { revalidatePath } from "next/cache";
import React from "react";

export const getGrades = async (code: string | null, trid: string | null) => {
  if (code == null) {
    // console.log(code);
    return;
  } else {
    const codeSubmod = code.split("-");

    let submodid: number = 0;
    let schedCode: number = Number(codeSubmod[0]);

    if (codeSubmod[1] && Number(codeSubmod[1]) > 0) {
      submodid = Number(codeSubmod[1]);
    }

    const grades = getGradesByCode(schedCode, submodid);
    // console.log(code);
    return grades;
  }
};

export const searchCode = (search: string = "") => {
  let code = 0;
  let submodid = 0;
  // console.log("Entered Key: ", scheduleCode);
  const [var1, var2] = search.split("-");
  code = parseInt(var1, 10);
  submodid = var2 === undefined ? 0 : parseInt(var2, 10);
  // revalidatePath("/admin/grades");
};

export const calculateScore = (answers: any) => {
  console.log(answers);
};
