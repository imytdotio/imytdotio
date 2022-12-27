import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BrowserRouter } from "react-router-dom";
import { Callout, H1 } from "../Components/Components";
import { Section, SectionHeader } from "../Components/Section";

/**
 * @author
 * @function Bets
 **/

export const Bets = (props) => {
  const [content, setContent] = useState();
  useEffect(() => {
    import("../Blog/bets/imyt.io.md").then((res) => {
      fetch(res.default)
        .then((res) => res.text())
        .then((res) => setContent(res))
        .catch((err) => console.log(err));
    });
  }, []);

  return (
    <div className="w-full text-left px-8">
      <H1>🎲 Bets</H1>

      <Callout emoji="💡" className="hidden lg:block">
        Bets
        直譯成中文的話應該是賭博，但準確來說，我想表達的意思，更像是實驗🧪。
        <br />
        大型 projects，有機會 monetize，前期工作會投入金錢／大量時間，會歸類為
        Bets。 <br /> <b>有機會成功，有機會失敗，Who knows?</b>
      </Callout>

      {/* original idea, pivot, 投入時間、成功、Current Progress、諗法、結果 */}

      <Section header="imyt.io">
        {/* <p>我在 2021 年 7 月 1 日開始更新 imyt.io 計劃，主要在 Instagram 分享我的閱讀筆記、生產力工具。</p> */}
        <ReactMarkdown children={content} />
      </Section>

      <Section header="StudyNomad">
        <ReactMarkdown children={content} />
      </Section>

      <Section header="Planner">
        <ReactMarkdown children={content} />
      </Section>

      <Section header="5am e-book">
        <p>Hello</p>
      </Section>

      <Section header="1% Circle">
        <p>Hello</p>
      </Section>

      <Section header="ActivityRing">
        <p>Hello</p>
      </Section>

      <Section header="HKStoicism">
        <p>Hello</p>
      </Section>
    </div>
  );
};
