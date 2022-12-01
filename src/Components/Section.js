import React from "react";

/**
 * @author
 * @function Section
 **/

export const Section = (props) => {
  return <div className={`flex my-8 ${props.className}`}>{props.children}</div>;
};

export const SectionB = (props) => {
  return <div className={`flex my-8 border-b-2 border-gray-200 lg:w-2/3 ${props.className}`}>{props.children}</div>;
};

export const SectionHeader = (props) => (
  <h3 className={`w-24 mr-8 text-gray-400 ${props.className}`}>{props.children}</h3>
);
