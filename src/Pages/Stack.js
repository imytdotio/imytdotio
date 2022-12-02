import React from "react";
import { FiGithub, FiGlobe, FiLinkedin } from "react-icons/fi";
import { Callout, H1, ListItem, Description } from "../Components/Components";
import { Section, SectionHeader } from "../Components/Section";

/**
 * @author
 * @function Stack
 **/

export const Stack = (props) => {
  const Link = (props) => (
    <a
      target="_blank"
      href={props.href}
      className="text-black hover:text-blue-600"
    >
      {props.children}
    </a>
  );
  const icon = "inline mr-2";

  return (
    <div className="w-full text-left px-8">
      <H1>🧠 Stack</H1>
      <Callout emoji="💬" className="hidden lg:block">
        You don't become who you are by shouting affirmations in the mirror,{" "}
        <br />
        but by <b>having a stack of undeniable proof</b> that you are who you
        say you are. <br />
        <a
          href="https://twitter.com/alexhormozi/status/1571625128806715392"
          className="text-black"
          target="_black"
        >
          — Alex Hormozi
        </a>
      </Callout>
      <Section>
        <SectionHeader>Programming</SectionHeader>
        <ul>
          <ListItem>
            <p>HKID Validator</p>
            <Description>Latest Update: 11-29-2022</Description>
            <Description>
              <Link href="https://hkid.vercel.app/">
                <FiGlobe className={icon} />
              </Link>
              <Link href="https://github.com/imytdotio/HKID-Validator-Generator">
                <FiGithub className={icon} />
              </Link>
            </Description>
          </ListItem>

          <ListItem>
            <p>Coursera Course Completion</p>
            <Description>Latest Update: 11-29-2022</Description>
            <Description>
              <Link href="https://coursera.org/">
                <FiGlobe className={icon} />
              </Link>
              <Link href="https://linkedin.com">
                <FiLinkedin className={icon} />
              </Link>
            </Description>
          </ListItem>

          <ListItem>
            <p>Room Booking System</p>
          </ListItem>
          <ListItem>
            <p>Marvelous Calculator App</p>
          </ListItem>
          <ListItem>
            <p>Marvelous Weather App</p>
          </ListItem>
        </ul>
      </Section>
      <Section>
        <SectionHeader>3D Modeling</SectionHeader>
        <ul>
          <p>Voxel</p>
        </ul>
      </Section>
    </div>
  );
};
