import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  count: number;
  to: string;
}

const Card: React.FC<Props> = ({ title, count, to }) => {
  return (
    <>
      <div className="flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="text-gray-700 mb-3">{count}</p>
        <Link
          to={`navigator?tab=${to}`}
          className="font-normal dark:text-gray-400 bg-blue-500 text-white rounded-xl p-3 hover:bg-blue-600"
        >
          See All
        </Link>
      </div>
    </>
  );
};

export default Card;
