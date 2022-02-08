import axios from "axios";
import { SyntheticEvent, useState } from "react";
import useSWR from "swr";
import verbsRepo from "../helpers/verbs-repo";
import Answer from "../types/answer";
import ContentCardProps from "../types/contentCard";
import Result from "../types/result";
import Verb from "../types/verb";
import AddButtonContainer from "./container/AddButtonContainer";
import AnswerContainer from "./container/AnswerContainer";
import ButtonsContainer from "./container/ButtonsContainer";
import ResultContainer from "./container/ResultContainer";

const ContentCard = ({ prepositions, cases }: ContentCardProps) => {
  const address = `/api/verb`;
  const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);
  const { data: verb, error, mutate } = useSWR<Verb>(address, fetcher, { revalidateOnFocus: false });

  const initAnswers = () => {
    const answers: Answer[] = [];
    answers.push({
      case: undefined,
      preposition: undefined,
    });
    return answers;
  };

  const [answers, setAnswers] = useState<Answer[]>(initAnswers());

  const [result, setResult] = useState<Result>();

  const [doubleCase, setDoubleCase] = useState(false);

  if (error) <p>Loading failed...</p>;
  if (!verb) <h1>Loading...</h1>;

  const doSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    verbsRepo
      .validateVerb(verb, answers)
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
    setAnswers(initAnswers());
    setDoubleCase(false);
    mutate();
  };

  const newAnswerRowHandler = (_event: SyntheticEvent) => {
    if (!doubleCase) {
      setAnswers((prevState) => {
        const curr = Array.from(prevState);
        curr.push(...initAnswers());
        return curr;
      });
    } else {
      setAnswers((prevState) => {
        const curr = Array.from(prevState);
        curr.pop();
        return curr;
      });
    }
    setDoubleCase((prevState) => !prevState);
  };

  const buttonDisabled: boolean = !answers.every((answer) => answer.case && answer.preposition);
  return (
    <div className="max-w-6xl px-3 pt-12 pb-24 mx-auto fsac4 md:px-1">
      <div className="ktq4">
        <form onSubmit={doSubmit}>
          <h2 className="pt-4 text-6xl font-bold text-center text-white capitalize">{verb?.verb}</h2>

          <AnswerContainer
            answers={answers}
            handleAnswer={setAnswers}
            prepositions={prepositions}
            cases={cases}
            index={0}
          />

          {doubleCase ? (
            <AnswerContainer
              answers={answers}
              handleAnswer={setAnswers}
              prepositions={prepositions}
              cases={cases}
              index={1}
              clickHandler={newAnswerRowHandler}
            />
          ) : (
            <AddButtonContainer clickHandler={newAnswerRowHandler} />
          )}

          {result ? (
            <ResultContainer result={result} resetHandler={resetHandler} />
          ) : (
            <ButtonsContainer disabled={buttonDisabled} />
          )}
        </form>
      </div>
    </div>
  );
};

export default ContentCard;
