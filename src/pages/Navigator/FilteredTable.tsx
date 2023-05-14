import React from "react";
import { data } from "../../data.ts";

interface Props {
  filter: string;
}

const FilteredTable: React.FC<Props> = ({ filter }) => {
  const filteredData = data.data.filter((item) => item.type === filter);
  return (
    <>
      <table className="border-collapse border border-gray-500 mx-auto">
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2">Name</th>
            <th className="border border-gray-500 px-4 py-2">{filter}</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item._id}>
              <td className="border border-gray-500 px-4 py-2">
                {item.name.first} {item.name.last}
              </td>
              <td className="border border-gray-500 px-4 py-2">{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FilteredTable;
