import React from "react";
import {
  FiCalendar,
  FiGithub,
  FiGlobe,
  FiMapPin,
  FiZoomIn,
} from "react-icons/fi";

/**
 * @author
 * @function CV
 **/

export const CV = (props) => {
  const Section = (props) => (
    <div className="flex my-8 border-b-2 border-gray-200 lg:w-2/3">
      {props.children}
    </div>
  );
  const SectionHeader = (props) => (
    <h3 className="w-24 mr-8 text-gray-400">{props.children}</h3>
  );
  const Description = (props) => {
    return <p className="ml-2 text-gray-600 text-small">{props.children}</p>;
  };
  const ListItem = (props) => {
    return <li className="mb-2">{props.children}</li>;
  };
  return (
    <div className="w-full text-left px-8">
      <h1 className="text-6xl font-bold mb-8 mt-2">🤠 Hi, I am Jeffrey.</h1>
      <a
        className="border-2 rounded-xl p-4 m-4 hover:bg-white hover:border-white hover:shadow-xl duration-200"
        href="https://www.imyt.io/cv" target='_blank'
      >
        Download PDF
      </a>
      <Section>
        <SectionHeader>Education</SectionHeader>
        <ul>
          <ListItem>
            <p>
              <b>Bachelor</b> of Science(Hons) in <b>Data Science</b> and
              Business Intelligence
            </p>
            <Description>
              <FiCalendar className="inline-block mr-2 mb-1" />
              2019-2023
            </Description>
            <Description>
              <FiMapPin className="inline-block mr-2 mb-1" />
              Hang Sang University
            </Description>
          </ListItem>

          <p>C.C.C. Ming Kei College</p>
          <Description>
            <FiCalendar className="inline-block mr-2 mb-1" />
            2013-2019
          </Description>
        </ul>
      </Section>

      <Section>
        <SectionHeader>Work Experience</SectionHeader>
        <ul>
        <ListItem>
            <p>
              Solo Content Creator at{" "}
              <a
                href="https://www.instagram.com/imyt.io"
                className="mr-2 text-b hover:border-b-2 hover:border-blue-400 duration-200"
                target="_blank"
              >
                imyt.io
              </a>
            </p>
            <Description>
              <FiCalendar className="inline-block mr-2 mb-1" />
              Jul 2021 ~ Now
            </Description>
          </ListItem>
          <ListItem>
            <p>
              Marketing <b>Internship</b> at{" "}
              <a
                href="https://www.avatech.gg"
                className="mr-2 text-b hover:border-b-2 hover:border-blue-400 duration-200"
                target="_blank"
              >
                Avatech
              </a>
            </p>
            <Description>
              <FiCalendar className="inline-block mr-2 mb-1" />
              Dec 2021 ~ Aug 2022
            </Description>
            <Description>
              <FiZoomIn className="inline-block mr-2 mb-1" />
              Launching Facebook Ads & Marketing Campaigns
            </Description>
          </ListItem>
        </ul>
      </Section>

      <Section>
        <SectionHeader>Certification & Qualification</SectionHeader>
        <ul>
          <ListItem>
            <p>
              Professional in <b>React Native</b>
            </p>
            <Description>
              <FiCalendar className="inline-block mr-2 mb-1" />
              Dec 2022
            </Description>
            <Description>
              <FiZoomIn className="inline-block mr-2 mb-1" />
              Meta & Coursera
            </Description>
          </ListItem>
          <ListItem>
            <p>
              Professional in <b>Front End Development</b>
            </p>
            <Description>
              <FiCalendar className="inline-block mr-2 mb-1" />
              Dec 2022
            </Description>
            <Description>
              <FiZoomIn className="inline-block mr-2 mb-1" />
              Meta & Coursera
            </Description>
          </ListItem>
          <ListItem>
            <p>
              Professional in <b>Back End Development</b>
            </p>
            <Description>
              <FiCalendar className="inline-block mr-2 mb-1" />
              Dec 2022
            </Description>
            <Description>
              <FiZoomIn className="inline-block mr-2 mb-1" />
              Meta & Coursera
            </Description>
          </ListItem>
        </ul>
      </Section>

      <Section>
        <SectionHeader>Skills</SectionHeader>
        <ul>
          <ListItem>
            <p>ReactJS</p>
            <Description>
              <FiZoomIn className="inline-block mr-2 mb-1" />
              <a
                href="https://www.github.com/imytdotio"
                className="mr-2 text-b hover:border-b-2 hover:border-blue-400 duration-200"
              >
                Github
              </a>
            </Description>
            <Description>
              <FiZoomIn className="inline-block mr-2 mb-1" />
              <a
                href="https://www.hkid.vercel.app/"
                className="mr-2 text-b hover:border-b-2 hover:border-blue-400 duration-200"
              >
                HKID Validator
              </a>
            </Description>
          </ListItem>
          <ListItem>
            <p>UI Design</p>
            <Description>
              <FiZoomIn className="inline-block mr-2 mb-1" />
              <a
                href="https://www.dribbble.com/imytdotio"
                className="mr-2 text-b hover:border-b-2 hover:border-blue-400 duration-200"
              >
                Dribbble
              </a>
            </Description>
          </ListItem>
          <ListItem>
            <p>Video Editing</p>
            <Description>
              <FiZoomIn className="inline-block mr-2 mb-1" />
              <a
                href="https://www.youtube.com/@imyt"
                className="mr-2 text-b hover:border-b-2 hover:border-blue-400 duration-200"
              >
                Youtube
              </a>
            </Description>
          </ListItem>
        </ul>
      </Section>
    </div>
  );
};
