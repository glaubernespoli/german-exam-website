import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Main from "../components/Main";
import verbsRepo from "../helpers/verbs-repo";
import ContentCardProps from "../types/contentCard";

export default function Home({ verb, prepositions, cases }: ContentCardProps) {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Home: nine4"
        description="Welcome to nine4 homepage."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>nine4</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main verb={verb} prepositions={prepositions} cases={cases} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const verb = await verbsRepo.getRandom();
  const prepositions = await verbsRepo.getPrepositions();
  const cases = await verbsRepo.getCases();
  return { props: { verb: verb, prepositions: prepositions, cases: cases } };
};
