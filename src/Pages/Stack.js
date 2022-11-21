import React from "react";
import { FiGithub, FiGlobe, FiLinkedin } from "react-icons/fi";

/**
 * @author
 * @function Stack
 **/

export const Stack = (props) => {
  const Section = (props) => <div className="flex mb-8">{props.children}</div>;
  const SectionHeader = (props) => (
    <h3 className="w-24 mr-8 text-gray-400">{props.children}</h3>
  );
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
      <h1 className="text-6xl font-bold mb-8 mt-2">🧠 Stack</h1>
      <Section>
        <SectionHeader>Programming</SectionHeader>
        <ul>
          <p>HKID Validator</p>
          <p className="mb-2">
            <Link href="https://hkid.vercel.app/">
              <FiGlobe className={icon} />
            </Link>
            <Link href="https://github.com/imytdotio/HKID-Validator-Generator">
              <FiGithub className={icon} />
            </Link>
          </p>
          <p>Coursera Course Completion</p>
          <p className="mb-2">
            <Link href="https://coursera.org/">
              <FiGlobe className={icon} />
            </Link>
            <Link href="https://linkedin.com">
              <FiLinkedin className={icon} />
            </Link>
          </p>
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
