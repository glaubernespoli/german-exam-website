import { ChangeEvent, Dispatch, SetStateAction } from "react";
import OptionsContainer from "./OptionsContainer";

type PrepositionsProps = {
  prepositionList: string[];
  preposition: string | undefined;
  setPreposition: Dispatch<SetStateAction<string | undefined>>;
};

const PrepositionsContainer = ({ prepositionList, preposition, setPreposition }: PrepositionsProps) => {
  const handler = (e: ChangeEvent<HTMLInputElement>) => setPreposition(e.target.value);
  return (
    <OptionsContainer
      data={prepositionList.map((value) => {
        return { id: value, text: value };
      })}
      group="prepositions"
      selected={preposition}
      handler={handler}
    />
  );
};
export default PrepositionsContainer;
