import React from "react";

/**
 * @author
 * @function Section
 **/

export const Section = (props) => {
  return (
    <div className={`grid grid-cols-12 my-8 ${props.className}`}>
      <h3 className={`col-span-1 w-24 mr-8 text-gray-400 ${props.className}`}>{props.header}</h3>
      <div className="sm:col-span-6 col-span-11">{props.children}</div>
    </div>
  );
};

export const SectionB = (props) => {
  return (
    <div
      className={`flex my-8 border-b-2 border-gray-200 lg:w-2/3 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export const SectionHeader = (props) => (
  <h3 className={`w-24 mr-8 text-gray-400 ${props.className}`}>
    {props.children}
  </h3>
);
