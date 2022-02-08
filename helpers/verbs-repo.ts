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
  getPrepositions: async () => prepositions.sort(),
  getCases: async () => typedCases,
  getCaseFrom: async (caseValue: string) => typedCases.find((xCase) => xCase.symbol === caseValue),
  validateVerb: async (verb: Verb | undefined, answers: Answer[] | undefined) => {
    if (!verb || !answers || !answers.length || !answers[0].case || !answers[0].preposition) {
      throw new TypeError("You must select every option.");
    }

    //only 1 answer
    const answer = answers[0];
    const preposition = answer.preposition;
    const xCase = answer.case;
    if (verb.preposition?.toLowerCase() != preposition?.toLowerCase()) {
      throw new TypeError(`Wrong preposition. Chosen one: [${preposition}], correct one: [${verb.preposition}]`);
    }

    const objCase = typedCases.find((value) => value.symbol === verb.case);
    if (objCase?.symbol != xCase?.symbol) {
      throw new TypeError(`Wrong case. Chosen one: [${xCase?.name}], correct one: [${objCase?.name}]`);
    }

    return `[${verb.verb}] has preposition  [${preposition}] and case [${xCase?.name}]!`;
  },
};

export default verbsRepo;
