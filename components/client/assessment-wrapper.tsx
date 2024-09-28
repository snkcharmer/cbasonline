"use client";
import React, { useEffect, useState } from "react";

import { Button } from "../ui/button";
import { Assessment, Trainee } from "@/types";
import Timer from "./timer";
import Welcome from "./welcome-page";
import QuestionsWrapper from "./questions";

export const AssessmentWrapper = ({
  trainee,
  assessment,
}: {
  trainee: Trainee | undefined;
  assessment: Assessment;
}) => {
  const [examStarted, setExamStarted] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  const startExam = () => {
    setExamStarted(true);
  };

  const handleTimeUp = () => {
    setTimeUp(true);
    alert("Time is up!");
  };
  const { module, questions } = assessment;
  return (
    <>
      <Timer
        start={examStarted}
        duration={module.duration * 60}
        onTimeUp={handleTimeUp}
      />
      {examStarted === false ? (
        <Welcome trainee={trainee} />
      ) : (
        <QuestionsWrapper timeUp={timeUp} questions={questions} />
      )}

      {examStarted === false ? (
        <Button size="lg" onClick={startExam}>
          Start
        </Button>
      ) : (
        ""
      )}
    </>
  );
};
