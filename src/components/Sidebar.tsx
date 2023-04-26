import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  const pages = [
    { id: "0", name: "Home", emoji: "🏡", to: "/" },
    // { id: "1", name: "Bets", emoji: "🧪", to: "/bets" },
    // { id: "2", name: "Stack", emoji: "⚔️", to: "/stack" },
    // { id: "3", name: "Produc", emoji: "📦", to: "/Product" },
    // { id: "4", name: "Blog", emoji: "📝", to: "/Blog" },
  ];

  return (
    <aside className="w-fit border-r h-screen md:block hidden">
      <nav className="p-4 my-8">
        <ul>
          {pages.map((page) => (
            <NavLink
              className="font-semibold text-4xl"
              to={page.to}
              key={page.id}
            >
              <li className="p-4 m-2 w-20 border-gray-300 border-2 hover:border-2 hover:border-sky-400 hover:bg-white hover:shadow-md duration-200 rounded-xl cursor-pointer block align-middle text-center ">
                {/* <span className="font-semibold text-4xl"> */}
                {/* # {page.name} */}
                <p className="bg-transparent">{page.emoji}</p>
                {/* </span> */}
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
