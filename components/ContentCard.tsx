import axios from "axios";
import useSWR from "swr";
import ContentCardProps from "../types/contentCard";
import Verb from "../types/verb";
import CasesContainer from "./container/CasesContainer";
import PrepositionsContainer from "./container/PrepositionsContainer";

const ContentCard = ({ prepositions, cases }: ContentCardProps) => {
  const address = `/api/verb`;
  const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);
  const { data: verb, error } = useSWR<Verb>(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!verb) <h1>Loading...</h1>;
  return (
    <div className="max-w-6xl px-3 pt-12 pb-24 mx-auto fsac4 md:px-1">
      <div className="ktq4">
        <h2 className="pt-4 text-6xl font-bold text-center text-white capitalize">{verb?.verb}</h2>
        <PrepositionsContainer prepositions={prepositions} />
        <CasesContainer cases={cases} />
      </div>
    </div>
  );
};

export default ContentCard;
