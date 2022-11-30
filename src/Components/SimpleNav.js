import React from "react";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function SimpleNav
 **/

const nav = "bg-white shadow-xl p-3 m-2 text-xl rounded-xl";
const active = "hidden";

export const SimpleNav = (props) => {
  return (
    <div className="bg-white m-8 m-auto p-6 rounded-xl mb-16">
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
    </div>
  );
};
