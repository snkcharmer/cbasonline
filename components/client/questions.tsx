import React, { useState } from "react";

const QuestionsWrapper = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["a) Berlin", "b) Paris", "c) Madrid"],
      answer: "b",
    },
    {
      question: "What is 2 + 2?",
      choices: ["a) 3", "b) 4", "c) 5"],
      answer: "b",
    },
    {
      question: "What is the capital of Japan?",
      choices: ["a) Tokyo", "b) Seoul", "c) Beijing"],
      answer: "a",
    },
    {
      question: "What is the square root of 16?",
      choices: ["a) 2", "b) 3", "c) 4"],
      answer: "c",
    },
    {
      question: "What is the chemical symbol for water?",
      choices: ["a) O2", "b) CO2", "c) H2O"],
      answer: "c",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );

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
    }
  };

  const handleSubmit = (): void => {
    alert("Exam submitted!"); // You can handle the submission logic here
  };

  return (
    <div>
      <div>
        <h2>{questions[currentQuestionIndex].question}</h2>
        {questions[currentQuestionIndex].choices.map((choice, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={choice.charAt(0)}
                checked={answers[currentQuestionIndex] === choice.charAt(0)}
                onChange={handleAnswerChange}
              />
              {choice}
            </label>
          </div>
        ))}
        {currentQuestionIndex > 0 ? (
          <button onClick={handlePrev}>Prev</button>
        ) : (
          ""
        )}
        {currentQuestionIndex < questions.length - 1 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default QuestionsWrapper;
