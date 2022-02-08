import { MouseEventHandler } from "react";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

type RemoveButtonContainerProps = {
  clickHandler: MouseEventHandler<HTMLButtonElement>;
};
const RemoveButtonContainer = ({ clickHandler }: RemoveButtonContainerProps) => {
  return (
    <div className="flex items-center w-3/4 px-6 py-4 mx-auto my-3 rounded-md shadow">
      <div className="w-full mx-auto text-right">
        <button
          type="button"
          className="visible px-4 py-2 m-2 text-gray-500 transition duration-300 ease-linear border border-gray-700 rounded-md select-none disabled:invisible hover:text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline"
          onClick={clickHandler}
        >
          <MdOutlineRemoveCircleOutline fontSize={20} />
        </button>
      </div>
    </div>
  );
};

export default RemoveButtonContainer;
