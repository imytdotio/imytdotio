import React from "react";

/**
 * @author
 * @function Callout
 **/

export const Callout = (props) => {
  return (
    <div className="hidden lg:block">
      <div className="bg-white flex rounded-xl border-black border-4 p-8 w-fit mb-8 h-fit">
        <p className="m-auto mr-2 text-4xl">{props.emoji}</p>
        <p className="m-auto mr-2">{props.children}</p>
      </div>
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