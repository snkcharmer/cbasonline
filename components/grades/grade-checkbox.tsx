import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";

type CheckboxProp = {
  locked: number;
  gradeId: number;
};
const GradeCheckbox = ({ locked, gradeId }: CheckboxProp) => {
  const [lockStates, setLockStates] = useState<boolean>(locked === 1);
  const isLocked = lockStates ?? locked === 1;

  const handleLockStateChange = (locked: boolean) => {
    setLockStates(!locked);
  };

  console.log(lockStates);
  return (
    <Checkbox
      checked={isLocked}
      onCheckedChange={() => handleLockStateChange(isLocked)}
    ></Checkbox>
  );

  // const [lockStates, setLockStates] = useState<{ [key: string]: boolean }>({});
  // const isLocked = lockStates[gradeId] ?? locked === 1;

  // const handleLockStateChange = (id: number, locked: boolean) => {
  //   setLockStates((prev) => ({
  //     ...prev,
  //     [id]: !locked,
  //   }));
  // };

  // console.log(lockStates);
  // return (
  //   <Checkbox
  //     checked={isLocked}
  //     onCheckedChange={() => handleLockStateChange(gradeId, isLocked)}
  //   ></Checkbox>
  // );
};

export default GradeCheckbox;
