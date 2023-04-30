import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AppDevPage: React.FC = () => {
  const projects = [
    { id: "0", name: "50-ppl HRM App", to: "/stack/AppDev/hrmApp" },
    { id: "1", name: "Room Booking", to: "/stack/AppDev/roombooking" },
    {
      id: "2",
      name: "Google Sheets Automation",
      to: "/stack/AppDev/sheetsAutomation",
    },
    // Add more projects here
  ];
  return (
    <div className="flex">
      {/* <ul className="flex flex-col gap-2 mr-8 md:w-64 w-full"> */}
      <ul className="flex flex-col gap-2 mr-8 w-64">
        <h1 className="font-bold text-xl p-4">💻 App Dev</h1>
        {projects.map((project) => (
          <NavLink
            to={project.to}
            className="border rounded-xl p-4 "
            key={project.id}
          >
            {project.name}
          </NavLink>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default AppDevPage;
