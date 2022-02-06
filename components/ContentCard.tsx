import ContentCardProps from "../types/contentCard";
import CasesContainer from "./container/CasesContainer";
import PrepositionsContainer from "./container/PrepositionsContainer";

const ContentCard = ({ verb, prepositions, cases }: ContentCardProps) => {
  return (
    <div className="max-w-6xl px-3 pt-12 pb-24 mx-auto fsac4 md:px-1">
      <div className="ktq4">
        <h2 className="pt-4 text-6xl font-bold text-center text-white">{verb.verb}</h2>
        <PrepositionsContainer prepositions={prepositions} />
        <CasesContainer cases={cases} />
      </div>
    </div>
  );
};

export default ContentCard;
