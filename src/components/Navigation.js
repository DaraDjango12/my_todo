import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="h-[4rem] w-full bg-slate-500 text-cyan-950 flex items-center justify-between p-4">
        <Link to="/">LOGO</Link>

        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navigation;
