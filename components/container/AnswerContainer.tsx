import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import Answer from "../../types/answer";
import Case from "../../types/case";
import CasesContainer from "./CasesContainer";
import PrepositionsContainer from "./PrepositionsContainer";
import RemoveButtonContainer from "./RemoveButtonContainer";

type AnswerContainerProps = {
  answers: Answer[];
  prepositions: string[];
  cases: Case[];
  handleAnswer: Dispatch<SetStateAction<Answer[]>>;
  index: 0 | 1;
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
};

const AnswerContainer = ({ answers, handleAnswer, prepositions, cases, index, clickHandler }: AnswerContainerProps) => {
  const handleUpdateSingleValue = (answer: Answer) => {
    handleAnswer((prevState) => {
      const newState = Array.from(prevState);
      newState[index] = answer;

      return newState;
    });
  };

  return (
    <>
      <PrepositionsContainer
        prepositionList={prepositions}
        answer={answers[index]}
        handleAnswer={handleUpdateSingleValue}
        index={index}
      />
      <CasesContainer caseList={cases} answer={answers[index]} handleAnswer={handleUpdateSingleValue} index={index} />
      {index === 1 && clickHandler && <RemoveButtonContainer clickHandler={clickHandler} />}
    </>
  );
};

export default AnswerContainer;
