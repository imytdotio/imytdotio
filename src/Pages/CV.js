import React from "react";

/**
 * @author
 * @function CV
 **/

export const CV = (props) => {
  const Section = (props) => <div className="flex mb-8">{props.children}</div>;
  const SectionHeader = (props) => (
    <h3 className="w-24 mr-8 text-gray-400">{props.children}</h3>
  );
  return (
    <div className="w-full text-left px-8">
      <h1 className="text-6xl font-bold mb-8 mt-2">🤠 Hi, I am Jeffrey.</h1>
      <Section>
        <SectionHeader>Education</SectionHeader>
        <p>Bachelor of Science(Hons) in Data Science and Business Intelligence.</p>
      </Section>
    </div>
  );
};
