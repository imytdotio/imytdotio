import React from "react";
import { Link } from "react-router-dom";

import { FiInstagram, FiGithub, FiTwitter } from "react-icons/fi";
import { FaKaggle } from "react-icons/fa";
import Header from "../components/Header";

interface LinkSpanProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

interface SocialPillProps {
  href: string;
  className?: string;
  icon: any;
  children: React.ReactNode;
}

const LinkSpan: React.FC<LinkSpanProps> = ({ href, className, children }) => {
  return (
    <span
      className={`text-sky-500 hover:underline underline-offset-4 ${className}`}
    >
      <a href={href} target="_blank">
        {children}
      </a>
    </span>
  );
};

const SocialPill: React.FC<SocialPillProps> = ({
  href,
  className,
  icon,
  children,
}) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        className={`w-full inline-block hover:shadow-sm rounded-full border-2 px-8 py-4 border-zinc-200 text-zinc-400 hover:border-sky-400 hover:font-bold hover:text-sky-600 duration-200 ${className}`}
      >
        <span className="inline-block align-middle mr-2">{icon}</span>
        <span className="align-middle">{children}</span>
      </a>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Header title="👋 Hi, I am YT." />
      <h2 className="font-bold text-4xl mb-12">
        I am a <LinkSpan href="">Data Scientist</LinkSpan> /{" "}
        <LinkSpan href="https://github.com/imytdotio">Developer</LinkSpan> /{" "}
        <LinkSpan href="https://instagram.com/imyt.io">
          Content Creator
        </LinkSpan>
        . I love learning. I love{" "}
        <LinkSpan href="https://instagram.com/imyt.io">reading</LinkSpan>. I
        love building. I love testing out my ideas.
      </h2>
      <div className="flex md:flex-row md:gap-8 flex-col gap-2">
        <SocialPill href="https://instagram.com/imyt.io" icon={<FiInstagram />}>
          Instagram
        </SocialPill>
        <SocialPill href="https://www.kaggle.com/imytdotio" icon={<FaKaggle />}>
          Kaggle
        </SocialPill>
        <SocialPill href="https://github.com/imytdotio" icon={<FiGithub />}>
          Github
        </SocialPill>
        <SocialPill href="https://instagram.com/imyt.io" icon={<FiTwitter />}>
          Twitter
        </SocialPill>
      </div>
    </>
  );
};

export default HomePage;
