import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Questions } from "@/types";

interface QuestionProps {
  questions: Questions[];
}

const QuestionsWrapper = ({ questions }: QuestionProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );
  const [showSubmit, setShowSubmit] = useState(false);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(newAnswers);
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

  const handleSubmit = (): void => {
    alert("Exam submitted!"); // You can handle the submission logic here
  };

  useEffect(() => {
    if (currentQuestionIndex === questions.length - 1) {
      setShowSubmit(true);
    } else {
      setShowSubmit(false);
    }
  }, [currentQuestionIndex, questions.length]);

  return (
    <Card className="grid grid-cols-1 gap-4 p-6 h-[700px]">
      <div className="m-2 flex flex-col md:m-5">
        <div>
          <h2 className="mb-6 text-xl font-bold">
            {questions[currentQuestionIndex].item}
          </h2>
        </div>

        <div className="ml-5 mb-6 flex-grow space-y-2">
          <div>
            <label>
              <input
                type="radio"
                value="opt1"
                checked={answers[currentQuestionIndex] === "opt1"}
                onChange={handleAnswerChange}
              />
              {questions[currentQuestionIndex].opt1}
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="opt2"
                checked={answers[currentQuestionIndex] === "opt2"}
                onChange={handleAnswerChange}
              />
              {questions[currentQuestionIndex].opt2}
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="opt3"
                checked={answers[currentQuestionIndex] === "opt3"}
                onChange={handleAnswerChange}
              />
              {questions[currentQuestionIndex].opt3}
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="opt4"
                checked={answers[currentQuestionIndex] === "opt4"}
                onChange={handleAnswerChange}
              />
              {questions[currentQuestionIndex].opt4}
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
