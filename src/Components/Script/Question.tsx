import { Question } from "../interfaces";
import "../../index.css";
const inputType = {
  boolean: <input type={"radio"} />,

  full: <input type={"text"}></input>,

  checkBox: <input type={"checkbox"} />,
};
function QuestionsFreg(props: Question) {
  return (
    <div className="question">
      <div>
        <h2>שלב {props.stage}</h2>
        <p> {props.question}</p>
        {inputType[props.resType]}
      </div>
    </div>
  );
}

export default QuestionsFreg;
