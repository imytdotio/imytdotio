import React from "react";

/**
 * @author
 * @function Callout
 **/

export const Callout = (props) => {
  return (
    <div className={`${props.className}`}>
      <div className="bg-white flex rounded-xl border-black border-4 p-8 w-fit mb-8 h-fit">
        <p className="m-auto mr-2 text-4xl">{props.emoji}</p>
        <p className="m-auto mr-2">{props.children}</p>
      </div>
    </div>
  );
};

export const Container = (props) => {
  return (
    <div className="md:w-2/3 w-full m-auto text-left px-8 scrollbar-hide duration-200">
      {props.children}
    </div>
  );
};

export const H1 = (props) => {
  return <h1 className="text-6xl font-bold mb-8 mt-2">{props.children}</h1>;
};

export const Description = (props) => {
  return <p className="ml-2 text-gray-600 text-small">{props.children}</p>;
};

export const ListItem = (props) => {
  return <li className="mb-2">{props.children}</li>;
};

export const LinkButton = (props) => {
  return (
    <a
      className="inline-block border-2 rounded-xl p-4 my-1 mr-4 hover:bg-white hover:border-white hover:shadow-xl duration-200"
      href={props.href}
      // target="_blank"
    >
      {props.children}
    </a>
  );
};
