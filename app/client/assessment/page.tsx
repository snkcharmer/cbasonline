import { auth, signOut } from "@/auth";
import { getTrainees } from "@/actions/client";
import React from "react";
import { AssessmentWrapper } from "@/components/client/assessment-wrapper";

const AssessmentPage = async () => {
  const session = await auth();
  const trainee = await getTrainees(Number(session?.user.name));
  console.log(trainee);
  return (
    <>
      <div className="flex flex-col w-2/3 md:w-1/3">
        <AssessmentWrapper trainee={trainee}></AssessmentWrapper>
        <div className="w-1/3">
          Assessment Page {JSON.stringify(session)}
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/client" });
            }}
          >
            <button type="submit">Sign Out</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AssessmentPage;
