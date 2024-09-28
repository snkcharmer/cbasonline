// "use client"

// import React, { useState } from "react";

// type QuestionOptionProps = {
//     currentOption: string,
//     value: string
//     currentComparedOption: string
//     handleAnswerChange: boolean
// }

// const QuestionOption = ({currentOption, value, currentComparedOption, handleAnswerChange}: QuestionOptionProps) => {
//     const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const newAnswers = [...answers];
//         newAnswers[currentQuestionIndex] = e.target.value;
//         setAnswers(newAnswers);
//       };

//       const [answers, setAnswers] = useState<string>()
//   return <div className="align-middle">
//   <label>
//     <input
//       type="radio"
//       value="opt1"
//       checked={currentOption === currentComparedOption}
//       onChange={handleAnswerChange}
//     />
//     <span> {questions[currentQuestionIndex].opt1}</span>
//   </label>
// </div>;
// };

// export default QuestionOption;
