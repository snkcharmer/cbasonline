"use client";
import React, { useState } from "react";

import { Button } from "../ui/button";
import { Trainee } from "@/types";
import Timer from "./timer";
import Welcome from "./welcome-page";
import QuestionsWrapper from "./questions";

export const AssessmentWrapper = ({ trainee }: { trainee: Trainee }) => {
  const [examStarted, setExamStarted] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  const startExam = () => {
    setExamStarted(true);
  };

  const handleTimeUp = () => {
    setTimeUp(true);
    alert("Time is up!");
  };

  return (
    <>
      {examStarted === false ? (
        <Welcome trainee={trainee} />
      ) : (
        <QuestionsWrapper />
      )}

      <Timer start={examStarted} duration={300} onTimeUp={handleTimeUp} />
      <Button size="lg" onClick={startExam}>
        Start
      </Button>
    </>
  );
};
