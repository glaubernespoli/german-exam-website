import Case from "../../types/case";
import OptionsContainer from "./OptionsContainer";

type CasesProps = {
  cases: Case[];
};

const CasesContainer = ({ cases }: CasesProps) => {
  return (
    <OptionsContainer
      data={cases.map((value) => {
        return { id: value.symbol, text: value.name };
      })}
      group="cases"
    />
  );
};
export default CasesContainer;
