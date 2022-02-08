import { Dispatch, SetStateAction } from "react";
import Answer from "../../types/answer";
import Case from "../../types/case";
import CasesContainer from "./CasesContainer";
import PrepositionsContainer from "./PrepositionsContainer";

type AnswerContainerProps = {
  answers: Answer[];
  prepositions: string[];
  cases: Case[];
  handleAnswer: Dispatch<SetStateAction<Answer[]>>;
  index: 0 | 1;
};

const AnswerContainer = ({ answers, handleAnswer, prepositions, cases, index }: AnswerContainerProps) => {
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
      />
      <CasesContainer caseList={cases} answer={answers[index]} handleAnswer={handleUpdateSingleValue} />
    </>
  );
};

export default AnswerContainer;
