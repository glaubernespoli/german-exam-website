import { ChangeEvent, Dispatch, SetStateAction } from "react";
import OptionsContainer from "./OptionsContainer";

type PrepositionsProps = {
  prepositionList: string[];
  setPreposition: Dispatch<SetStateAction<string | undefined>>;
};

const PrepositionsContainer = ({ prepositionList, setPreposition }: PrepositionsProps) => {
  const handler = (e: ChangeEvent<HTMLInputElement>) => setPreposition(e.target.value);
  return (
    <OptionsContainer
      data={prepositionList.map((value) => {
        return { id: value, text: value };
      })}
      group="prepositions"
      handler={handler}
    />
  );
};
export default PrepositionsContainer;
