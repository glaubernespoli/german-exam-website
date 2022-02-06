import ContentCardProps from "../types/contentCard";
import ContentCard from "./ContentCard";

const Main = ({ verb }: ContentCardProps) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-5xl pb-24 mx-auto pt-52">
        <h1 className="mb-6 font-bold text-center text-white text-80 font-4 lh-6 ld-04">German Easy No</h1>
        <h2 className="text-2xl font-semibold text-center text-gray-700 font-4 lh-6 ld-04 pb-11">
          Match this with that
          <br />
        </h2>
      </div>
      <ContentCard verb={verb} />
    </section>
  );
};

export default Main;
