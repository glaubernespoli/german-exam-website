import { MouseEventHandler } from "react";
import Result from "../../types/result";

type ResultProps = {
  result: Result;
  resetHandler: MouseEventHandler<HTMLButtonElement>;
};

const ResultContainer = ({ result, resetHandler }: ResultProps) => {
  if (result.correct) {
    return (
      <ResultAlert
        textColor="text-green-700"
        bgColor="bg-green-100"
        messageHighlight="Correct!"
        message={result.resultMessage}
        resetHandler={resetHandler}
      />
    );
  }
  return (
    <ResultAlert
      textColor="text-red-700"
      bgColor="bg-red-100"
      messageHighlight="Wrong!"
      message={result.resultMessage}
      resetHandler={resetHandler}
    />
  );
};

type ResultAlertProps = {
  textColor: string;
  bgColor: string;
  messageHighlight: string;
  message: string;
  resetHandler: MouseEventHandler<HTMLButtonElement>;
};
const ResultAlert = ({ textColor, bgColor, messageHighlight, message, resetHandler }: ResultAlertProps) => {
  return (
    <div className={`flex p-4 text-sm ${textColor} ${bgColor} rounded-lg`} role="alert">
      <div className="flex items-center justify-center flex-grow">
        <svg className="inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
        <div>
          <span className="font-medium">{messageHighlight}</span> {message}
        </div>
      </div>
      <button
        className="p-2 pl-5 pr-5 text-lg text-gray-100 transition duration-300 ease-linear bg-gray-900 border-gray-300 rounded-lg focus:border-4 hover:bg-gray-700"
        onClick={resetHandler}
      >
        Next
      </button>
    </div>
  );
};
export default ResultContainer;
