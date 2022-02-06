import Case from "../../types/case";

type CasesProps = {
  cases: Case[];
};

const CasesContainer = ({ cases }: CasesProps) => {
  return (
    <div className="flex items-center justify-center m-10">
      <div className="bg-gray-900 rounded-lg">
        {cases.map((cases) => (
          <div key={cases.name} className="inline-flex rounded-lg">
            <input type="radio" name="cases" id={cases.symbol} hidden />
            <label
              htmlFor={cases.symbol}
              className="self-center px-4 py-2 text-center text-gray-300 rounded-lg cursor-pointer radio hover:opacity-75"
            >
              {cases.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CasesContainer;
