import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FilteredTable from "./FilteredTable";
import { TABS } from "../../data";

const Navigator: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<number>(
    parseInt(location.search.split("=")[1]) || 0
  );

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    navigate({
      search: `?tab=${index}`,
    });
  };

  useEffect(() => {
    navigate({ search: `?tab=${activeTab}` });
  }, [activeTab, navigate]);

  return (
    <>
      <nav className="bg-blue-500 text-white py-3">
        <ul className="flex justify-around">
          {TABS.map((label, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                activeTab === index ? "border-b-2 border-white" : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {label}
            </li>
          ))}
        </ul>
      </nav>
      <section className="p-10">
        <FilteredTable filter={TABS[activeTab]} />
      </section>
    </>
  );
};

export default Navigator;
