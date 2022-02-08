import { ChangeEvent } from "react";
import Answer from "../../types/answer";
import OptionsContainer from "./OptionsContainer";

type PrepositionsProps = {
  prepositionList: string[];
  answer: Answer;
  handleAnswer: Function;
  index: 0 | 1;
};

const PrepositionsContainer = ({ prepositionList, answer, handleAnswer, index }: PrepositionsProps) => {
  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    handleAnswer({
      ...answer,
      preposition: e.target.value,
    });
  };
  return (
    <OptionsContainer
      data={prepositionList.map((value) => {
        return { id: value, text: value };
      })}
      group="prepositions"
      index={index}
      selected={answer.preposition}
      handler={handler}
    />
  );
};
export default PrepositionsContainer;
