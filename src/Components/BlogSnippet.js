import React from "react";

/**
 * @author
 * @function BlogSnippet
 **/

// export const BlogSnippet = (props) => {
//   return (
//     // <div className="bg-white inline-block p-4 rounded-xl shadow-md">
//     <a
//       className="bg-white hover:bg-gray-300 border-2 border-white hover:border-gray-900 duration-200 text-black inline-block p-4 rounded-xl shadow-md text-left md:w-3/5 w-full"
//       href={props.link}
//       target="_blank"
//     >
//       {/* <img src={props.thumbnail} className="w-72 object-cover" /> */}
//       <h1 className="font-bold text-lg">{props.title}</h1>
//       <p className="font-thin text-gray-600 text-sm mb-4">{props.pubDate.substring(0, 10)}</p>
//       <p className="mb-4">{props.description}</p>
//       {props.categories.map((category) => {
//         return (
//           <p className="inline pr-1" key={category}>
//             #{category}
//           </p>
//         );
//       })}
//     </a>
//     // </div>
//   );
// };

export const BlogSnippet = (props) => {
  return (
    // <div className="bg-white inline-block p-4 rounded-xl shadow-md">
    <a
      className="border-b-2 border-gray-600  p-2 flex hover:bg-white duration-200"
      href={props.link}
      target="_blank"
    >
      {/* <img src={props.thumbnail} className="w-72 object-cover" /> */}
      <p className="text-gray-600 mr-12 font-bold">{props.pubDate.substring(0, 10)}</p>
      <h1 className=" text-black">{props.title}</h1>
      {/* <p className="mb-4">{props.description}</p> */}
      {/* {props.categories.map((category) => {
        return (
          <p className="inline pr-1" key={category}>
            #{category}
          </p>
        );
      })} */}
    </a>
    // </div>
  );
};
