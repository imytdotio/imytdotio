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
      <H1>🏠 Home</H1>
      {/* <Callout emoji="🎁" className="">
        <a href="https://imyt.gumroad.com/l/ring/free" target="_blank">
          按這裏免費獲得 Activity Ring{" "}
        </a>
      </Callout> */}
      <Section>
        <p>
          👋 Hello, 我是 YT，一位 Slash，斜槓族。我是一位學生／
          <Link href="https://instagram.com/imyt.io">內容創作者</Link>／
          <Link href="https://github.com/imytdotio">自學 Programmer</Link>
          。現正修讀大學課程 - Data Science y/4, 同時自學🧑‍💻 Programming和在 IG
          分享內容。 <br className="mb-4" />
          由於我十分喜歡📚 閱讀和觀看
          <Link href="https://www.instagram.com/explore/tags/imyt_mp/">
            「🚀 生產力、⛓ 習慣」
          </Link>
          相關的書本和內容。在 ✍️ IG上都是分享有關「自我成長」類的內容。 我{" "}
          <Link href="https://imyt.gumroad.com/l/5am">🕔 05:00 起床</Link>{" "}
          ，每天 🍳 煮早餐、
          <Link href="https://www.instagram.com/explore/tags/imyt_readinghut/">
            📚 閱讀
          </Link>
          、學習 Programming, 然後上學。
          我很喜歡學習、閱讀、建立習慣、過有規律的生活。
        </p>
      </Section>

      <Section header="Locate">
        <img src={map} className="w-max object-cover rounded-xl " />
        <p className="mr-4 text-gray-400">
          <FiMapPin className="inline mr-2" />
          Hong Kong
        </p>
      </Section>

      {/* <Section header="Site Navigation">
        <ul>
          <p><NavLink to='/bets'>🎲 Bets</NavLink>: 所有我試過／未開始嘅 projects，成功、失敗、學到嘅事</p>
          <p><NavLink to='/stack'>🧠 Stack</NavLink>: 我嘅技能，同埋我嘅技能證明 (i.e. Portfolio)</p>
          <p><NavLink to='/bets'>📜 Manifesto</NavLink>: 所有我試過嘅 projects，成功、失敗、學到嘅事</p>
          <p><NavLink to='/changelog'>🎞 Changelog</NavLink>: 我網站同埋我自己個人嘅更新記錄</p>
        </ul>
      </Section> */}
      <Footer />
    </Container>
  );
};
