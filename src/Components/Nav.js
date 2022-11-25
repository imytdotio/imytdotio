import React from "react";
import { NavLink } from "react-router-dom";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
/**
 * @author
 * @function Nav
 **/

export const Nav = (props) => {
  const nav =
    "text-black px-4 py-1 my-1 block rounded-md hover:bg-gray-200 duration-100";
  const active =
    "text-white px-4 py-2 my-1 block rounded-md bg-black hover:bg-gray-900";
  const subheading = "text-gray-600 font-medium";
  const link =
    "text-black px-4 py-1 my-1 block rounded-md hover:text-blue-600 duration-100";
  const icon = "inline-block mr-1";
  return (
    <div className="h-screen mx-16 text-left">
      <nav className="bg-white w-80 m-auto p-4 rounded-xl shadow-md">
        <h1 className="text-left text-4xl font-bold mb-8">IMYT.IO</h1>

        <div className="mb-8">
          <NavLink to="/" exact className={nav} activeClassName={active}>
            🏠 主頁
          </NavLink>
          <NavLink to="/bets" exact className={nav} activeClassName={active}>
            🎲 賭博
          </NavLink>
          <NavLink to="/stack" exact className={nav} activeClassName={active}>
            ⚔️ 技能／產出
          </NavLink>
          <NavLink
            to="/products"
            exact
            className={nav}
            activeClassName={active}
          >
            📦 產品
          </NavLink>
          <NavLink to="/blog" exact className={nav} activeClassName={active}>
            📝 文章
          </NavLink>
        </div>

        <div className="mb-8">
          <h2 className={subheading}>快速連結</h2>
          <a href="https://onepercentclub.org" className={link} target="_blank">
            ⭕️ One Percent Club
          </a>
          <a href="https://hkstoicism.com" className={link} target="_blank">
            🗿 HKStoicism
          </a>
          <a
            href="https://instagram.com/imyt_photography"
            className={link}
            target="_blank"
          >
            📸 IMYT_Photography
          </a>
        </div>

        <div className="mb-8">
          <h2 className={subheading}>Find me on...</h2>
          <a
            href="https://instagram.com/imyt.io"
            className={link}
            target="_blank"
          >
            <FiInstagram className={icon} />
            Instagram
          </a>
          <a
            href="https://twitter.com/imyt_io"
            className={link}
            target="_blank"
          >
            <FiTwitter className={icon} />
            Twitter
          </a>
          <a
            href="https://github.com/imytdotio"
            className={link}
            target="_blank"
          >
            <FiGithub className={icon} />
            Github
          </a>
          <a href="https://linkedin.com/" className={link} target="_blank">
            <FiLinkedin className={icon} />
            LinkedIn
          </a>
        </div>
      </nav>
    </div>
  );
};
