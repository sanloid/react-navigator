import React from "react";
import { TABS, data } from "../../data";
import Card from "./Card";
import { Link } from "react-router-dom";

const Summary: React.FC = () => {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Welcome
          </h5>
          <p className="text-gray-700 mb-3">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Link
            to={""}
            className="font-normal dark:text-gray-400 bg-blue-500 text-white rounded-xl p-3 hover:bg-blue-600"
          >
            See transactions
          </Link>
          <p className="text-gray-700 my-3">
            You have {data.total} transaction
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          {TABS.map((label, index) => {
            const filteredData = data.data.filter(
              (item) => item.type === label
            );
            return (
              <Card title={label} count={filteredData.length} to={`${index}`} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Summary;
