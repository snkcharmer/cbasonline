"use client";

import React from "react";
import GradeTable from "@/components/grades/grade-table";
import SearchGrade from "@/components/grades/search-grade";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { ScrollAreaDemo } from "../ScrollAreaDemo";

type gradeProp = {
  data: any;
};

const GradeWrapper = ({ data }: gradeProp) => {
  return (
    <ScrollArea className="h-full">
      <div className="h-dvh flex-1 space-y-4 p-5">
        <SearchGrade />
        <GradeTable data={data} />
      </div>
    </ScrollArea>
  );
};

export default GradeWrapper;
