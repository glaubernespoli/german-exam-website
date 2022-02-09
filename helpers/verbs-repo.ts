import cases from "../data/cases.json";
import prepositions from "../data/prepositions.json";
import verbs from "../data/verbs.json";
import Answer from "../types/answer";
import Case from "../types/case";
import Verb from "../types/verb";

const typedVerbs: Verb[] = verbs;
const typedCases: Case[] = cases;

const verbsRepo = {
  getRandom: async () => typedVerbs.splice(Math.floor(Math.random() * verbs.length), 1)[0],
  getFirst: async () => typedVerbs[0],
  getPrepositions: async () => prepositions.sort(),
  getCases: async () => typedCases,
  getCaseFrom: async (caseValue: string) => typedCases.find((xCase) => xCase.symbol === caseValue),
  validateVerb: async (verb: Verb | undefined, answers: Answer[]) => {
    if (!verb || !answers.every((answer) => answer.case && answer.preposition)) {
      throw new TypeError("You must select every option.");
    }

    //only 1 answer
    if (!verb.cases) {
      if (answers.length > 1) {
        const objCase = typedCases.find((value) => value.symbol === verb.case);
        throw new TypeError(
          `The verb [${verb.verb}] only has one case, but you chose two. Chosen ones: ${answers
            .map((answer) => `[preposition: ${answer.preposition}, case: ${answer.case?.name}]`)
            .join(" | ")}, correct answer: [preposition: ${verb.preposition}, case: ${objCase?.name}].`
        );
      }

      const answer = answers[0];
      const preposition = answer.preposition;
      const xCase = answer.case;
      if (verb.preposition?.toLowerCase() != preposition?.toLowerCase()) {
        throw new TypeError(
          `Wrong preposition for verb [${verb.verb}]. Chosen one: [${preposition}], correct one: [${verb.preposition}]`
        );
      }

      const objCase = typedCases.find((value) => value.symbol === verb.case);
      if (objCase?.symbol != xCase?.symbol) {
        throw new TypeError(
          `Wrong case for verb [${verb.verb}]. Chosen one: [${xCase?.name}], correct one: [${objCase?.name}]`
        );
      }

      return `[${verb.verb}] has preposition  [${preposition}] and case [${xCase?.name}]!`;

      //two answers
    } else {
      const rightAnswers = verb.cases.every((verbCase) =>
        answers.find(
          (answer) =>
            verbCase.preposition.toLowerCase() === answer.preposition?.toLowerCase() &&
            verbCase.case === answer.case?.symbol
        )
      );

      const verbCombinations = verb.cases
        .map((verbCase) => `[preposition: ${verbCase.preposition}, case: ${verbCase.case}]`)
        .join(" | ");
      if (rightAnswers) {
        return `[${verb.verb}] has the following combinations: ${verbCombinations}`;
      } else {
        const answerCombinations = answers
          .map((answer) => `[preposition: ${answer.preposition}, case: ${answer.case?.name}]`)
          .join(" | ");

        throw new TypeError(
          `[${verb.verb}] has the following combinations: ${verbCombinations}, but you chose: ${answerCombinations}`
        );
      }
    }
  },
};

export default verbsRepo;
