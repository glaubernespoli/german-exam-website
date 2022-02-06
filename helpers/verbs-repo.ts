import cases from "../data/cases.json";
import prepositions from "../data/prepositions.json";
import verbs from "../data/verbs.json";
import Case from "../types/case";
import Verb from "../types/verb";

const typedVerbs: Verb[] = verbs;
const typedCases: Case[] = cases;

const verbsRepo = {
  getRandom: async () => typedVerbs.splice(Math.floor(Math.random() * verbs.length), 1)[0],
  getPrepositions: async () => prepositions,
  getCases: async () => typedCases,
};

export default verbsRepo;
