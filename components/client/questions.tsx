import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { CorrectAnswer, Questions } from "@/types";
import Image from "next/image";
import { calculateScore } from "@/actions/grades";
// import QuestionOption from "./question-options";

interface QuestionProps {
  timeUp: boolean;
  questions: Questions[];
}

type Answer = {
  id: number;
  answer: string;
};

const QuestionsWrapper = ({ timeUp, questions }: QuestionProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(
    questions.map((question) => ({ id: question.id, answer: "" }))
  );

  const [showSubmit, setShowSubmit] = useState(false);
  const [banner, setBanner] = useState<string>();

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswer = e.target.value;
    setAnswers((prevAnswers) =>
      prevAnswers.map((answer) =>
        answer.id === questions[currentQuestionIndex].id
          ? { ...answer, answer: newAnswer }
          : answer
      )
    );
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowSubmit(false);
    }
  };

  useEffect(() => {
    if (timeUp == true) {
      calculateScore(answers);
    }
  }, [timeUp]);

  const handleSubmit = (): void => {
    calculateScore(answers);
    alert("Exam submitted!"); // You can handle the submission logic here
  };

  useEffect(() => {
    if (currentQuestionIndex === questions.length - 1) {
      setShowSubmit(true);
    } else {
      setShowSubmit(false);
    }

    setBanner(questions[currentQuestionIndex].banner);
  }, [currentQuestionIndex, questions.length]);

  const handleSample = () => {};

  return (
    <Card className="grid grid-cols-1 gap-4 p-6 min-h-[600px]">
      <div className="m-2 flex flex-col md:m-5">
        <div>
          <h2 className="mb-6 text-xl font-bold">
            {questions[currentQuestionIndex].item}
          </h2>
        </div>
        {banner && (
          <Image
            src={`http://localhost/cbas/images/questions/${questions[currentQuestionIndex].banner}`}
            alt=""
            width={300}
            height={300}
          />
        )}
        {/* {banner} */}

        <div className="ml-5 mb-6 flex-grow space-y-2">
          <div>
            <label>
              <input
                type="radio"
                value="opt1"
                checked={
                  answers.find(
                    (a) => a.id === questions[currentQuestionIndex].id
                  )?.answer === "opt1"
                }
                onChange={handleAnswerChange}
              />
              <span> {questions[currentQuestionIndex].opt1}</span>
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="opt2"
                checked={
                  answers.find(
                    (a) => a.id === questions[currentQuestionIndex].id
                  )?.answer === "opt2"
                }
                onChange={handleAnswerChange}
              />
              <span> {questions[currentQuestionIndex].opt2}</span>
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="opt3"
                checked={
                  answers.find(
                    (a) => a.id === questions[currentQuestionIndex].id
                  )?.answer === "opt3"
                }
                onChange={handleAnswerChange}
              />
              <span> {questions[currentQuestionIndex].opt3}</span>
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="opt4"
                checked={
                  answers.find(
                    (a) => a.id === questions[currentQuestionIndex].id
                  )?.answer === "opt4"
                }
                onChange={handleAnswerChange}
              />
              <span> {questions[currentQuestionIndex].opt4}</span>
            </label>
          </div>
        </div>

        <div className="block border p-2 text-center">
          <div className="grid grid-cols-3 gap-8 m-1">
            {currentQuestionIndex > 0 ? (
              <Button onClick={handlePrev}>Prev</Button>
            ) : (
              <span></span>
            )}
            {showSubmit ? (
              <Button onClick={handleSubmit}>Submit</Button>
            ) : (
              <span></span>
            )}
            {currentQuestionIndex < questions.length - 1 ? (
              <Button onClick={handleNext}>Next</Button>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default QuestionsWrapper;
