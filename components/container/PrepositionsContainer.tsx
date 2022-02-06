type PrepositionsProps = {
  prepositions: string[];
};

const PrepositionsContainer = ({ prepositions }: PrepositionsProps) => {
  return (
    <div className="flex items-center justify-center m-10">
      <div className="bg-gray-900 rounded-lg">
        {prepositions.map((preposition) => (
          <div key={preposition} className="inline-flex rounded-lg">
            <input type="radio" name="preposition" id={preposition} hidden />
            <label
              htmlFor={preposition}
              className="self-center px-4 py-2 text-center text-gray-300 rounded-lg cursor-pointer radio hover:opacity-75"
            >
              {preposition}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PrepositionsContainer;
