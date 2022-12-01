import React from "react";
import {
  FiCalendar,
  FiGithub,
  FiGlobe,
  FiMapPin,
  FiZoomIn,
} from "react-icons/fi";
import { SectionB, SectionHeader } from "../Components/Section";

/**
 * @author
 * @function CV
 **/

export const CV = (props) => {
  const Description = (props) => {
    return <p className="ml-2 text-gray-600 text-small">{props.children}</p>;
  };
  const ListItem = (props) => {
    return <li className="mb-2">{props.children}</li>;
  };
  const LinkButton = (props) => {
    return (
      <a
        className="inline-block border-2 rounded-xl p-4 my-1 mr-4 hover:bg-white hover:border-white hover:shadow-xl duration-200"
        href={props.href}
        target="_blank"
      >
        {props.children}
      </a>
    );
  };

  return (
    <div className="w-full text-left px-8">
      <h1 className="text-6xl font-bold mb-8 mt-2">🤠 Hi, I am Jeffrey.</h1>
      <LinkButton href="https://www.dropbox.com/s/0mtrd3nwoucqcwl/CV.pdf?dl=1">Download PDF</LinkButton>

      <SectionB>
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
      </SectionB>

      <SectionB>
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
      </SectionB>

      <SectionB>
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
      </SectionB>

      <SectionB>
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
      </SectionB>
    </div>
  );
};
