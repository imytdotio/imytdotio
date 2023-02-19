import React from "react";
import {
  FiCalendar,
  FiGithub,
  FiGlobe,
  FiMapPin,
  FiZoomIn,
} from "react-icons/fi";
import { SectionB, SectionHeader } from "../Components/Section";
import { H1 } from "../Components/Components";
import { LinkButton } from "../Components/Components";

/**
 * @author
 * @function CV
 **/

const Description = (props) => {
  return (
    <p
      className={`ml-2 text-gray-600 text-small ${props.className} ${
        props.text ? "mt-2" : ""
      }`}
    >
      {props.children}
    </p>
  );
};
const ListItem = (props) => {
  return <li className="mb-2">{props.children}</li>;
};

const Education = () => (
  <SectionB>
    <SectionHeader>Education</SectionHeader>
    <ul>
      <ListItem>
        <p>
          <b>Bachelor</b> of Science(Hons) in <b>Data Science</b> and Business
          Intelligence
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
      <ListItem>
        <p>C.C.C. Ming Kei College</p>
        <Description>
          <FiCalendar className="inline-block mr-2 mb-1" />
          2013-2019
        </Description>
      </ListItem>
    </ul>
  </SectionB>
);

const WorkExperience = () => (
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
          Jul 2021 ~ Feb 2023
        </Description>
        <Description text>
          Created and managed a successful Instagram page focused on building
          habits, productivity, and discipline, gaining{" "}
          <strong>2,000 followers</strong>.
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
        <Description text>
          {/* <FiZoomIn className="inline-block mr-2 mb-1" /> */}
          Designed & launched successful <strong>
            Facebook ad campaigns
          </strong>{" "}
          and <strong>marketing strategies</strong>, resulting in over{" "}
          <strong>500,000</strong>
          views for the startup's vtuber collaboration web app.
        </Description>
      </ListItem>
      <ListItem>
        <p>Solo App Developer </p>
        <Description>
          <FiCalendar className="inline-block mr-2 mb-1" />
          Aug 2022 ~ Now
        </Description>
        <Description text>
          Utilized{" "}
          <strong>ReactJS, Tailwindcss, and Supabase / Firebase</strong> to
          develop a room booking web app, an <strong>HR management tool</strong>{" "}
          for a church's worship team, and various other projects. Also
          developed a simple <strong>script</strong> for converting Excel sheets
          to receipts and an app for validating and generating HKIDs.
        </Description>
      </ListItem>
    </ul>
  </SectionB>
);

const Certification = () => (
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
);

const Skills = () => (
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
            href="https://www.dribbble.com/imyt"
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
);

export const CV = (props) => {
  return (
    <div className="w-full text-left px-8">
      <H1>🤠 Hi, I am Jeffrey.</H1>
      <LinkButton href="https://www.dropbox.com/s/r474gab7vxgnhlu/ChengChiLap_CV.pdf?dl=1">
        Download PDF
      </LinkButton>

      <WorkExperience />
      <Education />
      <Certification />
      <Skills />
    </div>
  );
};
