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
    console.log(`verb: ${verb}, prep: ${preposition}, case: ${xCase}`);
  },
};

export default verbsRepo;
