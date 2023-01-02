import React, { useEffect, useState } from "react";
import { Section } from "../Components/Section";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { H1, Container } from "../Components/Components";

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
    <div className="flex m-auto px-8 pb-4 text-left my-4">
      <p className="text-gray-600 mr-12">{props.date}</p>
      <div>
        <h1 className="text-lg font-bold">{props.title}</h1>
        <div className="flex">
          <Tag icon="🚀" tag="Update" />
          {/* <Tag icon="🧪" tag="Smallbet" /> */}
          {props.section && <Tag tag={props.section} />}
        </div>
        {props.children}
      </div>
    </div>
  );
};

export const Changelog = (props) => {
  const [changes, setChanges] = useState("");
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer key9i7Kg5nT0BpPuC");
    myHeaders.append(
      "Cookie",
      "brw=brwRORZisik3kXjil; AWSALB=dCm8lVYs8YlhtATLudgz77II/h4a+RAbeJJu/K+dsNgeLSeiqsnqP0f6jgMzhEQkj6G1xGnyvKfGRn2iHZN8jHOpmQ64fQLAbZsRFSjHnwHgdTk9Od5Kn/13RJsz; AWSALBCORS=dCm8lVYs8YlhtATLudgz77II/h4a+RAbeJJu/K+dsNgeLSeiqsnqP0f6jgMzhEQkj6G1xGnyvKfGRn2iHZN8jHOpmQ64fQLAbZsRFSjHnwHgdTk9Od5Kn/13RJsz"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.airtable.com/v0/appoojJ00LWXkHLdV/tblCJvsJRQzzITao9",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setChanges(JSON.parse(result).records);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Container>
      <H1>🎞 Changelog</H1>
      {changes &&
        changes.map((change) => {
          return (
            <Section header={change.fields.date}>
              <h3 className="font-bold">{change.fields.title}</h3>
              <div className="flex">
                <Tag tag={change.fields.typeOfChanges} />
                <Tag tag={change.fields.section} />
              </div>
              <ReactMarkdown>{change.fields.content}</ReactMarkdown>
            </Section>
          );
        })}
    </Container>
  );
};
