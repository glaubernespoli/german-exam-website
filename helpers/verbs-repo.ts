import cases from "../data/cases.json";
import prepositions from "../data/prepositions.json";
import verbs from "../data/verbs.json";
import Case from "../types/case";
import Verb from "../types/verb";

const typedVerbs: Verb[] = verbs;
const typedCases: Case[] = cases;

const verbsRepo = {
  getRandom: async () => typedVerbs.splice(Math.floor(Math.random() * verbs.length), 1)[0],
  getPrepositions: async () => prepositions.sort(),
  getCases: async () => typedCases,
  getCaseFrom: async (caseValue: string) => typedCases.find((xCase) => xCase.symbol === caseValue),
  validateVerb: async (verb: Verb | undefined, preposition: string | undefined, xCase: Case | undefined) => {
    if (!verb || !preposition || !xCase) {
      throw new TypeError("You must select every option.");
    }

    if (verb.preposition?.toLowerCase() != preposition.toLowerCase()) {
      throw new TypeError(`Wrong preposition. Chosen one: [${preposition}], correct one: [${verb.preposition}]`);
    }

    const objCase = typedCases.find((value) => value.symbol === verb.case);
    if (objCase?.symbol != xCase.symbol) {
      throw new TypeError(`Wrong case. Chosen one: [${xCase.name}], correct one: [${objCase?.name}]`);
    }

    return `[${verb.verb}] has preposition  [${preposition}] and case [${xCase.name}]!`;
  },
};

export default verbsRepo;
