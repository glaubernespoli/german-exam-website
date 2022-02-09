type Verb = {
  verb: string;
  preposition?: string;
  case?: string;
  cases?: {
    preposition: string;
    case: string;
  }[];
};

export default Verb;
