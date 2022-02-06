import OptionsContainer from "./OptionsContainer";

type PrepositionsProps = {
  prepositions: string[];
};

const PrepositionsContainer = ({ prepositions }: PrepositionsProps) => {
  return (
    <OptionsContainer
      data={prepositions.map((value) => {
        return { id: value, text: value };
      })}
      group="prepositions"
    />
  );
};
export default PrepositionsContainer;
