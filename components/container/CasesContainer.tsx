import { ChangeEvent, Dispatch, SetStateAction } from "react";
import verbsRepo from "../../helpers/verbs-repo";
import Case from "../../types/case";
import OptionsContainer from "./OptionsContainer";

type CasesProps = {
  caseList: Case[];
  xCase: Case | undefined;
  setCase: Dispatch<SetStateAction<Case | undefined>>;
};

const CasesContainer = ({ caseList, xCase, setCase }: CasesProps) => {
  const handler = async (e: ChangeEvent<HTMLInputElement>) => setCase(await verbsRepo.getCaseFrom(e.target.value));
  return (
    <OptionsContainer
      data={caseList.map((value) => {
        return { id: value.symbol, text: value.name };
      })}
      group="cases"
      selected={xCase?.symbol}
      handler={handler}
    />
  );
};
export default CasesContainer;
