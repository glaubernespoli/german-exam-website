import { ReactEventHandler } from "react";

type OptionProps = {
  data: {
    id: string;
    text: string;
  }[];
  group: string;
  selected: string | undefined;
  handler: ReactEventHandler;
};

const OptionsContainer = ({ data, group, selected, handler }: OptionProps) => {
  return (
    <div className="flex items-center justify-center m-10">
      <div className="bg-gray-900 rounded-lg">
        {data.map((item) => (
          <div key={item.id} className="inline-flex transition duration-300 ease-linear rounded-lg hover:bg-green-900">
            <input
              type="radio"
              name={group}
              id={item.id}
              value={item.id}
              checked={item.id === selected}
              hidden
              onChange={handler}
            />
            <label
              htmlFor={item.id}
              className="self-center px-4 py-2 text-center text-gray-300 rounded-lg cursor-pointer select-none radio hover:opacity-75"
            >
              {item.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OptionsContainer;
