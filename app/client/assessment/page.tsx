import { auth, signOut } from "@/auth";
import { getTrainees } from "@/actions/client";
import React from "react";
import { AssessmentWrapper } from "@/components/client/assessment-wrapper";
import { getQuestions } from "@/actions/question";
import { ScrollArea } from "@/components/ui/scroll-area";

type exam_code = {
  code: number;
  submodid: number;
};

const AssessmentPage = async () => {
  const session = await auth();
  const trainee = await getTrainees(Number(session?.user.name));

  const creds = session?.user.email?.split(":");
  let exam_code = {
    code: 0,
    submodid: 0,
  };

  if (creds != undefined) {
    exam_code = {
      code: Number(creds[0]),
      submodid: Number.isNaN(Number(creds[1])) ? 0 : Number(creds[1]),
    };
  }

  // console.log(exam_code);
  const assessment = await getQuestions(exam_code);

  // console.log(questions);
  return (
    <>
      <ScrollArea>
        <AssessmentWrapper
          trainee={trainee}
          assessment={assessment}
        ></AssessmentWrapper>
      </ScrollArea>

      <div className="w-1/3">
        {/* Assessment Page {JSON.stringify(session)} */}
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/client" });
          }}
        >
          <button type="submit">Sign Out</button>
        </form>
      </div>
    </>
  );
};

export default AssessmentPage;
