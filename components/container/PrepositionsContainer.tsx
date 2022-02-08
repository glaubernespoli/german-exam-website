import { ChangeEvent } from "react";
import Answer from "../../types/answer";
import OptionsContainer from "./OptionsContainer";

type PrepositionsProps = {
  prepositionList: string[];
  answer: Answer;
  handleAnswer: Function;
};

const PrepositionsContainer = ({ prepositionList, answer, handleAnswer }: PrepositionsProps) => {
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
      selected={answer.preposition}
      handler={handler}
    />
  );
};
export default PrepositionsContainer;
