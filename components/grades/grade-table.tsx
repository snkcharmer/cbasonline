"use client";

import { TrainingRecord } from "@/types";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import GradeCheckbox from "./grade-checkbox";
import { ScrollArea } from "../ui/scroll-area";

interface GradeWrapperProps {
  data: TrainingRecord[];
}

const GradeTable = ({ data }: GradeWrapperProps) => {
  // const [lockStates, setLockStates] = useState<{ [key: string]: boolean }>({});

  // const handleLockStateChange = (id: number, locked: boolean) => {
  //   setLockStates((prev) => ({
  //     ...prev,
  //     [id]: !locked,
  //   }));
  // };

  // console.log(lockStates);

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="w-full">
        <Table className="relative mt-2 w-full">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Trainee Name</TableHead>
              <TableHead>Final Grade</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Modified At</TableHead>
              <TableHead>Locked</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((record) => {
              // const isLocked = lockStates[record.id] ?? record.locked === 1;
              return (
                <TableRow key={record.id}>
                  <TableCell>{record.id}</TableCell>
                  <TableCell>{record.code}</TableCell>
                  <TableCell>{`${record.trainee.firstname} ${record.trainee.lastname}`}</TableCell>
                  <TableCell>{record.fgrade}</TableCell>
                  <TableCell>
                    {new Date(record.created_at).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {new Date(record.modified_at).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {/* <Checkbox
                    checked={isLocked}
                    onCheckedChange={() =>
                      handleLockStateChange(record.id, isLocked)
                    }
                  ></Checkbox> */}
                    <GradeCheckbox locked={record.locked} gradeId={record.id} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {/* <div>Grades Table: {JSON.stringify(data)}</div> */}
      </div>
    </ScrollArea>
  );
};

export default GradeTable;
