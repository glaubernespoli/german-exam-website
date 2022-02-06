const ButtonsContainer = () => {
  return (
    <div className="flex items-center w-3/4 px-6 py-4 mx-auto my-3 rounded-md shadow">
      <div className="w-full mx-auto text-center">
        <button
          type="submit"
          className="px-4 py-2 m-2 text-green-500 transition duration-500 border border-green-500 rounded-md select-none ease hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ButtonsContainer;
