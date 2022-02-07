import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Main from "../components/Main";
import verbsRepo from "../helpers/verbs-repo";
import ContentCardProps from "../types/contentCard";

const Home = ({ prepositions, cases }: ContentCardProps) => {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Worten Mit Präpositionen"
        description="Connecting words with their right prepositions."
        canonical="https://worten-mit-praepositionen.vercel.app/"
        openGraph={{
          url: "https://worten-mit-praepositionen.vercel.app/",
        }}
      />
      <Head>
        <title>Worten Mit Präpositionen</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main prepositions={prepositions} cases={cases} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const prepositions = await verbsRepo.getPrepositions();
  const cases = await verbsRepo.getCases();
  return { props: { prepositions: prepositions, cases: cases } };
};

export default Home;
