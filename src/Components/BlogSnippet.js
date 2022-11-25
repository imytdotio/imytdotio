import React from "react";

/**
 * @author
 * @function BlogSnippet
 **/

export const BlogSnippet = (props) => {
  return (
    // <div className="bg-white inline-block p-4 rounded-xl shadow-md">
    <a
      className="bg-white text-black inline-block p-4 rounded-xl shadow-md text-left md:w-3/5 w-full"
      href={props.link}
      target="_blank"
    >
      {/* <img src={props.thumbnail} className="w-72 object-cover" /> */}
      <h1 className="font-bold text-lg">{props.title}</h1>
      <p className="font-thin text-gray-600 text-sm mb-4">{props.pubDate.substring(0, 10)}</p>
      <p className="mb-4">{props.description}</p>
      {props.categories.map((category) => {
        return (
          <p className="inline pr-1" key={category}>
            #{category}
          </p>
        );
      })}
    </a>
    // </div>
  );
};
