import React, { useState } from "react";
import { FiCalendar, FiMapPin, FiZoomIn } from "react-icons/fi";
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
        props.text ? "" : ""
      }`}
    >
      {props.children}
    </p>
  );
};
const ListItem = (props) => {
  return <li className="mb-4">{props.children}</li>;
};
const Toggle = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "🔽" : "▶️"} {props.title}
      </button>
      {show && props.element}
    </div>
  );
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
        <Description>
          <Toggle title="Room Booking App" element={<RoomBookingApp />} />
          <Toggle title="HR Management App" element={<HRManagementApp />} />
          <Toggle title="Excel Automation" element={<ExcelAutomation />} />
        </Description>
      </ListItem>

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
        <p>Content creation and writing</p>
        <Description>
          <FiZoomIn className="inline-block mr-2 mb-1" />
          <a
            href="https://www.instagram.com/imyt.io"
            target="_blank"
            className="mr-2 text-b hover:border-b-2 hover:border-blue-400 duration-200"
          >
            Instagram
          </a>
        </Description>
      </ListItem>
      <ListItem>
        <p>Marketing Strategy Development & Execution</p>
      </ListItem>
      <ListItem>
        <p>
          App development{" "}
          <strong>
            (ReactJS, Flutter, Python, SQL, Firebase, Supabase...)
          </strong>
        </p>
        <Description>
          <FiZoomIn className="inline-block mr-2 mb-1" />
          <a
            href="https://www.github.com/imytdotio"
            target="_blank"
            className="mr-2 text-b hover:border-b-2 hover:border-blue-400 duration-200"
          >
            Github
          </a>
        </Description>
        <Description>
          <FiZoomIn className="inline-block mr-2 mb-1" />
          <a
            href="https://flow-booking.vercel.app"
            target="_blank"
            className="mr-2 text-b hover:border-b-2 hover:border-blue-400 duration-200"
          >
            Flow-booking app (Room Booking)
          </a>
        </Description>
        <Description>
          <FiZoomIn className="inline-block mr-2 mb-1" />
          <a
            href="https://flow-worship.vercel.app"
            target="_blank"
            className="mr-2 text-b hover:border-b-2 hover:border-blue-400 duration-200"
          >
            Flow-worship app (HR management)
          </a>
        </Description>
      </ListItem>

      <ListItem>
        <p>Scripting</p>
        <Description>
          <FiZoomIn className="inline-block mr-2 mb-1" />
          <a
            href="https://github.com/imytdotio/Scripts/tree/master/google%20sheet%20to%20gogole%20docs%20receipt"
            target="_blank"
            className="mr-2 text-b hover:border-b-2 hover:border-blue-400 duration-200"
          >
            Spreadshete to Receipts
          </a>
        </Description>
        <Description>
          <FiZoomIn className="inline-block mr-2 mb-1" />
          <a
            href="https://hkid.vercel.app"
            target="_blank"
            className="mr-2 text-b hover:border-b-2 hover:border-blue-400 duration-200"
          >
            HKID verification tool
          </a>
        </Description>
      </ListItem>
      <ListItem>
        <p>Self-driven</p>
        <Description>
          <FiZoomIn className="inline-block mr-2 mb-1" />
          <a
            href="https://www.instagram.com/explore/tags/imyt_readinghut/"
            target="_blank"
            className="mr-2 text-b hover:border-b-2 hover:border-blue-400 duration-200"
          >
            What have I read?
          </a>
        </Description>
      </ListItem>
      <ListItem>
        <p>Language Skills</p>
        <Description>
          <FiZoomIn className="inline-block mr-2 mb-1" />
          Cantonese: Native
        </Description>
        <Description>
          <FiZoomIn className="inline-block mr-2 mb-1" />
          English: Fluent
        </Description>
        <Description>
          <FiZoomIn className="inline-block mr-2 mb-1" />
          Mandarin: Fluent
        </Description>
      </ListItem>
    </ul>
  </SectionB>
);

// Projects
const RoomBookingApp = () => {
  return (
    <>
      <Description text>
        <strong>Idea: </strong>Streamline room bookings for pastors.
      </Description>
      <Description text>
        <strong>How to use: </strong>View real-time room availability and book a
        room directly through the app. Admin workers will approve the booking.
      </Description>
      <Description text>
        <strong>Problem Solved: </strong>Saves time and simplifies the booking
        process for pastors.
      </Description>
    </>
  );
};
const HRManagementApp = () => {
  return (
    <>
      <Description text>
        <strong>Idea: </strong>Streamline HR management for a 30-person team
        with different skills and roles, specifically for creating worship team
        rosters.
      </Description>
      <Description text>
        <strong>How to use: </strong>Team members update their availability for
        each Saturday through the app. The app displays available team members
        by role, and the admin worker selects team members for each role to
        create the roster.
      </Description>
      <Description text>
        <strong>Problem Solved: </strong>Simplifies team availability
        management, saves time, and ensures a fully staffed and prepared worship
        team for each service by creating an efficient and accurate roster.
      </Description>
    </>
  );
};
const ExcelAutomation = () => {
  return (
    <>
      {" "}
      <Description text>
        <strong>Idea: </strong>Automate receipt generation by converting Google
        Sheets entries into Google Docs receipts.
      </Description>
      <Description text>
        <strong>How to use: </strong>Enter data into a Google Form, and a new
        receipt is automatically generated in Google Docs based on the
        corresponding Google Sheets entry.
      </Description>
      <Description text>
        <strong>Problem Solved: </strong>Streamlines receipt generation, reduces
        the risk of human error, and saves valuable time and resources.
      </Description>
    </>
  );
};

export const CV = (props) => {
  return (
    <div className="w-full text-left px-8">
      <H1>🤠 Hi, I am Jeffrey.</H1>
      <LinkButton href="https://www.dropbox.com/s/bwmkf1uzj51x6f8/ChengChiLap_CV.pdf?dl=1">
        Download PDF
      </LinkButton>

      <WorkExperience />
      <Education />
      <Skills />
      <Certification />
    </div>
  );
};
