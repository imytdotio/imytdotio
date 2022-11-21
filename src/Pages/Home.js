import React, { Children } from "react";
import { FiMapPin } from "react-icons/fi";
import map from "../Assets/map.png";
/**
 * @author
 * @function Home
 **/

const Section = (props) => <div className="flex mb-8">{props.children}</div>;
const SectionHeader = (props) => (
  <h3 className="w-16 mr-8 text-gray-400 ">{props.children}</h3>
);

export const Home = (props) => {
  return (
    <div className="w-full text-left">
      <Section>
        <SectionHeader />
        <p className="w-4/5 lg:w-3/5">
          👋 Hello, 我是 YT，一位
          Slash，斜槓族。我是一位學生／內容創作者／Programmer。現正修讀大學課程
          - Data Science y/4, 同時自學🧑‍💻 Programming和在 IG 分享內容。
          由於我十分喜歡📚 閱讀和觀看「🚀 生產力、⛓ 習慣」相關的書本和內容。在
          ✍️ IG上都是分享有關「自我成長」類的內容。 我 🕔 05:00 起床，每天 🍳
          煮早餐、📚 閱讀、學習 Programming, 然後上學。
          我很喜歡學習、閱讀、建立習慣、過有規律的生活。
        </p>
      </Section>

      <Section>
        <SectionHeader>Locate</SectionHeader>
        <div>
          <img src={map} className="h-96 rounded-xl " />
          <p className="text-right mr-4 text-gray-400">
            <FiMapPin className="inline mr-2" />
            Hong Kong
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader>History</SectionHeader>
        <ul>
          <p>IMYT.IO</p>
          <p>Learning React</p>
          <p>Completed Coursera</p>
        </ul>
      </Section>
    </div>
  );
};
