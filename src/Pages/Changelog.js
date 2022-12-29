import React from "react";

/**
 * @author
 * @function Changelog
 **/

const Tag = (props) => {
  return (
    <div className="bg-blue-200 rounded-xl w-fit px-4 py-2 my-2 mb-4 mr-4 flex">
      <p>{props.icon}</p>
      <p className="ml-2">{props.tag}</p>
    </div>
  );
};

const Log = (props) => {
  return (
    <div className="flex m-auto w-fit px-8 pb-4 text-left lg:w-2/5 md:w-1/2 w-10/12 my-4">
      <p className="text-gray-600 mr-12">{props.date}</p>
      <div>
        <h1 className="text-lg font-bold">{props.title}</h1>
        <div className="flex">
          <Tag icon="🚀" tag="Update" />
          <Tag icon="🧪" tag="Smallbet" />
          {props.section && <Tag tag={props.section} />}
        </div>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export const Changelog = (props) => {
  return (
    <div>
      <Log
        date="2022-12-29"
        title="Bought changelog.today domain"
        section="Changelog.today"
      >
        🧠 Linktree type: changelog.today/{"{yourname}"}
        <br /> 
      </Log>
      <Log date="2022-12-29" title="Changelog updated" section="imyt.io">
        ✅ Created Changelog <br />
        ⏳ Markdown implementation
        <br />
        ⏳ Connect to CMS (Airtable?)
        <br />
        ⏳ Easier form to fill in
        <br />
        🔺
        <br />
        🔻 <br />
        ➕ <br />
        <br /> Changelog 呢個 idea 係嚟自{" "}
        <a href="https://changelog.brianlovin.com/">BrianLovin</a>,
        其實呢個網嘅原形都係嚟自佢。我覺得 changelog 呢個 idea
        好正，可以記錄我做過啲乜嘢。
      </Log>
    </div>
  );
};
