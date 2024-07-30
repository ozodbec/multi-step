import React from 'react';
import { useLocation } from 'react-router-dom';

function Sidebar() {
  const { pathname } = useLocation();
  const links = [
    { count: 1, text: "Your Info", path: "/" }, 
    { count: 2, text: "Select Plan", path: "/secondstep" },
    { count: 3, text: "Add-Ons", path: "/threestep" },
    { count: 4, text: "Summary", path: "/fourthstep" }
  ];

  return (
    <div className="min-w-[22%] MyContainer backgroundIMG p-9 rounded-xl overflow-hidden">
      {links.map(({ text, count, path }) => (
        <div key={count} className="flex items-center gap-5 my-4">
          <span className={`px-4 border text-[#fff] border-sky-200 py-2 rounded-full font-bold ${pathname === path ? "active" : ""}`}>{count}</span>
          <span className="flex flex-col items-start text-lightBlue">
            STEP {count}
            <span className="text-white font-bold text-[19px]">{text}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
