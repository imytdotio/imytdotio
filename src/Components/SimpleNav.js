import React from "react";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function SimpleNav
 **/

// const navIcon = () => {
//   return ()
// }
const nav =
  "bg-white shadow-xl xl:p-3 p-2 m-1 text-xl rounded-xl lg:p-4 text-2xl border-white border-2 duration-100 hover:border-black hover:border-2";

const active = "hidden";

export const SimpleNav = (props) => {
  return (
    <div className="bg-white m-8 m-auto py-6 px-2 rounded-xl mb-16">
      <NavLink to="/" exact className={nav} activeClassName={active}>
        🏠
      </NavLink>
      <NavLink to="/bets" className={nav} activeClassName={active}>
        🎲
      </NavLink>
      <NavLink to="/blog" className={nav} activeClassName={active}>
        📝
      </NavLink>
      <NavLink to="/stack" className={nav} activeClassName={active}>
        ⚔️
      </NavLink>
      <NavLink to="/products" className={nav} activeClassName={active}>
        📦
      </NavLink>
      <NavLink to="/cv" className={nav} activeClassName={active}>
        🤠
      </NavLink>
    </div>
  );
};
