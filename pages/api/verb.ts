import type { NextApiRequest, NextApiResponse } from "next";
import verbsRepo from "../../helpers/verbs-repo";

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const verb = await verbsRepo.getRandom();
  res.status(200).json(verb);
};
