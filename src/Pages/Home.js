import React from "react";
import { FiMapPin } from "react-icons/fi";
import map from "../Assets/map.png";
import { Section, SectionHeader } from "../Components/Section";
import { Callout, H1 } from "../Components/Components";
import { Footer } from "../Components/Footer";
import { LinkButton, Container } from "../Components/Components";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Home
 **/

const Link = (props) => (
  <a
    target="_blank"
    href={props.href}
    className="text-blue-600 hover:border-b hover:border-blue-600"
  >
    {props.children}
  </a>
);
export const Home = (props) => {
  return (
    <Container>
      <H1>ð  Home</H1>
      {/* <Callout emoji="ð" className="">
        <a href="https://imyt.gumroad.com/l/ring/free" target="_blank">
          æéè£åè²»ç²å¾ Activity Ring{" "}
        </a>
      </Callout> */}
      <Section>
        <p>
          ð Hello, ææ¯ YTï¼ä¸ä½ Slashï¼ææ§æãææ¯ä¸ä½å­¸çï¼
          <Link href="https://instagram.com/imyt.io">å§å®¹åµä½è</Link>ï¼
          <Link href="https://github.com/imytdotio">èªå­¸ Programmer</Link>
          ãç¾æ­£ä¿®è®å¤§å­¸èª²ç¨ - Data Science y/4, åæèªå­¸ð§âð» Programmingåå¨ IG
          åäº«å§å®¹ã <br className="mb-4" />
          ç±æ¼æåååæ­¡ð é±è®åè§ç
          <Link href="https://www.instagram.com/explore/tags/imyt_mp/">
            ãð çç¢åãâ ç¿æ£ã
          </Link>
          ç¸éçæ¸æ¬åå§å®¹ãå¨ âï¸ IGä¸é½æ¯åäº«æéãèªææé·ãé¡çå§å®¹ã æ{" "}
          <Link href="https://imyt.gumroad.com/l/5am">ð 05:00 èµ·åº</Link>{" "}
          ï¼æ¯å¤© ð³ ç®æ©é¤ã
          <Link href="https://www.instagram.com/explore/tags/imyt_readinghut/">
            ð é±è®
          </Link>
          ãå­¸ç¿ Programming, ç¶å¾ä¸å­¸ã
          æå¾åæ­¡å­¸ç¿ãé±è®ãå»ºç«ç¿æ£ãéæè¦å¾ççæ´»ã
        </p>
      </Section>

      <Section header="Locate">
        <img src={map} className="w-max object-cover rounded-xl " />
        <p className="mr-4 text-gray-400">
          <FiMapPin className="inline mr-2" />
          Hong Kong
        </p>
      </Section>

      <Section header="Site Navigation">
        <ul>
          <p><NavLink to='/bets'>ð² Bets</NavLink>: æææè©¦éï¼æªéå§å projectsï¼æåãå¤±æãå­¸å°åäº</p>
          <p><NavLink to='/stack'>ð§  Stack</NavLink>: æåæè½ï¼ååæåæè½è­æ (i.e. Portfolio)</p>
          <p><NavLink to='/bets'>ð Manifesto</NavLink>: æææè©¦éå projectsï¼æåãå¤±æãå­¸å°åäº</p>
          <p><NavLink to='/changelog'>ð Changelog</NavLink>: æç¶²ç«ååæèªå·±åäººåæ´æ°è¨é</p>
        </ul>
      </Section>
      <Footer />
    </Container>
  );
};
