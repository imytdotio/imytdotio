import React from "react";

/**
 * @author
 * @function Section
 **/

// export const Section = (props) => {
//   return (
//     <div className={`lg:flex  my-8 ${props.className}`}>
//       <h3 className={`w-24 mr-8 sm:mb-2 text-gray-400 `}>{props.header}</h3>
//       <p className="w-96">{props.children}</p>
//     </div>
//   );
// };
export const Section = (props) => {
  return (
    <div
      className={`grid items-start grid-cols-1 gap-4 md:gap-6 md:grid-cols-12 mb-4 ${props.className}`}
    >
      <h3
        className={`col-span-2 pt-8 text-lg font-extrabold text-black md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40`}
      >
        {props.header}
      </h3>
      <div className="col-span-10 max-w-prose">{props.children}</div>
    </div>
  );
};

// Used in CV, don't delete
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
