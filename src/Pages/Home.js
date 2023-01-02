import React from "react";
import { FiMapPin } from "react-icons/fi";
import map from "../Assets/map.png";
import { Section, SectionHeader } from "../Components/Section";
import { Callout, H1 } from "../Components/Components";
import { Footer } from "../Components/Footer";
import { LinkButton } from "../Components/Components";

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
    <div className="lg:w-2/3 w-full m-auto text-left px-8">
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

      <Section header="History">
        <ul>
          <p>IMYT.IO</p>
          <p>Learning React</p>
          <p>Completed Coursera</p>
        </ul>
      </Section>
      <LinkButton href="/changelog">🎞 Changelog</LinkButton>
      <Footer />
    </div>
  );
};
