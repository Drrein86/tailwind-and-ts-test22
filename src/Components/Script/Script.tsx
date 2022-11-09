import { useState } from "react";
import QuestionsFreg from "./Question";
import { Questions } from "../interfaces";
import "../../index.css";

function Script() {
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleClick = (e: any) => {
    console.log(e.target);
    if (e.target.name == "next" && questionNumber <= Questions.length - 1)
      setQuestionNumber((prev) => prev + 1);
    if (e.target.name == "prev" && questionNumber > 0)
      setQuestionNumber((prev) => prev - 1);
  };
  return (
    <div className="script">
      {
        <QuestionsFreg
          key={questionNumber}
          stage={Questions[questionNumber].stage}
          question={Questions[questionNumber].question}
          resType={Questions[questionNumber].resType}
        />
      }
      <div>
        <button name="next" onClick={handleClick}>
          {" "}
          {questionNumber <= Questions.length - 1 ? "המשך" : "סיום"}{" "}
        </button>
        {questionNumber != 0 && (
          <button name="prev" onClick={handleClick}>
            חזור
          </button>
        )}
      </div>
    </div>
  );
}
export default Script;
