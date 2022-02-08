import { ChangeEvent } from "react";
import verbsRepo from "../../helpers/verbs-repo";
import Answer from "../../types/answer";
import Case from "../../types/case";
import OptionsContainer from "./OptionsContainer";

type CasesProps = {
  caseList: Case[];
  answer: Answer;
  handleAnswer: Function;
  index: 0 | 1;
};

const CasesContainer = ({ caseList, answer, handleAnswer, index }: CasesProps) => {
  const handler = async (e: ChangeEvent<HTMLInputElement>) => {
    const xCase = await verbsRepo.getCaseFrom(e.target.value);
    handleAnswer({
      ...answer,
      case: xCase,
    });
  };
  return (
    <OptionsContainer
      data={caseList.map((value) => {
        return { id: value.symbol, text: value.name };
      })}
      group="cases"
      index={index}
      selected={answer.case?.symbol}
      handler={handler}
    />
  );
};
export default CasesContainer;
