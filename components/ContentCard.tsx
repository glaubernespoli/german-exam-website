import axios from "axios";
import { SyntheticEvent, useState } from "react";
import useSWR from "swr";
import verbsRepo from "../helpers/verbs-repo";
import Case from "../types/case";
import ContentCardProps from "../types/contentCard";
import Result from "../types/result";
import Verb from "../types/verb";
import ButtonsContainer from "./container/ButtonsContainer";
import CasesContainer from "./container/CasesContainer";
import PrepositionsContainer from "./container/PrepositionsContainer";
import ResultContainer from "./container/ResultContainer";

const ContentCard = ({ prepositions, cases }: ContentCardProps) => {
  const address = `/api/verb`;
  const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);
  const { data: verb, error, mutate } = useSWR<Verb>(address, fetcher, { revalidateOnFocus: false });
  const [preposition, setPreposition] = useState<string>();
  const [xCase, setCase] = useState<Case>();

  const [result, setResult] = useState<Result>();

  if (error) <p>Loading failed...</p>;
  if (!verb) <h1>Loading...</h1>;

  const doSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    verbsRepo
      .validateVerb(verb, preposition, xCase)
      .then((result) => {
        setResult({
          resultMessage: result,
          correct: true,
        });
      })
      .catch((err) => {
        setResult({
          resultMessage: err.message,
          correct: false,
        });
      });
  };

  const resetHandler = (_event: SyntheticEvent) => {
    setResult(undefined);
    setCase(undefined);
    setPreposition(undefined);
    mutate();
  };

  const buttonDisabled: boolean = !xCase || !preposition;
  return (
    <div className="max-w-6xl px-3 pt-12 pb-24 mx-auto fsac4 md:px-1">
      <div className="ktq4">
        <form onSubmit={doSubmit}>
          <h2 className="pt-4 text-6xl font-bold text-center text-white capitalize">{verb?.verb}</h2>
          <PrepositionsContainer prepositionList={prepositions} setPreposition={setPreposition} />
          <CasesContainer caseList={cases} setCase={setCase} />
          {!result && <ButtonsContainer disabled={buttonDisabled} />}
          {result && <ResultContainer result={result} resetHandler={resetHandler} />}
        </form>
      </div>
    </div>
  );
};

export default ContentCard;
