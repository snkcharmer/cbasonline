import { auth } from "@/auth";
import GradeWrapper from "@/components/grades/grade-wrapper";
import { getGrades } from "@/actions/grades";
import { getGradesByCode } from "@/data/grade";
import { TrainingRecord } from "@/types";

type paramsProps = {
  searchParams: {
    [key: string]: number | undefined;
  };
};

const GradesPage = async ({ searchParams }: paramsProps) => {
  // const session = await auth();
  const code = searchParams.code || null;
  const submodid = searchParams.submodid || null;
  const data = await getGradesByCode(Number(code), Number(submodid));
  // console.log(data);
  return (
    <div>
      <GradeWrapper data={JSON.parse(JSON.stringify(data))} />
    </div>
  );
};

export default GradesPage;
