import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BrowserRouter, Link } from "react-router-dom";
import { Callout, H1, Container } from "../Components/Components";
import { Section, SectionHeader } from "../Components/Section";
import {
  ActivityRing,
  Changelog,
  DataScience,
  EBook,
  HKStoicism,
  Imytdotio,
  MarvelousCalculator,
  MarvelousTodo,
  MarvelousWeather,
  OPC,
  Planner,
  ProgrammingCerts,
  Prolific,
  StudyNomad,
} from "../Content/BetsContent";

/**
 * @author
 * @function Bets
 **/

export const Bets = (props) => {
  const [content, setContent] = useState(<Imytdotio />);

  // switch (content) {
  //   case "imyt.io":
  //     return <p>imyt.io</p>;
  //   case "prolific writer":
  //     return <p>Prolific</p>;
  // }
  // useEffect(() => {
  //   import("../Blog/bets/imyt.io.md").then((res) => {
  //     fetch(res.default)
  //       .then((res) => res.text())
  //       .then((res) => setContent(res))
  //       .catch((err) => console.log(err));
  //   });
  // }, []);

  const BetsBox = (props) => {
    return (
      <button
        className="w-full bg-white rounded-3xl shadow-md md:p-4 p-2 min-w-[96px] xl:min-w-[128px] xl:min-h-[128px] border-2 border-white hover:border-black hover:bg-gray-100 duration-200 box-content"
        onClick={() => setContent(props.onClick)}
      >
        <p className="text-6xl mb-4">{props.emoji}</p>
        <p className="text-gray-600 break-words">{props.title}</p>
      </button>
    );
  };

  return (
    <Container>
      <H1>🎲 Bets</H1>

      <Callout emoji="💡" className="hidden md:block">
        Bets
        直譯成中文的話應該是賭博，但準確來說，我想表達的意思，更像是實驗🧪。
        <br />
        大型 projects，前期工作會投入金錢／大量時間，會歸類為
        Bets，通常係有機會有回報嘅。 <br />{" "}
        <b>有機會成功，有機會失敗，Who knows?</b>
      </Callout>

      <div className="overflow-x-auto flex gap-4 h-full m-2 mb-4 py-2 xl:w-prose scrollbar-hide">
        <BetsBox emoji="💬" title="imyt.io @IG" onClick={<Imytdotio />} />
        <BetsBox emoji="✍️" title="Prolific Writer" onClick={<Prolific />} />
        <BetsBox emoji="⭕️" title="One Percent Circle" onClick={<OPC />} />
        <BetsBox emoji="🕔" title="5 am e-book" onClick={<EBook />} />
        <BetsBox emoji="⏰" title="Planner" onClick={<Planner />} />
        {/* <BetsBox emoji="⛺️" title="Study Nomad" onClick={<StudyNomad />} /> */}
        {/* <BetsBox emoji="🪪" title="HK-ID Validator" /> */}
        <BetsBox emoji="🔘" title="Activity Ring" onClick={<ActivityRing />} />
        {/* <BetsBox
          emoji="🧮"
          title="marvelous-calculator"
          onClick={<MarvelousCalculator />}
        />
        <BetsBox
          emoji="🌦"
          title="marvelous-weather"
          onClick={<MarvelousWeather />}
        />
        <BetsBox
          emoji="✅"
          title="marvelous-todo"
          onClick={<MarvelousTodo />}
        /> */}
        <BetsBox emoji="🗿" title="HK-Stoicism" onClick={<HKStoicism />} />
        <BetsBox emoji="🎞" title="Changelog" onClick={<Changelog />} />
        <BetsBox
          emoji="📃"
          title="Programming Certificates"
          onClick={<ProgrammingCerts />}
        />
        <BetsBox emoji="🔢" title="Data Science" onClick={<DataScience />} />
      </div>
      {content}

      {/* <p>我在 2021 年 7 月 1 日開始更新 imyt.io 計劃，主要在 Instagram 分享我的閱讀筆記、生產力工具。</p> */}
    </Container>
  );
};
